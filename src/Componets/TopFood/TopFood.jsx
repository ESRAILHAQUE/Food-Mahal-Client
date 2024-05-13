import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
function TopFood() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://testing-sand-phi.vercel.app/allfoods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
    const sortedFoods = foods.sort((a, b) => b.count - a.count);
    console.log(sortedFoods)
      let topSixFoods = [];
      if (sortedFoods.length >= 6) {
        topSixFoods = sortedFoods.slice(0, 6);
      } else {
        topSixFoods = sortedFoods;
      }
  return (
    <div>
      <div className="bg-[#a2d9ff] py-5 ">
        <h2 className="text-4xl text-center font-semibold text-white">
          All Delicious Food
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-2 lg:mx-8 mt-8 mb-6">
          {topSixFoods.map((food) => (
            <TopFoodCard key={food._id} food={food}></TopFoodCard>
          ))}
        </div>
        <div className="text-center">
          <Link to={"/allfoods"}>
            <button className="btn btn-primary btn-outline">
              See All Foods Item <BiRightArrowAlt />
            </button>
          </Link>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          d="M0,256L40,240C80,224,160,192,240,197.3C320,203,400,245,480,245.3C560,245,640,203,720,208C800,213,880,267,960,272C1040,277,1120,235,1200,224C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
export default TopFood;
