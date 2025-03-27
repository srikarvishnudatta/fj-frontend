import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Divider from "./Divider"

function Layout() {
  return (
    <main className="max-w-[1160px] mx-auto">
        <Header />
        <Divider />
        <Outlet />
    </main>
  )
}

export default Layout