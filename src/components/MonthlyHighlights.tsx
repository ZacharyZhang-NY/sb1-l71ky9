import React from 'react'
import { Star } from 'lucide-react'

const MonthlyHighlights = () => {
  const highlights = [
    { name: 'AI Writing Assistant', description: 'Boost your writing productivity' },
    { name: 'Smart Image Editor', description: 'Edit images with AI-powered tools' },
    { name: 'Voice Transcription Pro', description: 'Accurate speech-to-text conversion' },
  ]

  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Monthly Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <Star className="text-yellow-400 mb-2" size={24} />
            <h3 className="font-bold text-lg mb-2">{highlight.name}</h3>
            <p className="text-gray-600 text-sm md:text-base">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonthlyHighlights