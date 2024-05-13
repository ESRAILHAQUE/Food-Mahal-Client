

import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";

function Purchase() {
  
  const Navigate = useNavigate();
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
    const foodName = form.foodName.value;
    const purchaseQuantity = form.purchaseQuantity.value;
      const name = form.name.value;
      const currentDate = form.currentDate.value;
      const price = form.price.value;
      const email = form.email.value;
    
    
    const PurchaseInfo = {
      foodName,
      purchaseQuantity,
      currentDate,
      name,
      price,
      email,
      foodImage,
    };
    // console.log(PurchaseInfo);
    fetch("https://testing-sand-phi.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(PurchaseInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Well Done!",
            text: "Succesfully Purchased!",
            icon: "success",
          });
        }
      });
     
    axios.post(`https://testing-sand-phi.vercel.app/increment/${_id}`);
    Navigate("/allfoods");
    
           
         
  };
  return (
    <div>
      <div className="text-center ">
        <img src={foodImage} alt="" className="rounded-lg mx-auto h-72 w-96" />
      </div>

      <div className="text-center text-3xl my-3 space-y-3">
        <h1>{foodName}</h1>
        <h2>Item left: {quantity}</h2>
        {quantity <= 0 && <p>This is not available right now.</p>}
      </div>

      {/* form section */}
      <div className="mb-10">
        <div className="hero  bg-base-200 px-2 lg:px-16 py-10">
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
                    disabled
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
                  disabled={quantity < 1}
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
