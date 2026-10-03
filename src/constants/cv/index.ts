// to update the CV replace src/assets/cv/CV.pdf, the link picks up the new file
export const CV_URL: string = new URL(
  "../../assets/cv/CV.pdf",
  import.meta.url,
).href;
export const CV_FILE_NAME = "Vlad_Khrushchov_CV.pdf";
