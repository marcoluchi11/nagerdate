import NagerProvider from "@/context/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NagerProvider>
      <Component {...pageProps} />
    </NagerProvider>
  );
}
