import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import AppLayout from './layout/AppLayout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppLayout />
  </React.StrictMode>,
)
