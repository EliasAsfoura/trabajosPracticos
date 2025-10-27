import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import './App.css'

function App() {

  return (
    <>

    <Router>
      <Routes path= "/" navigate="/home">
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
