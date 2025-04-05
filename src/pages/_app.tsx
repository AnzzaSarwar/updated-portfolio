import "@/styles/globals.css"; // Global CSS file import karein
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
