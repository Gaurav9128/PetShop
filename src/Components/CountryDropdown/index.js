import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref){
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown=()=>{

    const [isOpenModal, setIsOpenModal]=useState(false);
    return(
        <>
        <Button className='countryDrop' onClick={()=>setIsOpenModal(true)}>
                            <div className='info d-flex flex-column'>
                                <span className='label'>Your Location</span>
                                <span className='name'>India</span>
                            </div>
                            <span className='ml-auto'><FaAngleDown/></span>
                         </Button>

                          <Dialog open={isOpenModal} onClose={()=>setIsOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
                            <h4 className='mb-0'>Choose your Delivery Location</h4>
                            <p>Enter your address and we will specify the offer for your area.</p>
                            <Button className='close_' onClick={()=>setIsOpenModal(false)}><IoMdClose/></Button>

                            <div className='headerSearch w-100'>
                                    <input type='text' placeholder='Search Your Area...'/>
                                    <Button><IoMdSearch/></Button>
                                </div>

                                <ul className='countryList mt-3'>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                                    
                                </ul>
                           </Dialog>
        </>
    )
}
export default CountryDropdown;