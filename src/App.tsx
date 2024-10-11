import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import AdminPage from './components/AdminPage'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header onSearch={handleSearch} toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={
              <div className="flex flex-1 overflow-hidden">
                <Sidebar 
                  isOpen={isSidebarOpen}
                  closeSidebar={() => setIsSidebarOpen(false)}
                />
                <MainContent searchTerm={searchTerm} />
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App