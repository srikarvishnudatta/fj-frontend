
function HomePage() {
  return (
    <section className="h-screen">
        <div>
            <h2 className="text-2xl font-medium">Features Recipes</h2>
            <div className="border-b-1 mt-2">
                <div className="border-t-1  border-custom w-[100px]"></div>
            </div>
            <div className="flex gap-2 mt-5">
                <FeaturedRecipesCard />
                <FeaturedRecipesCard />
                <FeaturedRecipesCard />
            </div>
        </div>
        <div className="bg-slate-900  p-6 mt-10 text-2xl font-bold">
            <h2 className="text-custom">SUBSCRIBE FOR LIVE UPDATES</h2>
            <form className="flex gap-2 my-6">
                <input type="text" placeholder="Email" className=" px-2 py-0.5 focus:outline-none rounded-md bg-white"/>
                <input type="text" placeholder="Name" className=" px-2 py-0.5 focus:outline-none rounded-md bg-white"/>
                <button className="bg-custom text-slate-900 rounded-md px-4 py-2">Submit</button>
            </form>
        </div>
        <h2 className="text-2xl font-medium mt-10">Latest Recipes</h2>
            <div className="border-b-1 mt-2">
                <div className="border-t-1  border-custom w-[100px]"></div>
            </div>
        <div className="flex gap-2 mt-10">
            <div>
            <FeaturedRecipesCard />
            <span className="font-light text-md">March 23, 2024</span>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo vel aliquid? Voluptas quis, laudantium odio pariatur error dolorum? Delectus sapiente aliquam exercitationem excepturi architecto doloribus facere nisi? Quod, voluptatem!</div>
            </div>
            <div>
            <FeaturedRecipesCard />
            <span className="font-light text-md">March 23, 2024</span>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo vel aliquid? Voluptas quis, laudantium odio pariatur error dolorum? Delectus sapiente aliquam exercitationem excepturi architecto doloribus facere nisi? Quod, voluptatem!</div>
            </div>
        </div>
    </section>
  )
}
function FeaturedRecipesCard(){
    return <div className="flex flex-col space-y-2">
        <img src={"https://i0.wp.com/amateurprochef.com/wp-content/uploads/2025/01/thumbnail-1.png?resize=1600%2C1060&ssl=1"} alt="some image here" 
    className="object-cover h-auto"
    /> 
    <span className="font-semibold text-xl">Some Title (Super Easy)</span>
    </div>
}

export default HomePage