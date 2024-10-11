import React from 'react'
import FeaturedTools from './FeaturedTools'
import MonthlyHighlights from './MonthlyHighlights'
import ToolGrid from './ToolGrid'

const MainContent = ({ searchTerm }) => {
  return (
    <main className="flex-1 overflow-y-auto bg-gradient-to-br from-pink-100 to-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div id="all">
          <FeaturedTools />
          <MonthlyHighlights />
        </div>
        <ToolGrid searchTerm={searchTerm} />
      </div>
    </main>
  )
}

export default MainContent