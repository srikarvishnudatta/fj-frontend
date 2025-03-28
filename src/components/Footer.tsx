import { NavLink } from "react-router-dom";

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


function Footer() {

  return (
    <footer className="h-[500px] flex flex-col justify-between mt-20 pb-2">
      <div className="flex justify-between">
        <ul className="flex flex-col gap-2">
          <span className="font-bold">
            Flavour Journey
          </span>
          {navigation.map((nav) => <NavLink to={nav.path} key={nav.id}>{nav.text}</NavLink>)}
        </ul>
        {/* Replace this once categories are done */}
        <ul className="flex flex-col gap-2">
          <span className="font-bold">
            Flavour Journey
          </span>
          {navigation.map((nav) => <NavLink to={nav.path} key={nav.id}>{nav.text}</NavLink>)}
        </ul>
        <div className="bg-custom p-3 flex flex-col justify-center">
          <h3 className="text-lg text-center"><span className="font-cursive">Sign up</span> FOR EMAIL UPDATES</h3>
          <form className="space-x-3">
            <input type="text" placeholder="First Name" className="bg-white p-3"/>
            <input type="email" placeholder="Email" className="bg-white p-3"/>
            <button className="p-3 bg-gray-100">Go</button>
          </form>
        </div>
      </div>
      <div className="pb-4 flex gap-2">
      <h2 className="text-3xl">Flavour<span className="font-cursive text-custom">Journey</span></h2>
      <div className="flex flex-col gap-0.5">
      <span className="text-sm text-gray-500">Copy Rights Reserved</span>    
      <span className="text-sm text-gray-500">A strapi based website</span>    
        </div>  
          {/* Social media icons */}
        </div>
        <p className="text-center text-sm space-x-2"><span>Privacy Policy</span> <span>Terms</span></p>
    </footer>
  );
}

export default Footer;
