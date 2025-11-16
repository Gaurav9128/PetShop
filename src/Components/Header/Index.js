import Logo from '../../assets/images/logo1.png';
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
const Header = () => {
    return (
        <>
            <header className="headerwrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Welcome to the <b>Belim Tails</b></p>
                </div>
            </div>
              
              <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                        </div>
                        <div className="col-sm-10 d-flex align-items-center part2">
                         <CountryDropdown />

                         <SearchBox />

                            <div className='part3 d-flex align-align-items-center ml-auto'>
                                <button className='circle mr-3'><FiUser/></button>
                                <div className='ml-auto cartTab d-flex align-items-center'>
                                    <span className='cartCount'>₹0</span>
                                     <div className='position-relative ml-2'>
                                        <Button className='circle'><IoBagOutline/></Button>
                                        <span className='count d-flex align-items-center justify-content-center'>0</span>
                                     </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
            </header>

            <Navigation />
            
        </>
    );
}
export default Header;