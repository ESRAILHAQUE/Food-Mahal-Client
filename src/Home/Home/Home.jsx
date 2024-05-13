import { Link } from "react-router-dom";
import Contact from "../../Componets/Contact/Contact"
import TopFood from "../../Componets/TopFood/TopFood";
import Banner from "../Banner/Banner"
import { BiRightArrowAlt } from "react-icons/bi";

function Home() {
  return (
    <div>
      <>
        <Banner></Banner>
        <TopFood></TopFood>
       
        <Contact></Contact>
      </>
    </div>
  );
}
export default Home