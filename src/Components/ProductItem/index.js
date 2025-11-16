import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { TfiFullscreen } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModal from '../ProductModal';
import  { useState } from 'react';
const ProductItem = () =>{

const [isOpenProdctModal,setisOpenProductModal] = useState(false);

  const viewProductDetails = (id)=>{
    // open product modal
    setisOpenProductModal(true);
  }

    const closeProductModal=()=>{
      setisOpenProductModal(false);
    }
    return(
        <>
        <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/HENLOCHICKEN_RICE.png?v=1760614427&width=300&height=300&crop=center&fit=crop" className="w-100"/>

                                    <span className="badge badge-primary">28%</span>

                                    <div className='actions'>
                                        <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                                        <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>
                                    </div>
                                </div>
                                  <div className="info">
                                    <h4>Henlo Baked Chicken & Liver Adult and Puppy Dog Dry Food | 100% human grade ingredients</h4>
                                  <span className="text-success d-block">In Stock</span>
                                  <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                                  
                                  <div className="d-flex">
                                    <span className="oldPrice">₹379</span>
                                    <span className="netPrice text-danger ml-2">MRP ₹339</span>
                                  </div>
                                  </div>

                                  

                             </div>

                             {
                              isOpenProdctModal && <ProductModal closeProductModal=
                              {closeProductModal} />
                             }
                             {/* <ProductModal /> */}
        </>
                             
    );
}
export default ProductItem;