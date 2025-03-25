import Search from "./Search"

function Header() {
  return (
    <header className="flex justify-between items-center py-12">
        <span>Social media icons</span>
        <h1 className="text-4xl font-semibold ml-10">Flavour Journey</h1>
        <Search />
    </header>
  )
}

export default Header