import { useContext, useEffect, useState } from "react"
import AddedItemCard from "./AddedItemCard";
import bg from '../../assets/images/bggif.gif'
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";

function MyAddedItem() {
    const [items, setItems] = useState([]);
  const { users,loading } = useContext(AuthContext);
  
    const url = `https://testing-sand-phi.vercel.app/addeditems?email=${users?.email}`;
  useEffect(() => {
    if (users?.email) {
      axios.get(url, { withCredentials: true }).then((data) => {
        setItems(data.data);
      });
    }
  }, [users?.email]);
   if (loading) {
     return <div>Loading...</div>;
   }
  return (
    <div>
      <h1 className="text-center text-2xl my-5">My Added Food Items</h1>
      <div className="mx-auto">
        <div className="mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Price</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {items.map((item) => (
                <AddedItemCard key={item._id} item={item}></AddedItemCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default MyAddedItem