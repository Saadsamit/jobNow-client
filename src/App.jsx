import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"
import MyFooter from "./component/Footer/MyFooter"
import { Toaster } from "react-hot-toast"

function App() {
  const location = useLocation()
  document.title = location.pathname == "/" ? "jobNow" : `jobNow | ${location.pathname.split('/')[1]}`
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
