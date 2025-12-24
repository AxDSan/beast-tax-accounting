import * as React from "react"
import { useState } from "react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm here to help with your tax questions. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    },
    {
      id: 2,
      text: "I need help with my small business taxes. Can you tell me about your services?",
      sender: "user",
      timestamp: new Date(Date.now() - 240000), // 4 minutes ago
    },
    {
      id: 3,
      text: "Absolutely! We specialize in small business tax preparation, bookkeeping, and strategic tax planning. Our licensed tax strategists can help reduce your tax liability while ensuring compliance.",
      sender: "bot",
      timestamp: new Date(Date.now() - 180000), // 3 minutes ago
    },
    {
      id: 4,
      text: "What about payroll services? My business is growing and I need help with that.",
      sender: "user",
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
    },
    {
      id: 5,
      text: "Great question! We offer comprehensive payroll services including payroll processing, tax filing, and compliance. We handle everything so you can focus on growing your business.",
      sender: "bot",
      timestamp: new Date(Date.now() - 60000), // 1 minute ago
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setNewMessage("")

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your question! Our tax experts will get back to you within 24 hours. In the meantime, feel free to ask me anything about our services.",
        "I understand you're looking for tax assistance. Let me connect you with one of our specialists. What's the best time to reach you?",
        "That's a great question about tax deductions! Many business owners don't realize they can deduct expenses like home office, vehicle costs, and equipment. Would you like me to send you our deduction guide?",
        "For tax planning, timing is everything! We recommend quarterly reviews to optimize your tax strategy. Shall I schedule a consultation for you?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, botMessage])
    }, 1000 + Math.random() * 2000) // Random delay between 1-3 seconds
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 hover:bg-red-500 text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}

        {/* Notification dot when closed */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-gray-900 border border-red-900/30 rounded-lg shadow-2xl z-40 flex flex-col">
          {/* Chat Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Beast Tax Support</h3>
                <p className="text-xs text-red-100">● Online</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-red-100 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-800">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-red-600 text-white"
                        : "bg-gray-700 text-gray-100"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-red-100" : "text-gray-400"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <form onSubmit={sendMessage} className="p-4 bg-gray-900 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-md transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default ChatWidget
