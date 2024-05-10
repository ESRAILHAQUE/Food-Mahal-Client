import React, { Component } from 'react';
import banner4 from '../../assets/images/Banner/banner1.jpg'
import banner1 from "../../assets/images/Banner/banner2.jpg";
import banner3 from "../../assets/images/Banner/banner3.jpg";
import banner2 from "../../assets/images/Banner/banner4.jpg";
import { useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';


function Banner() {
     const [text] = useTypewriter({
       words: [
         "Mediterranean Grilled Chicken",
         "This dish is versatile",
         "Whether enjoyed on a warm summer evening",
       ],
       loop: 1,
     });
   
    return (
      <>
        <div className="carousel w-full h-[80vh]">
          <div id="item1" className="carousel-item w-full relative ">
            <img src={banner1} className="w-full" />
            <div className="  bg-slate-50 px-5 py-7 rounded absolute left-8 top-20 w-[45%]  space-y-4  ">
              <h3 className="text-3xl font-bold drop-shadow-lg">' {text} '</h3>
              <p className="text-2xl font-semibold drop-shadow-lg">
                Indulge in the flavors of the Mediterranean with this
                mouthwatering grilled chicken dish. Tender chicken breasts are
                marinated in a blend of olive oil, lemon juice, garlic, and
                Mediterranean spices, infusing them with rich flavor and aroma
              </p>
              <Link to={'/allfoods'}>
                <button className="btn  btn-primary btn-outline">
                  See All Foods
                </button>
              </Link>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full relative">
            <img src={banner2} className="w-full" />
            <div className="  bg-slate-50 px-5 py-7 rounded absolute left-8 top-20 w-[45%] space-y-4  ">
              <h3 className="text-3xl font-bold drop-shadow-lg">' {text} '</h3>
              <p className="text-2xl font-semibold drop-shadow-lg">
                Indulge in the flavors of the Mediterranean with this
                mouthwatering grilled chicken dish. Tender chicken breasts are
                marinated in a blend of olive oil, lemon juice, garlic, and
                Mediterranean spices, infusing them with rich flavor and aroma
              </p>
              <Link to={'/allfoods'}>
                <button className="btn  btn-primary btn-outline">
                  See All Foods
                </button>
              </Link>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full relative">
            <img src={banner3} className="w-full" />
            <div className="  bg-slate-50 px-5 py-7 rounded absolute left-8 top-20 w-[45%]  space-y-4  ">
              <h3 className="text-3xl font-bold drop-shadow-lg">' {text} '</h3>
              <p className="text-2xl font-semibold drop-shadow-lg">
                Indulge in the flavors of the Mediterranean with this
                mouthwatering grilled chicken dish. Tender chicken breasts are
                marinated in a blend of olive oil, lemon juice, garlic, and
                Mediterranean spices, infusing them with rich flavor and aroma
              </p>
              <Link to={'/allfoods'}>
                <button className="btn  btn-primary btn-outline">
                  See All Foods
                </button>
              </Link>
            </div>
          </div>
          <div id="item4" className="carousel-item w-full relative">
            <img src={banner4} className="w-full " />
            <div className="  bg-slate-50 px-5 py-7 rounded absolute left-8 top-20 w-[45%]  space-y-4  ">
              <h3 className="text-3xl font-bold drop-shadow-lg">' {text} '</h3>
              <p className="text-2xl font-semibold drop-shadow-lg">
                Indulge in the flavors of the Mediterranean with this
                mouthwatering grilled chicken dish. Tender chicken breasts are
                marinated in a blend of olive oil, lemon juice, garlic, and
                Mediterranean spices, infusing them with rich flavor and aroma
              </p>
              <Link to={'/allfoods'}>
                <button className="btn  btn-primary btn-outline">
                  See All Foods
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </>
    );
    }


export default Banner;