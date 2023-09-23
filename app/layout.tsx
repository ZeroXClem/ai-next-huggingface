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
    <div className="flex justify-center items-center h-screen">

  <div className="w-3/4 max-w-md p-8 rounded-lg shadow-xl bg-gray-900">

   <div className="font-bold text-3xl dark:text-white">

     Chat

   </div>

    {messages.length > 0 &&

      messages.map(m => (

        <p key={m.id} className="break-words mb-2 text-white">

          {m.role === 'user' ? 'User: ' : 'AI: '} 

          {m.content}

        </p>

      ))

    }

     <form 
       onSubmit={handleSubmit} 
       className="mt-4">

       <input  

         className="p-4 w-full border border-gray-700 rounded-lg bg-gray-800 text-white"

         value={input}

         placeholder="Type a message..."

         onChange={handleInputChange}

       />

     </form>

  </div>

</div>
  )
  }

