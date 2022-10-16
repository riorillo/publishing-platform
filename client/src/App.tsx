import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { Layout } from './components/Layout'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<div>This Is The Homepage</div>}/>
      <Route path="me" element={<div>Pagina personale </div>} />
      <Route path="me/stories" element={<div>I tuoi post</div>} />
      <Route path="me/saved" element={<div>I tuoi post salvati</div>} />
    </Routes>
  )
}