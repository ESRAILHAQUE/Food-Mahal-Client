import { useEffect, useState } from "react"

function MyAddedItem() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/')
    },[])
  return (
      <div>
          <h1 className="text-center text-2xl my-5">My Added Food Items</h1>
    </div>
  )
}
export default MyAddedItem