import "./globals.css";
import {
  Montserrat
} from 'next/font/google'

import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '500', '700', '900'],
  styles: ['italic', 'normal'],
  subsets: ["latin"]
})

export const metadata = {
  title: "Patitas Felices",
  description: "Patitas felices es una plataforma que conecta a personas que quieren adoptar animales con personas que quieren rescatarlos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
