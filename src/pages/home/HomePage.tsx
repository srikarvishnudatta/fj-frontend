import Divider from "../../components/Divider"
import HeroSection from "./HeroSection"
import LatestRecipes from "./LatestRecipes"

function HomePage() {
  return (
    <section className="h-screen">
        <HeroSection />
        <Divider className="mt-5"/>            
       <LatestRecipes />
    </section>
  )
}


export default HomePage