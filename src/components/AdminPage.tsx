import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Wrench, MessageSquare, Image, Code, FileText, Headphones, Search, Star, Compass, PenTool, Briefcase, Lightbulb, BookOpen } from 'lucide-react'

const iconMap = {
  Wrench, MessageSquare, Image, Code, FileText, Headphones, Search, Star, Compass, PenTool, Briefcase, Lightbulb, BookOpen
}

const AdminPage = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Conversation', icon: 'MessageSquare' },
    { id: 2, name: 'Image', icon: 'Image' },
    { id: 3, name: 'Code', icon: 'Code' },
  ])

  const [tools, setTools] = useState([
    { id: 1, name: 'ChatGPT', category: 'Conversation', icon: 'MessageSquare' },
    { id: 2, name: 'DALL-E', category: 'Image', icon: 'Image' },
    { id: 3, name: 'Copilot', category: 'Code', icon: 'Code' },
  ])

  const [newCategory, setNewCategory] = useState({ name: '', icon: 'Wrench' })
  const [newTool, setNewTool] = useState({ name: '', category: '', icon: 'Wrench' })
  const [editingCategory, setEditingCategory] = useState(null)
  const [editingTool, setEditingTool] = useState(null)

  const handleAddCategory = (e) => {
    e.preventDefault()
    if (newCategory.name && newCategory.icon) {
      setCategories([...categories, { ...newCategory, id: categories.length + 1 }])
      setNewCategory({ name: '', icon: 'Wrench' })
    }
  }

  const handleEditCategory = (category) => {
    setEditingCategory(category)
  }

  const handleUpdateCategory = (e) => {
    e.preventDefault()
    setCategories(categories.map(cat => 
      cat.id === editingCategory.id ? editingCategory : cat
    ))
    setEditingCategory(null)
  }

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id))
    setTools(tools.filter(tool => tool.category !== categories.find(cat => cat.id === id).name))
  }

  const handleAddTool = (e) => {
    e.preventDefault()
    if (newTool.name && newTool.category && newTool.icon) {
      setTools([...tools, { ...newTool, id: tools.length + 1 }])
      setNewTool({ name: '', category: '', icon: 'Wrench' })
    }
  }

  const handleEditTool = (tool) => {
    setEditingTool(tool)
  }

  const handleUpdateTool = (e) => {
    e.preventDefault()
    setTools(tools.map(tool => 
      tool.id === editingTool.id ? editingTool : tool
    ))
    setEditingTool(null)
  }

  const handleDeleteTool = (id) => {
    setTools(tools.filter(tool => tool.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm md:text-base">
          Back to Home
        </Link>
      </div>

      {/* Category Management */}
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mb-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Manage Categories</h2>
        <form onSubmit={handleAddCategory} className="space-y-4 mb-4">
          <div>
            <label htmlFor="categoryName" className="block mb-1 text-sm md:text-base">Category Name</label>
            <input
              type="text"
              id="categoryName"
              value={newCategory.name}
              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              className="w-full px-3 py-2 border rounded text-sm md:text-base"
              required
            />
          </div>
          <div>
            <label htmlFor="categoryIcon" className="block mb-1 text-sm md:text-base">Icon</label>
            <select
              id="categoryIcon"
              value={newCategory.icon}
              onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
              className="w-full px-3 py-2 border rounded text-sm md:text-base"
            >
              {Object.keys(iconMap).map(icon => (
                <option key={icon} value={icon}>{icon}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm md:text-base">
            Add Category
          </button>
        </form>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm md:text-base">Name</th>
                <th className="px-4 py-2 text-left text-sm md:text-base">Icon</th>
                <th className="px-4 py-2 text-left text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr key={category.id} className="border-b">
                  <td className="px-4 py-2 text-sm md:text-base">{category.name}</td>
                  <td className="px-4 py-2">
                    {React.createElement(iconMap[category.icon], { size: 24 })}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEditCategory(category)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2 text-xs md:text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs md:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editingCategory && (
          <form onSubmit={handleUpdateCategory} className="mt-4 space-y-4">
            <div>
              <label htmlFor="editCategoryName" className="block mb-1 text-sm md:text-base">Edit Category Name</label>
              <input
                type="text"
                id="editCategoryName"
                value={editingCategory.name}
                onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                className="w-full px-3 py-2 border rounded text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label htmlFor="editCategoryIcon" className="block mb-1 text-sm md:text-base">Edit Icon</label>
              <select
                id="editCategoryIcon"
                value={editingCategory.icon}
                onChange={(e) => setEditingCategory({ ...editingCategory, icon: e.target.value })}
                className="w-full px-3 py-2 border rounded text-sm md:text-base"
              >
                {Object.keys(iconMap).map(icon => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm md:text-base">
              Update Category
            </button>
          </form>
        )}
      </div>

      {/* Tool Management */}
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Manage Tools</h2>
        <form onSubmit={handleAddTool} className="space-y-4 mb-4">
          <div>
            <label htmlFor="toolName" className="block mb-1 text-sm md:text-base">Tool Name</label>
            <input
              type="text"
              id="toolName"
              value={newTool.name}
              onChange={(e) => setNewTool({ ...newTool, name: e.target.value })}
              className="w-full px-3 py-2 border rounded text-sm md:text-base"
              required
            />
          </div>
          <div>
            <label htmlFor="toolCategory" className="block mb-1 text-sm md:text-base">Category</label>
            <select
              id="toolCategory"
              value={newTool.category}
              onChange={(e) => setNewTool({ ...newTool, category: e.target.value })}
              className="w-full px-3 py-2 border rounded text-sm md:text-base"
              required
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="toolIcon" className="block mb-1 text-sm md:text-base">Icon</label>
            <select
              id="toolIcon"
              value={newTool.icon}
              onChange={(e) => setNewTool({ ...newTool, icon: e.target.value })}
              className="w-full px-3 py-2 border rounded text-sm md:text-base"
            >
              {Object.keys(iconMap).map(icon => (
                <option key={icon} value={icon}>{icon}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm md:text-base">
            Add Tool
          </button>
        </form>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm md:text-base">Name</th>
                <th className="px-4 py-2 text-left text-sm md:text-base">Category</th>
                <th className="px-4 py-2 text-left text-sm md:text-base">Icon</th>
                <th className="px-4 py-2 text-left text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tools.map(tool => (
                <tr key={tool.id} className="border-b">
                  <td className="px-4 py-2 text-sm md:text-base">{tool.name}</td>
                  <td className="px-4 py-2 text-sm md:text-base">{tool.category}</td>
                  <td className="px-4 py-2">
                    {React.createElement(iconMap[tool.icon], { size: 24 })}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEditTool(tool)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2 text-xs md:text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTool(tool.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs md:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editingTool && (
          <form onSubmit={handleUpdateTool} className="mt-4 space-y-4">
            <div>
              <label htmlFor="editToolName" className="block mb-1 text-sm md:text-base">Edit Tool Name</label>
              <input
                type="text"
                id="editToolName"
                value={editingTool.name}
                onChange={(e) => setEditingTool({ ...editingTool, name: e.target.value })}
                className="w-full px-3 py-2 border rounded text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label htmlFor="editToolCategory" className="block mb-1 text-sm md:text-base">Edit Category</label>
              <select
                id="editToolCategory"
                value={editingTool.category}
                onChange={(e) => setEditingTool({ ...editingTool, category: e.target.value })}
                className="w-full px-3 py-2 border rounded text-sm md:text-base"
                required
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="editToolIcon" className="block mb-1 text-sm md:text-base">Edit Icon</label>
              <select
                id="editToolIcon"
                value={editingTool.icon}
                onChange={(e) => setEditingTool({ ...editingTool, icon: e.target.value })}
                className="w-full px-3 py-2 border rounded text-sm md:text-base"
              >
                {Object.keys(iconMap).map(icon => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm md:text-base">
              Update Tool
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default AdminPage