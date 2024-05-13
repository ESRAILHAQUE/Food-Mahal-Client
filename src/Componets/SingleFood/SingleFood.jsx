import { Link, useLoaderData } from "react-router-dom"

function SingleFood() {
    const food = useLoaderData();
     const {
       _id,
       foodName,
       foodImage,
       foodCategory,
       price,
       quantity,
       foodOrigin,
       madeBy,
       description,
     } = food;
  return (
    <div>
      <div className="hero  bg-base-200 mb-6 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={foodImage}
            className="lg:w-1/2 h-96 rounded-lg shadow-2xl mr-4"
          />
          <div>
            <h1 className="text-5xl font-bold">{foodName}</h1>
            <h1 className="my-3 text-2xl font-medium">
              SubCatagory: {foodCategory}
            </h1>
            <div className="text-xl space-y-2">
              <p>Price: {price}</p>
              <p>Made By: {madeBy}</p>
              <p>Origin: {foodOrigin}</p>
            </div>
            <p className="py-6 text-xl">''{description}''</p>
            <Link to={`/purchase/${_id}`}>
              <button className="btn btn-primary">Purchase</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleFood