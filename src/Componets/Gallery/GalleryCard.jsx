import { IoPerson } from "react-icons/io5";
import './GalleryCard.css'
import { TbFileDescription } from "react-icons/tb";
import { MdComment } from "react-icons/md";

function GalleryCard({ pic }) {
  const { name, imgUrl, description } = pic;

  return (
    <div className="mx-2">
      <div className="container rounded ">
        <img src={imgUrl} alt="Avatar" className="image h-96" />
        <div className="overlay-bottom">
          <div className="text">
            <p className="flex items-center gap-1">
              <IoPerson></IoPerson>
              <h2> {name}</h2>
            </p>
         

            <p className="mt-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GalleryCard;
