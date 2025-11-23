import CategorySlider from "../../Components/CategorySlidebar/CategorySlider";
import Sidebar from "../../Components/Sidebar";
import ProductList from "../ProductListing";

const Listing = () =>{
    return(
        <>
            <section className="product_Listing_Page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />

                        <div className="content_right">
                            <CategorySlider />
                            <ProductList />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;