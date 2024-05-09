import { Link } from "react-router-dom";
import img from "../../assets/images/404.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
function Error() {
  return (
    <div className="text-center">
      <div className="text-center mt-5">
        <img src={img} alt="" className="mx-auto" />
      </div>
      <div className="flex justify-center gap-4 font-semibold text-xl">
        <p>Back to Home?</p>
        <Link to="/">
          <p className="text-red-500 cursor-pointer flex items-center gap-1">
            
            <FaArrowLeft></FaArrowLeft> Back
          </p>
        </Link>
      </div>
    </div>
  );
}
export default Error;
