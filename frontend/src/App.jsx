import { Routes, Route } from "react-router-dom"
import Home from './components/pages/Home'

export default function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
    </Routes>
  )
}