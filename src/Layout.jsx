import { Inter } from "next/font/google"
import "./index.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "John Paul Batusan Portfolio",
  description: "A single page application portfolio with smooth scrolling",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
