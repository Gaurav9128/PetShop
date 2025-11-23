import HomeBanner from "../../Components/HomeBanner";
import Button from "@mui/material/Button";
import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
// import CategoryGrid from "../../Components/CategoryGrid";
import WellnessSection from "../../Components/WellnessSection/WellnessSection";
import OffersSection from "../../Components/OffersSection/OffersSection";
// import Footer from "../../Components/Footer/Footer.js";
import BrandsInFocus from "../../Components/Brands Banner/Brands Banner.js";
import Essentials from  "../../Components/Essentials/index.js";

const Home = () => {
  //   var productSliderOptions = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows:true,
  //   autoplay:true
  // };
    return (
        <>
           <HomeBanner />
           <Essentials />
            {/* <CategoryGrid /> */}
           <section className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                       <div className="banner">
                         <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt="1" className="cursor" w-100/>
                       </div>

                       <div className="banner mt-4">
                         <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt="2" className="cursor" w-100/>
                       </div>
                    </div>
                    <div className="col-md-9 productRow">
                    <div className="d-flex align-items-center">
                        <div className="info w-75">
                            <h3 className="mb-0 hd">BEST SELLERS</h3>
                            <p className="text-light text-sml mb-0">Do not miss the current offers
                                until the end of March.
                            </p>
                        </div>

                          <Button className="viewAllBtn ml-auto">View All <BsArrowRightShort /></Button>
                    </div>

                            <div className="product_row w-100 mt-4">
                             <Swiper
                  slidesPerView={4}
                  spaceBetween={1}
                  navigation={true} // ✅ Enable arrows
                  autoplay={{ delay: 3000 }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                      <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>


                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>


                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>

                        

                             </Swiper>
                    </div>


                    
                    <div className="d-flex align-items-center mt-5">
                        <div className="info w-75">
                            <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                            <p className="text-light text-sml mb-0">New arrivals are here, grab them before they're gone!
                            </p>
                        </div>

                          <Button className="viewAllBtn ml-auto">View All <BsArrowRightShort /></Button>
                    </div>
                     
                            <div className="product_row w-100 mt-4">
                             <Swiper
                  slidesPerView={4}
                  spaceBetween={1}
                  navigation={true} // ✅ Enable arrows
                  autoplay={{ delay: 3000 }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                      <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>


                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>


                        <SwiperSlide>
                        <ProductItem />
                        </SwiperSlide>
                             </Swiper>
                    </div>
                    </div>

                    
                </div>
            </div>
            
           </section>
           
           <WellnessSection />

            <OffersSection />

            <BrandsInFocus />


            {/* <Footer /> */}
        </>
    );
}
export default Home;