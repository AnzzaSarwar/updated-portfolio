// _app.tsx
import "@/styles/globals.css"; // Global CSS file import karein
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Bubbles add karein */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      {/* Main component render karein */}
      <Component {...pageProps} />
    </>
  );
}