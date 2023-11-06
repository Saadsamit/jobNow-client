import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"
import MyFooter from "./component/Footer/MyFooter"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <div className="font-Roboto">
      <Navbar/>
      <Outlet/>
      <MyFooter/>
      <Toaster />
    </div>
  )
}

export default App
