'use client'

import { useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import ChatArea from '@/components/ChatArea'
import { useChatStore } from '@/store/chatStore'

export default function Home() {
  const { messagesEndRef, setMessagesEndRef, getMessagesForChannel, currentChannel } = useChatStore()
  const channelMessages = getMessagesForChannel(currentChannel)

  useEffect(() => {
    if (messagesEndRef) {
      messagesEndRef.scrollIntoView({ behavior: 'smooth' })
    }
  }, [channelMessages.length, messagesEndRef])

  return (
    <div className="relative z-10 flex h-screen w-full">
      <Sidebar />
      <ChatArea />
    </div>
  )
}
