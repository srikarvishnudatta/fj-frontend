import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navigation from "./Navigation"

function Layout() {
  return (
    <main className="max-w-[1160px] mx-auto">
        <Header />
        <Navigation />
        <Outlet />
    </main>
  )
}

export default Layout