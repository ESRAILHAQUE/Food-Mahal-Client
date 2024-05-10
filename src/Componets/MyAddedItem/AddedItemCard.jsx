import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function AddedItemCard({item}) {
    const { foodName, foodImage, subCatagory, currentDate, origin, email,price } =
      item;
  return (
    
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask rounded w-24 h-24">
                <img src={foodImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <span className="text-xl">{foodName}</span>
        </td>
        <td>${price}</td>
        <th>
          <Link to={'/update'}>
            <button className="btn btn-warning">
              <MdOutlineEdit className="text-2xl font-bold" />
              Update
            </button>
          </Link>
        </th>
      </tr>
    
  );
}
export default AddedItemCard




