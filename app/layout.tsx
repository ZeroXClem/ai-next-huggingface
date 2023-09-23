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
    <div className="font-bold text-3xl dark:text-white flex flex-col items-center justify-center h-screen">

  <div className="w-3/4">

    {messages.length > 0 &&

      messages.map(m => (

        <p key={m.id} className="break-words mb-2">

          {m.role === 'user' ? 'User: ' : 'AI: '}

          {m.content}

        </p>

      ))

    }

  </div>

  <form onSubmit={handleSubmit} className="w-3/4">

    <input

      className="p-4 mt-8 border border-gray-700 rounded-lg w-full"

      value={input}

      placeholder="Ask a question..."

      onChange={handleInputChange}

    />

  </form>

</div>

  )
  }

