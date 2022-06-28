import "@styles/globals.css";
import "@styles/Calendar.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { store } from "@store/config";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ToastContainer hideProgressBar autoClose={2000} />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
