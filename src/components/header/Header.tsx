import { NavLink } from "react-router-dom"
import Search from "./Search"
type NavigationType = {
  id:number,
  path: string,
  text:string,
}

const navigation: NavigationType[] = [
  {id:1, path:"/", text:"home"},
  {id:2, path:"/about", text:"about"},
  {id:3, path:"/recipes", text:"recipes"},
  {id:4, path:"/blogs", text:"blog"},
  {id:5, path:"/contact-us", text:"contact"}
]

function Header() {
  return (
    <header className="py-10 flex justify-between border-b-1 border-gray-300 mb-5">
      <h2 className="text-3xl">Flavour<span className="font-cursive text-custom">Journey</span></h2>
      <nav className="flex items-end gap-4">
      {navigation.map((nav) => <NavLink 
      className={"uppercase text-lg"}
      to={nav.path} key={nav.id}>{nav.text}</NavLink>)}
        <Search />
      </nav>
    </header>
  )
}

export default Header