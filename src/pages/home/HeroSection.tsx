import TopCategories from "./TopCategories";

function HeroSection() {
  return (
    <div>
      <div className="text-center font-bold text-xl uppercase space-x-2">
        <span>Simple Recipes made for</span>
        <span className="space-x-2">
          <span className="text-custom font-mont italic font-light">
            People
          </span>
          <span className="text-custom font-mont italic font-light">
            Students
          </span>
          <span className="text-custom font-mont italic font-light">Life</span>
        </span>
      </div>
      {/* TODO : align the span element properly */}
      <div className="flex gap-6 my-7">
        <div className="hover:opacity-70">
          <img
            src="https://pinchofyum.com/cdn-cgi/image/width=640,height=914,fit=crop/wp-content/uploads/Lemon-Rosemary-Chicken-Soup.jpg"
            alt=""
          />
          <span className="bg-custom text-white px-4 py-2  ">Vegetarian</span>
        </div>
        <div className="hover:opacity-70">
          <img
          src="https://pinchofyum.com/cdn-cgi/image/width=640,height=914,fit=crop/wp-content/uploads/Crockpot-Chicken-Bowls.jpg"
            alt=""
          />
          <span className="bg-custom text-white px-4 py-2  ">Budget</span>
        </div>
        <div className="hover:opacity-70">
          <img
            src="https://pinchofyum.com/cdn-cgi/image/width=640,height=914,fit=crop/wp-content/uploads/Lemon-Rosemary-Chicken-Soup.jpg"
            alt=""
          />
          <span className="bg-custom text-white px-4 py-2  ">Healthy</span>
        </div>
        <div className="hover:opacity-70">
          <img
            src="https://pinchofyum.com/cdn-cgi/image/width=640,height=914,fit=crop/wp-content/uploads/Lemon-Rosemary-Chicken-Soup.jpg"
            alt=""
          />
          <span className="bg-custom text-white px-4 py-2 ">Indian</span>
        </div>
      </div>
      <TopCategories />
    </div>
  );
}

export default HeroSection;
