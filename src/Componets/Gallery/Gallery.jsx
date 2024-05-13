import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import gallery from "../../assets/images/gallery.jpg";
import Swal from "sweetalert2";
import GalleryCard from "./GalleryCard";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const Navigate=useNavigate()
  const { users } = useContext(AuthContext);
  const modalRef = useRef(null); // Ref for accessing the modal element
  const [pics, setpics] = useState([]);
  useEffect(() => {
    fetch("https://testing-sand-phi.vercel.app/gallerypic")
      .then((res) => res.json())
      .then((data) => {
        setpics(data);
      });
  },[])

  const handleGallery = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const imgUrl = form.image.value;
    const galleryInfo = {
      name,
      description,
      imgUrl,
    };
    console.log(galleryInfo);
    form.reset();
    fetch("https://testing-sand-phi.vercel.app/gallery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(galleryInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
           
          Swal.fire({
            title: "Well Done!",
            text: "Succesfully Picture added!",
            icon: "success",
          });
          Navigate('/gallery');
        }
      });
    // Close the modal after form submission
    if (modalRef.current) {
      modalRef.current.close(); // Close the modal
    }
  };
  const handleClose = () => {
  modalRef.current.close();
}
  return (
    <div
      className="py-10  bg-gradient-to-r from-cyan-500 to-blue-500"
      // style={{
      //   backgroundImage: `url(${gallery})`,
      //   backgroundSize: "cover",
      //   // height: "100%",
      // }}
    >
      <div className="flex justify-evenly mx-2 items-center">
        <h1 className="text-center text-white font-bold my-4 text-4xl">
          Food Images Gallery added by Users
        </h1>
        <button
          className="btn btn-primary"
          onClick={() => modalRef.current.showModal()} // Open the modal
        >
          Add Picture
        </button>
         <dialog id="my_modal_3" className="modal" ref={modalRef}>
          {/* Assign ref to modal */}
          <div className="modal-box">
            <h1>Add a Picture</h1>
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-warning absolute right-2 top-2"
            >
              ✕
            </button>
            <form onSubmit={handleGallery}>
              {/* Use onSubmit to handle form submission */}

              <div className="space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="User Name"
                  defaultValue={users?.displayName}
                  className="input input-bordered input-primary w-full "
                  name="name"
                  required
                />
                <input
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered input-primary w-full "
                  name="description"
                  required
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered input-primary w-full "
                  name="image"
                  required
                />
                <div className="flex justify-between">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </dialog>
         
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {pics.map((pic) => (
          <GalleryCard key={pic._id} pic={pic}></GalleryCard>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
