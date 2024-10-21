//import localFont from 'next/font/local';

/*import Image from 'next/image';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/
import TimeLine from '@/components/TimeLine';

export default function Home() {
  return (
    <div><TimeLine /></div>
  )
}
