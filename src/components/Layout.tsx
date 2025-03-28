import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./Footer"

function Layout() {
  return (
    <main className="max-w-[1160px] mx-auto">
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout