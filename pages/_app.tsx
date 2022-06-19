import "@styles/globals.css";
import "@styles/Calendar.css";
import type { AppProps } from "next/app";
import { store } from "@store/config";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
