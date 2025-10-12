import './App.css'
import Home from './pages/Home/Home'
import Blogs from './pages/Blog/Blogs'
import Packages from './pages/Trips and Packages/Packages/Packages'
import Trip from './pages/Trips and Packages/Trips/Trip'
import Contact from './pages/Contact/ContactUs'
import Visa from './pages/VisaApplication/VisaApplication'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/AboutUs/About'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Header />

      {/* this is where the routing and 'Routes' goes, the app is the main hab ffor all components */}
        <div className='siteContainer'>
          <Routes>
              <Route path = "/" element = {<Home/>} />
              <Route path = "/Home" element = {<Home/>} />
              <Route path = "/Blogs" element = {<Blogs/>} />
              <Route path = "/Packages" element = {<Packages/>} />
              <Route path = "/Trip" element = {<Trip/>} />
              <Route path = "/About" element = {<About/>} />
              <Route path = "/ContactUs" element = {<Contact/>} />
              <Route path = "/VisaApplication" element = {<Visa/>} />
              <Route path = "/Login" element = {<Login/>} />
              <Route path = "/Register" element = {<Register/>} />         
          </Routes>
        </div>

      <Footer/>  
    </>
  )
}

export default App
