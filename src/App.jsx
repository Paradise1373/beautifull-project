import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
