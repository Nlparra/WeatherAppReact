import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import City from './components/City'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/city/:cityId" element={<City />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
