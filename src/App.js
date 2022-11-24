
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Navbar, Developer, Health, Work } from './component/index';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/Developer" element={<Developer />} />
        <Route path="/Health" element={<Health />} />
      </Routes>
    </>
  )
}

export default App;
