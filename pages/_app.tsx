import '@/styles/globals.css';

import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/context/auth';

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (<div>
    <AuthProvider>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </AuthProvider>
  </div>);
}
