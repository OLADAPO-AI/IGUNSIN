import React from 'react'

function ArchiveLayout({ archive, latest }) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Archive Layout
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-gray-800 p-4 rounded-lg">{archive}</div>
        <div className="flex-1 bg-gray-800 p-4 rounded-lg">{latest}</div>
      </div>
    </div>
  )
}

export default ArchiveLayout
