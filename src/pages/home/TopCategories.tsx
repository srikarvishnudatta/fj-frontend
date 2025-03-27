import { NavLink } from "react-router-dom"
import { Search as SearchIcon } from "lucide-react"
const topCategs = [
    "Dinner",
    "Indian",
    "Not All Indian",
    "Easy",
    "Frozen meals",
    "Healthy",
    "High Protein",
    "Andhra",
    "Fusion"
]

function TopCategories() {
  return (
    <div className="space-y-3">
        <h2 className="text-2xl">Explore our <span className="text-custom">Top</span> Categories</h2>
        <ul className="grid grid-cols-5 gap-2">
            {topCategs.map((categ, index) => <li key={index} className="bg-gray-200 
            w-fit px-3 py-2 rounded-full font-light">{categ}</li>)}
        </ul>
        <div className="flex justify-center mt-10 gap-3 items-center">
          <div className="flex items-center border-1 px-2 py-4 gap-2">
            <SearchIcon />
          <input type="text" className="focus:outline-0" placeholder="Search our recipes"/>
          </div>
          or 
          <NavLink to={"/recipes"} className={"p-4 bg-custom text-white"}>View our recipes</NavLink>
        </div>
    </div>
  )
}

export default TopCategories