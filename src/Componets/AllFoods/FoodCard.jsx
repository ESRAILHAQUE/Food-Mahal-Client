import { Link } from "react-router-dom";

function FoodCard({food}) {
    const {
        _id,
      foodName,
      foodImage,
      foodCategory,
      price,
      quantity,
      foodOrigin,
      madeBy,
    } = food;
    
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-full ">
        <figure className="px-10 pt-10">
          <img src={foodImage} alt="Shoes" className="rounded-xl w-full h-60" />
        </figure>
        <div className="card-body ">
          <h2 className="font-semibold text-2xl text-center">{foodName}</h2>
          <p className="text-center text-xl ">{foodCategory}</p>
          <div className="flex justify-between gap-10">
            <p>Price: {price}</p>
            <p>Qurantity: {quantity}</p>
          </div>
          <div className="card-actions mt-3">
            <Link to={`/singlefood/${_id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoodCard