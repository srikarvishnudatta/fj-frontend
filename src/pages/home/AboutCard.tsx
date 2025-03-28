import { NavLink } from "react-router-dom"

function AboutCard() {
  return (
    <div className="col-start-4 col-end-5 row-start-1 row-end-4 bg-gray-200">
        <div className="flex flex-col items-center gap-6 py-4">
            <div className="h-[200px] w-[200px] bg-white rounded-full">

            </div>
            <p className="text-center">
                Hi I am srikar. I love to cook and ride bikes, play violin and explore Toronto... 
            </p>
            <NavLink to={"/"}>Know More</NavLink>
        </div>
        <div className="flex flex-col items-center gap-6 py-4">
        <div className="h-[200px] w-[200px] bg-white rounded-full">

            </div>
            <p className="text-center">
                Hi I am srikar. I love to cook and ride bikes, play violin and explore Toronto... 
            </p>
            <NavLink to={"/"}>Know More</NavLink>
        </div>
    </div>
  )
}

export default AboutCard