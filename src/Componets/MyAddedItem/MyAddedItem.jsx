import { useEffect, useState } from "react"
import AddedItemCard from "./AddedItemCard";
import bg from '../../assets/images/bggif.gif'

function MyAddedItem() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addeditems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  
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