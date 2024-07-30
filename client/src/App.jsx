import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"

function App() {
 
  return (
    <div className="max-w-screen-xl container mx-auto">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App