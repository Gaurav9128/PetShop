import { IoMdSearch } from "react-icons/io";
import Button from "@mui/material/Button";
const SearchBox = () => {
  return (
    <>
    {/* Header Search Start Here */}
                                <div className='headerSearch ml-3 mr-3'>
                                    <input type='text' placeholder='Search for products...'/>
                                    <Button><IoMdSearch/></Button>
                                </div>
                                {/* Header Search End Here */}
    </>
        
    )
}
export default SearchBox;