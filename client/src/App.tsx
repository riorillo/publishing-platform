import { ThemeProvider } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'

import { theme } from './styles/theme'


export function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="me" element={<div>Pagina personale </div>} />
        <Route path="me/stories" element={<div>I tuoi post</div>} />
        <Route path="me/saved" element={<div>I tuoi post salvati</div>} />
        <Route path="/new-story" element={<div>Scrivi un nuovo post</div>} />
      </Route>
    </Routes>
    </ThemeProvider>
  )
}