import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import bg from '../../assets/images/bggif.gif'
import wave from "../../assets/images/wave.png";
import { useLoaderData } from "react-router-dom";

function Update() {
    const food = useLoaderData();
    const {
      foodName,
      foodImage,
      subCatagory,
      purchaseQuantity,
      currentDate,
      price,
      origin,
      description,
      addBy,
    } = food;
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

     const updateInfo = {
       foodName,
       foodImage,
       subCatagory,
       purchaseQuantity,
       currentDate,
       price,
       origin,
       description,
       addBy,
       email,
     };
     console.log(updateInfo);
     fetch("http://localhost:5000/added", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(addInfo),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.insertedId) {
           Swal.fire({
             title: "Success!",
             text: "Succesfully added!",
             icon: "success",
           });
         }
       });
   };
   return (
     <div
       style={{
         backgroundImage: `url(${wave})`,
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
       }}
     >
       <div className="mb-20">
         <h2 className="text-3xl font-bold text-white text-center py-7">
           Update Food
         </h2>
         <div className="hero  bg-base-200 px-16 py-10 bg-transparent">
           <div className="card  w-full shadow-2xl  bg-base-200 bg-transparent   bordered ">
             <form onSubmit={handleAdd}>
               <div className="card-body gap-2 grid grid-cols-1 lg:grid-cols-2 ">
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-white font-bold text-2xl">
                       Food Name
                     </span>
                   </label>
                   <input
                     type="text"
                     placeholder="Food Name"
                     className="input input-bordered "
                                       required
                                       defaultValue={foodName}
                     name="foodName"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-white font-bold text-2xl">
                       Food Image
                     </span>
                   </label>
                   <input
                     type="text"
                     placeholder="Image URL"
                     className="input input-bordered "
                                       required
                                       defaultValue={foodImage}
                     name="foodImage"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-white font-bold text-2xl">
                       SubCatagory
                     </span>
                   </label>
                   <input
                     type="text"
                     placeholder="SubCatagory"
                     className="input input-bordered "
                                       required
                                       defaultValue={subCatagory}
                     name="subCatagory"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-white font-bold text-2xl">
                       Quantity
                     </span>
                   </label>
                   <input
                     type="number"
                     placeholder="Quantity"
                     className="input input-bordered "
                                       required
                                       defaultValue={purchaseQuantity}
                     name="purchaseQuantity"
                   />
                 </div>

                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-white font-bold text-2xl">
                       Date
                     </span>
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
                     <span className="label-text text-white font-bold text-2xl">
                       Price
                     </span>
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
                     <span className="label-text text-white font-bold text-2xl">
                       Origin
                     </span>
                   </label>
                   <input
                     type="text"
                     placeholder="Country"
                     className="input input-bordered"
                                       required
                                       defaultValue={origin}
                     name="origin"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-white font-bold text-2xl">
                       Short Description
                     </span>
                   </label>
                   <input
                     type="text"
                     placeholder="Description"
                     className="input input-bordered"
                                       required
                                       defaultValue={description}
                     name="description"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-white font-bold text-2xl">
                       Add by
                     </span>
                   </label>
                   <input
                     type="text"
                     placeholder="AddBy"
                     className="input input-bordered "
                                       required
                                       disabled
                     name="addBy"
                     defaultValue={addBy}
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-white font-bold text-2xl">
                       Your Email
                     </span>
                   </label>
                   <input
                     type="email"
                     placeholder="Your Email"
                     className="input input-bordered"
                                       required
                                       disabled
                     name="email"
                     defaultValue={users?.email}
                   />
                 </div>
               </div>

               <div className="mb-6 px-6">
                 <input
                   className="btn w-full mx-auto bg-red-600  "
                   type="submit"
                   value="Update"
                 />
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   );
}
export default Update