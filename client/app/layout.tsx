import localFont from "@next/font/local";
import './globals.css'
import Header from '@/components/layout/main/Header/header'
import Footer from "@/components/layout/main/Footer/footer";
const bannikovaC = localFont({src: '../fonts/Bannikovac.otf'})
const circeLight = localFont({src: '../fonts/Circe-Light.ttf'})

import {inspect} from "util";

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en" className={`${bannikovaC.className}`}>
        {children}
    </html>
  )
}
