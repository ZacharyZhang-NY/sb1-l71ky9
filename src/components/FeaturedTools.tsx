import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const FeaturedTools = () => {
  const featuredTools = [
    {
      name: 'AI Assistant Pro',
      description: 'Advanced conversational AI for all your needs',
      image: 'https://source.unsplash.com/random/800x600?ai',
    },
    {
      name: 'ImageMaster AI',
      description: 'Create stunning images with AI-powered tools',
      image: 'https://source.unsplash.com/random/800x600?technology',
    },
    {
      name: 'CodeGenius',
      description: 'AI-powered code completion and refactoring',
      image: 'https://source.unsplash.com/random/800x600?coding',
    },
  ]

  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Featured Tools</h2>
      <div className="relative">
        <div ref={carouselRef} className="flex overflow-x-auto space-x-4 md:space-x-6 pb-4 scrollbar-hide">
          {featuredTools.map((tool, index) => (
            <div key={index} className="flex-shrink-0 w-64 md:w-80 bg-white rounded-lg shadow-md overflow-hidden">
              <img src={tool.image} alt={tool.name} className="w-full h-40 md:h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">{tool.description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm md:text-base">
                  Try Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default FeaturedTools