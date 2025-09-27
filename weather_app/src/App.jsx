
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Globe } from "@/components/ui/globe"
import ScrollSection from './components/ScrollSection'

function App() {
 

  return (
    <>
      <div className="w-full h-screen bg-gray-900 ">
        <Navbar />
        <Home />
        <div className="relative bottom-0 right-0 top-60 pb-4 z-100 bg-gray-900">
          <Globe />
        </div>
      </div>

      {/* New scroll animation section */}
      <ScrollSection />

      


    </>
  )
}

export default App
