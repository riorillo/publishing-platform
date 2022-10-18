import React from 'react';
import SavedPost from "./components/SavedPost";
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material'
import { Layout } from './components/Layout'

import { theme } from './styles/theme'
import NewStory from './components/NewStory';
export function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="me" element={<div>Pagina personale </div>} />
        <Route path="me/stories" element={<div>I tuoi post</div>} />
        <Route path="me/saved" element={<SavedPost />} />
      </Route>

      {/* Non va renderizzato in <Outlet/> di <Layout/> */}
      <Route path="/new-story" element={<NewStory/>} />

    </Routes>
    </ThemeProvider>
  )
}
