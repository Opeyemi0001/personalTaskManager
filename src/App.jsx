import AboutUs from "./components/AboutUs/AboutUs"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Home from "./components/Home/Home"
import AuthPage from "./components/Login/AuthPage"
import Navbar from "./components/Navbar/Navbar"
import Solutions from "./components/solutions/Solutions"
import UserDashboard from "./components/userDashboard/UserDashboard"

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Solutions />
      <AboutUs />
      <Contact />
      <Footer />
      {/* <AuthPage /> */}
      {/* <UserDashboard /> */}

      <div>
    
      </div>
    </>
  )
}

export default App
