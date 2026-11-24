import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/jetbrains-mono'
import 'lenis/dist/lenis.css'
import './index.css'
import { ReactLenis } from 'lenis/react'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis
      root
      options={{ lerp: 0.1, anchors: true, autoRaf: true }}
    />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
