import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import bg from "../../assets/images/bggif.gif";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingsCard from "./BookingsCard";
import axios from "axios";

function Bookings() {
  const [items, setItems] = useState([]);
  const { users } = useContext(AuthContext);
  const url = `https://testing-sand-phi.vercel.app/bookingsitem?email=${users?.email}`;
  useEffect(() => {
    if (users?.email) {
      axios.get(url, { withCredentials: true })
         .then((data) => {
           setItems(data.data);
         });
    }
   
  }, [users?.email]);
     const handleDelete = (id) => {
       Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       }).then((result) => {
         if (result.isConfirmed) {
           fetch(`https://testing-sand-phi.vercel.app/bookings/${id}`, {
             method: "DELETE",
           })
             .then((res) => res.json())
             .then((data) => {
              //  console.log(data);
                 if (data.deletedCount > 0) {
                     const remaining = items.filter(item => item._id !== id);
                     setItems(remaining);
                 Swal.fire({
                   title: "Deleted!",
                   text: "Your file has been deleted.",
                   icon: "success",
                 });
               }
             });
         }
       });
     };

  return (
    <div>
      
      <h1 className="text-center text-2xl my-5">My Order</h1>
      <div className="mx-auto">
        <div className="mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Food Image</th>
                <th>Food Name</th>
                <th></th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {items.map((item) => (
                <BookingsCard
                  key={item._id}
                  item={item}
                  handleDelete={handleDelete}
                ></BookingsCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Bookings;
