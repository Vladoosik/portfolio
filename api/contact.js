// Vercel serverless function: forwards the contact form to Telegram.
// TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are set in the Vercel project settings
// (Settings -> Environment Variables), they never reach the browser.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = { name: 100, email: 200, description: 3000 };

// best-effort limit, kept in the memory of a warm instance:
// 5 messages per 10 minutes from one IP
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map();

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  const limited = recent.length >= MAX_REQUESTS;
  if (!limited) recent.push(now);
  hits.set(ip, recent);
  return limited;
};

// the message is sent with parse_mode "html", user input must not break the markup
const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const send = (res, status, body) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
};

const readField = (body, field) =>
  typeof body[field] === "string" ? body[field].trim() : "";

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return send(res, 405, { error: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    return send(res, 500, { error: "Contact form is not configured" });
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch (error) {
    body = null;
  }
  if (!body || typeof body !== "object") {
    return send(res, 400, { error: "Invalid request body" });
  }

  // honeypot: hidden from people, bots fill it in — pretend the message was sent
  if (readField(body, "website")) {
    return send(res, 200, { ok: true });
  }

  const name = readField(body, "name");
  const email = readField(body, "email");
  const description = readField(body, "description");

  const isValid =
    name &&
    description &&
    EMAIL_PATTERN.test(email) &&
    name.length <= MAX_LENGTH.name &&
    email.length <= MAX_LENGTH.email &&
    description.length <= MAX_LENGTH.description;
  if (!isValid) {
    return send(res, 400, { error: "Invalid form data" });
  }

  const forwardedFor = String(req.headers["x-forwarded-for"] || "");
  const ip = forwardedFor.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return send(res, 429, { error: "Too many messages, try again later" });
  }

  let text = `<b>Письмо с сайта</b>\n`;
  text += `<b>Отправитель: </b> ${escapeHtml(name)} \n`;
  text += `<b>Почта: </b> ${escapeHtml(email)} \n`;
  text += `<b>Описание: </b> ${escapeHtml(description)}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, parse_mode: "html", text }),
      },
    );
    if (!response.ok) {
      console.error(`Telegram responded with ${response.status}`);
      return send(res, 502, { error: "Message was not delivered" });
    }
  } catch (error) {
    console.error("Telegram request failed");
    return send(res, 502, { error: "Message was not delivered" });
  }

  return send(res, 200, { ok: true });
};
