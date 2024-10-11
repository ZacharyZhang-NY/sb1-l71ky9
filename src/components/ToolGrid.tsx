import React, { useState } from 'react'
import { Wrench, MessageSquare, Image, Code, FileText, Headphones, Search, Star, Compass, PenTool, Briefcase, Lightbulb, BookOpen } from 'lucide-react'

const ToolGrid = ({ searchTerm }) => {
  const [savedTools, setSavedTools] = useState({})

  const categories = [
    { name: 'Conversation', icon: MessageSquare, description: 'Explore conversation tools', id: 'conversation' },
    { name: 'Image', icon: Image, description: 'Explore image tools', id: 'image' },
    { name: 'Code', icon: Code, description: 'Explore code tools', id: 'code' },
    { name: 'Text', icon: FileText, description: 'Explore text tools', id: 'text' },
    { name: 'Audio', icon: Headphones, description: 'Explore audio tools', id: 'audio' },
    { name: 'AI Search', icon: Search, description: 'Explore AI search tools', id: 'ai-search' },
    { name: 'Monthly Highlights', icon: Star, description: 'View monthly highlights', id: 'monthly-highlights' },
    { name: 'Popular Navigation', icon: Compass, description: 'Explore popular navigation', id: 'popular-navigation' },
    { name: 'Writing Tools', icon: PenTool, description: 'Explore writing tools', id: 'writing' },
    { name: 'Office Tools', icon: Briefcase, description: 'Explore office tools', id: 'office' },
    { name: 'Prompt Suggestions', icon: Lightbulb, description: 'Explore prompt suggestions', id: 'prompt' },
    { name: 'Learning Resources', icon: BookOpen, description: 'Explore learning resources', id: 'learning' },
  ]

  const tools = [
    { name: 'ChatGPT', description: 'Advanced language model for conversation', usageCount: 1000000, category: 'Conversation' },
    { name: 'DALL-E', description: 'AI image generation from text descriptions', usageCount: 500000, category: 'Image' },
    { name: 'Copilot', description: 'AI-powered coding assistant', usageCount: 750000, category: 'Code' },
    { name: 'Midjourney', description: 'Create art with AI', usageCount: 300000, category: 'Image' },
    { name: 'Jasper', description: 'AI content writing and marketing copy', usageCount: 200000, category: 'Text' },
    { name: 'Otter.ai', description: 'AI-powered meeting notes and transcription', usageCount: 150000, category: 'Audio' },
    { name: 'Claude', description: 'OpenAI\'s GPT-3 based AI assistant', usageCount: 400000, category: 'Conversation' },
    { name: 'Google Gemini', description: 'Google\'s advanced AI model', usageCount: 600000, category: 'AI Search' },
    { name: 'Grammarly', description: 'AI-powered writing assistant', usageCount: 800000, category: 'Writing Tools' },
    { name: 'Notion AI', description: 'AI-enhanced note-taking and project management', usageCount: 350000, category: 'Office Tools' },
    { name: 'GPT-3 Playground', description: 'Experiment with OpenAI\'s GPT-3', usageCount: 250000, category: 'Prompt Suggestions' },
    { name: 'Coursera AI Courses', description: 'Online AI and machine learning courses', usageCount: 100000, category: 'Learning Resources' },
  ]

  const toggleSavedTool = (toolName) => {
    setSavedTools(prev => ({
      ...prev,
      [toolName]: !prev[toolName]
    }))
  }

  const renderToolCard = (tool) => {
    const IconComponent = categories.find(cat => cat.name === tool.category)?.icon || Wrench
    return (
      <div key={tool.name} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <IconComponent className="text-blue-500 mr-2" size={20} />
            <h4 className="font-bold">{tool.name}</h4>
          </div>
          <button
            onClick={() => toggleSavedTool(tool.name)}
            className={`text-xl ${savedTools[tool.name] ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{tool.usageCount.toLocaleString()} uses</span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors">
            Try Now
          </button>
        </div>
      </div>
    )
  }

  const renderCategoryTools = (category) => {
    const filteredTools = tools.filter(tool => 
      tool.category === category.name &&
      (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       tool.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    if (filteredTools.length === 0) {
      return null
    }

    return (
      <div key={category.id} id={category.id} className="mb-8">
        <h3 className="text-xl font-bold mb-4">{category.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map(renderToolCard)}
        </div>
      </div>
    )
  }

  return (
    <div>
      {categories.map(renderCategoryTools)}
    </div>
  )
}

export default ToolGrid