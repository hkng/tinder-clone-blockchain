import "../styles/globals.css";
import { TinderProvider } from "../context/TinderContext";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://kfzp1uyiagfp.usemoralis.com:2053/server"
      appId='oXPoGA1WxtFghn4aLLQNgBvb5959iqHMNoq35htw'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
