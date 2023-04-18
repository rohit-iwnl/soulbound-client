import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { TransactionProvider } from "@/context/TransactionContext";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </TransactionProvider>
  );
}
