import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"
import MyFooter from "./component/Footer/MyFooter"

function App() {

  return (
    <div className="font-Roboto">
      <Navbar/>
      <Outlet/>
      <MyFooter/>
    </div>
  )
}

export default App
