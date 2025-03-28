import { NavLink } from "react-router-dom"

function PostCard() {
  return (
    <div className="
    col-span-2
    grid grid-cols-2 p-1 gap-2">
        <div className="col-span-1 row-span-4">
            <img src="https://pinchofyum.com/cdn-cgi/image/width=640,height=640,fit=crop/wp-content/uploads/Coffee-Date-1-3-1.jpg" alt="" />
        </div>
        <h6 className="text-gray-600 font-bold">March 27, 2025</h6>
        <h3 className="text-2xl font-bold">Nice title</h3>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus aliquam doloribus ducimus vero, voluptate repudiandae, vitae placeat esse dolorem eos veritatis nobis. Sit vitae cupiditate iure laboriosam tempore accusantium.</p>
        <NavLink to={"/"} className={"uppercase text-custom font-bold hover:underline"}>Continue reading {">>"}</NavLink>
    </div>
  )
}

export default PostCard