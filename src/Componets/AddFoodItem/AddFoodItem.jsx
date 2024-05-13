import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

function AddFoodItem() {
    const { users } = useContext(AuthContext);
   const handleAdd = (event) => {
     event.preventDefault();
     const form = event.target;
     const foodName = form.foodName.value;
     const foodImage = form.foodImage.value;
     const subCatagory = form.subCatagory.value;
     const purchaseQuantity = form.purchaseQuantity.value;
     const currentDate = form.currentDate.value;
     const price = form.price.value;
     const origin = form.origin.value;
     const description = form.description.value;
     const addBy = form.addBy.value;
     const email = form.email.value;

       const addInfo = {
         foodName,foodImage,subCatagory,purchaseQuantity,currentDate,price,origin,description,addBy,email
       }
    //  console.log(addInfo)
     fetch("https://testing-sand-phi.vercel.app/added", {
       method: "POST",
       headers: {
         'content-type':'application/json'
       },
       body: JSON.stringify(addInfo)
     })
       .then(res => res.json())
       .then(data => {
        //  console.log(data)
         if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Succesfully added!",
            icon: "success",
          });
        }
     })
   };
  return (
    <div>
      <div className="mb-10">
        <div className="hero  bg-base-200 px-16 py-10">
          <div className="card  w-full shadow-2xl bg-base-100 ">
            <form onSubmit={handleAdd}>
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
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Image</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered "
                    required
                    name="foodImage"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">SubCatagory</span>
                  </label>
                  <input
                    type="text"
                    placeholder="SubCatagory"
                    className="input input-bordered "
                    required
                    name="subCatagory"
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
                    name="price"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Origin</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="input input-bordered"
                    required
                    name="origin"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered"
                    required
                    name="description"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Add by</span>
                  </label>
                  <input
                    type="text"
                    placeholder="AddBy"
                    className="input input-bordered "
                    required
                    name="addBy"
                    defaultValue={users?.displayName}
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
                  value="Add"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddFoodItem