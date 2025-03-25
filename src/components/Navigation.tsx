import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <nav className="flex justify-center gap-10 text-2xl mb-10">
        <NavLink to={"/"} className={" hover:underline"}>HOME</NavLink>
        <NavLink to={"/categories"} className={" hover:underline"}>RECIPES</NavLink>
        <NavLink to={"/about-us"} className={" hover:underline"}>ABOUT US</NavLink>
        <NavLink to={"/contact-us"} className={" hover:underline"}>CONTACT US</NavLink>
    </nav>
  )
}

export default Navigation