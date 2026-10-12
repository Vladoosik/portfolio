// modules
import { RefObject, useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Escape to close, page scroll lock, focus moved into the modal and kept there
export const useModalBehavior = (
  active: boolean,
  onClose: () => void,
  ref: RefObject<HTMLElement>,
): void => {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!active) return;

    const { body, documentElement } = document;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    // keep the layout in place when the scrollbar disappears
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
    ref.current?.focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !ref.current) return;

      const focusable = Array.from(
        ref.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((element) => element.offsetParent !== null);
      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;
      const isOutside = !ref.current.contains(current);

      if (event.shiftKey && (current === first || current === ref.current || isOutside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || isOutside)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [active, ref]);
};
