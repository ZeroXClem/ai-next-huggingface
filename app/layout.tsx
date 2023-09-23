import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenAssistant Chat',
  description: 'Powered by HuggingFace & Vercel'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">

  <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>

    {children}

  </body>

    </html>
  )
  }

