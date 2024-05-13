import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";


function BookingsCard({ item,handleDelete }) {
  const {
    _id,
    foodName,
    foodImage,
    subCatagory,
    currentDate,
    origin,
    email,
    price,
    } = item;
   
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
      <td>
        <div className="badge badge-secondary badge-outline py-1">pending</div>
      </td>
      <td>{price}</td>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-warning">
          <MdDeleteOutline className="text-2xl font-bold" />
          Delete
        </button>
      </th>
    </tr>
  );
}
export default BookingsCard;
