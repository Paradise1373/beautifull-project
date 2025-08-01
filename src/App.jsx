import { Routes, Route } from 'react-router-dom'

import { Toaster } from './components/ui/toaster'

import Home from './Pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
