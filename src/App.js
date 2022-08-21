import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Example from './pages/Example'
// import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Example />} /> */}
        <Route path="/table-filter" element={<Example />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
