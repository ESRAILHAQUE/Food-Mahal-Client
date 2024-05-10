

import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";

function Purchase() {
  
    const { users } = useContext(AuthContext);

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

  const handlePurchase = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const currentDate = form.currentDate.value;
    const email = form.email.value;

    
    const PurchaseInfo = {
      img,
      name,
      currentDate,
      price,
      email,
    };
    console.log(PurchaseInfo);
    // fetch("http://localhost:5000/bookings", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(PurchaseInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Succesfully added!",
    //         icon: "success",
    //       });
    //     }
    //   });
  };
  return (
    <div>
      <div className="text-center mx-auto w-1/2">
        <img src={foodImage} alt="" className="rounded-lg" />
      </div>

      <div className="text-center text-3xl my-3 space-y-3">
              <h1>{foodName}</h1>
              <h2>Item left: {quantity }</h2>
          </div>
          

      {/* form section */}
      <div className="mb-10">
        <div className="hero  bg-base-200 px-16 py-10">
          <div className="card  w-full shadow-2xl bg-base-100 ">
            <form onSubmit={handlePurchase}>
              <div className="card-body gap-2 grid grid-cols-1 lg:grid-cols-2 ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Food Name"
                    className="input input-bordered "
                    required
                    name="foodName"
                    defaultValue={foodName}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="input input-bordered "
                    required
                    name="purchaseQuantity"
                    defaultValue={1}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Buyer</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered "
                    required
                    name="name"
                    defaultValue={users?.displayName}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered"
                    required
                    defaultValue={new Date().toISOString().substr(0, 10)}
                    name="currentDate"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    className="input input-bordered"
                    required
                    defaultValue={price}
                    name="price"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                    name="email"
                    defaultValue={users?.email}
                  />
                </div>
              </div>

              <div className="mb-6 px-6">
                <input
                  className="btn w-full mx-auto bg-red-600  "
                  type="submit"
                  value="Purchase Confirm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Purchase;
