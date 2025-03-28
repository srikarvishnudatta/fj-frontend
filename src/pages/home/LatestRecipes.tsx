import AboutCard from "./AboutCard"
import PostCard from "./PostCard"

function LatestRecipes() {
  return (
    <article className="py-10">
    <h2 className="text-2xl font-medium mb-4">The <span className="text-custom">Most</span> Recents</h2>
    <div className="grid grid-cols-4 gap-2 justify-center">
        <PostCard />
        <PostCard />
        <PostCard />
        <AboutCard />
    </div>
    </article>
  )
}

export default LatestRecipes