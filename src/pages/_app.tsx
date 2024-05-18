// pages/_app.tsx
import { AppProps } from "next/app";
import "../../styles/globals.css"; // Arquivo onde você importa os estilos globais (opcional)
import "tailwindcss/tailwind.css"; // Importe os estilos do Tailwind CSS

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
