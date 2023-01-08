import Info from "./components/Info";
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import './App.css'

function App() {
  

  return (
    <div className="w-[30%] m-auto mt-8 mb-8 bg-[#1A1B21] border rounded-lg">
      
      <Info />
      <About />

      <Interests />
      <Footer />
    </div>
  )
}

export default App
