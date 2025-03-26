// // _app.tsx
import "@/styles/globals.css"; // Global CSS file import karein
import { AppProps } from "next/app";


export default function App({Component, pageProps }: AppProps) {
    return (
        <div>
              {/* Bubbles add karein */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <Component {...pageProps} />

</div>


       )}
