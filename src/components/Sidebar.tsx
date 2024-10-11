import React from 'react'
import { LayoutGrid, Star, Compass, MessageSquare, PenTool, Image, Headphones, Briefcase, Lightbulb, Code, Search, FileText, BookOpen, X } from 'lucide-react'

const Sidebar = ({ isOpen, closeSidebar }) => {
  const sidebarItems = [
    { icon: LayoutGrid, text: 'All', category: 'all' },
    { icon: Star, text: 'Monthly Highlights', category: 'monthly-highlights' },
    { icon: Compass, text: 'Popular Navigation', category: 'popular-navigation' },
    { icon: MessageSquare, text: 'Conversation Tools', category: 'conversation' },
    { icon: PenTool, text: 'Writing Tools', category: 'writing' },
    { icon: Image, text: 'Image Generation/Processing', category: 'image' },
    { icon: Headphones, text: 'Audio Tools', category: 'audio' },
    { icon: Briefcase, text: 'Office Tools', category: 'office' },
    { icon: Lightbulb, text: 'Prompt Suggestions', category: 'prompt' },
    { icon: Code, text: 'Code Editing', category: 'code' },
    { icon: Search, text: 'AI Search', category: 'ai-search' },
    { icon: FileText, text: 'Text Summarization', category: 'text' },
    { icon: BookOpen, text: 'Learning Resources', category: 'learning' },
  ]

  const handleCategoryClick = (category) => {
    const element = document.getElementById(category)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (window.innerWidth < 1024) {
      closeSidebar()
    }
  }

  return (
    <aside className={`bg-white shadow-md transition-all duration-300 fixed lg:sticky top-0 left-0 z-40 h-screen lg:h-[calc(100vh-64px)] overflow-y-auto ${isOpen ? 'w-64' : 'w-0 lg:w-64'}`}>
      <div className="p-4 flex justify-between items-center lg:hidden">
        <h2 className="font-bold text-lg">Categories</h2>
        <button onClick={closeSidebar} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <nav className="h-full">
        <ul className="h-full overflow-y-auto">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <button
                className="flex items-center w-full p-4 text-gray-700 hover:bg-gray-100 text-left"
                onClick={() => handleCategoryClick(item.category)}
              >
                <item.icon size={24} className="mr-4" />
                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar