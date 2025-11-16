import React from "react";
import Slider from "react-slick";


const Home =() =>{
    var productSliderOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true
  };
  return (
    <>
        <div className="product_row">
            <Slider {...productSliderOptions}>
                <div className="item">

                </div>

            </Slider>
        </div>
    </>
  );
}
export default Home;