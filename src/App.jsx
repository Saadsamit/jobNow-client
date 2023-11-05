import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"

function App() {

  return (
    <div className="font-Roboto">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
