export default function FourMemeRedirect() {
  if (typeof window !== "undefined") {
    window.location.href = "https://four.meme";
  }
  return null;
}
