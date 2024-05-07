import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Registration from './Components/Registration'


function App() {

  return (
    <>
      <nav>
        <div id='container'>
          <h1><Link to={"/home"} >Home</Link></h1>
          <h3><Link to={"/contact"} >Contacts</Link></h3>
          <h3><Link to={"/registration"}>Registration Form</Link></h3>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App;