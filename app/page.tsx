'use client'
// Create a state variable to track the dark mode state in Chat component (app/page.tsx)

import { useState } from 'react';

export default function Chat() {
  const [darkMode, setDarkMode] = useState(false);

  // Rest of the component code...

  // Toggle the dark mode state
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col w-full max-w-md py-24 mx-auto stretch ${darkMode ? 'dark-mode' : ''}`}>
      {/* Rest of the component code */}
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}
import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.length > 0
        ? messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
