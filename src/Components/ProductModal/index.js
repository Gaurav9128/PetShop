import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { FaHeart, FaCodeCompare } from "react-icons/fa6";

const ProductModal = (props) => {
    const [quantity, setQuantity] = useState(1);
    
    // Mock Data (Updated to include a list of thumbnails)
    const productData = {
        name: "All Natural Italian-Style Chicken Meatballs",
        brand: "Welch's",
        sku: "ZU49VDR",
        rating: 4,
        oldPrice: 9.35,
        newPrice: 7.25,
        description: "Vivamus adipiscing nisl dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent...",
        type: "Organic",
        mfgDate: "Jun 4, 2021",
        life: "30 days",
        category: "Meats & Seafood",
        // Using distinct paths/URLs for images
        mainImage: "https://supertails.com/cdn/shop/files/HENLOCHICKEN_RICE_600x.png?v=1760614427", // Main image URL
        thumbnails: [
            "https://supertails.com/cdn/shop/files/HENLOCHICKEN_RICE_600x.png?v=1760614427", // Thumbnail 1
            "https://supertails.com/cdn/shop/files/HENLOCHICKEN_RICE_9_00fec4e8-1168-4970-b18a-64d804d77068_small.png?v=1760614427", // Thumbnail 2
            "https://supertails.com/cdn/shop/files/HENLOCHICKEN_RICE-4_600x.jpg?v=1760614427", // Thumbnail 3
            "https://supertails.com/cdn/shop/files/HENLOCHICKEN_RICE-2_600x.jpg?v=1760614427", // Thumbnail 3
        ],
    };

    // 1. State to track the currently selected image
    const [selectedImage, setSelectedImage] = useState(productData.thumbnails[0]); // Start with the first thumbnail

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    // 2. Function to change the main image on thumbnail click
    const handleThumbnailClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    return (
        <>
            <Dialog open={true} className='productModal' onClose={() => props.closeProductModal()} maxWidth="lg" fullWidth>
                <Button className='close-btn' onClick={() => props.closeProductModal()}>
                    <IoMdClose />
                </Button>

                <div className="product-modal-content">
                    {/* ... (Header Section remains the same) ... */}
                    <div className="product-header">
                        <h4 className="product-title">{productData.name}</h4>
                        <div className='product-meta d-flex align-items-center flex-wrap'>
                            <div className='brand-info'>
                                <span>Brands:</span>
                                <span className='brand-name'>**{productData.brand}**</span>
                            </div>
                            <Rating name="read-only" value={productData.rating} readOnly size="small" precision={0.5} />
                            <div className='sku-info'>
                                <span>SKU: {productData.sku}</span>
                            </div>
                        </div>
                        <hr className='meta-divider' />
                    </div>
                    {/* --- Main Content --- */}
                    <div className='row product-detail-modal-row'>
                        {/* Image Column */}
                        <div className='col-md-5 product-image-col'>
                            <div className='badge-23'>23%</div>
                            <div className='badge-recommended'>RECOMMENDED</div>
                            <div className="main-image-container">
                                {/* 3. Main image SRC updated to selectedImage state */}
                                <img 
                                    src={selectedImage} 
                                    alt={productData.name} 
                                    className="product-main-image" 
                                />
                            </div>
                            
                            {/* 4. Thumbnails mapped and connected to the click handler */}
                            <div className="product-thumbnails d-flex justify-content-center mt-3">
                                {productData.thumbnails.map((thumbSrc, index) => (
                                    <img 
                                        key={index}
                                        src={thumbSrc} 
                                        alt={`Thumbnail ${index + 1}`} 
                                        className={`thumbnail ${thumbSrc === selectedImage ? 'active' : ''}`}
                                        onClick={() => handleThumbnailClick(thumbSrc)} // Click handler
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ... (Details Column remains the same) ... */}
                        <div className='col-md-7 product-details-col'>
                            {/* Price Section */}
                            <div className="price-section">
                                <span className="old-price">${productData.oldPrice.toFixed(2)}</span>
                                <span className="new-price">${productData.newPrice.toFixed(2)}</span>
                                <div className='in-stock'>IN STOCK</div>
                            </div>
                            {/* Description */}
                            <p className="product-description">
                                {productData.description}
                            </p>
                            {/* Add to Cart Section */}
                            <div className="add-to-cart-section d-flex align-items-center mt-4">
                                <div className='quantity-control d-flex'>
                                    <Button onClick={decreaseQuantity} className='qty-btn'>-</Button>
                                    <input type="text" value={quantity} readOnly className='qty-input' />
                                    <Button onClick={increaseQuantity} className='qty-btn'>+</Button>
                                </div>
                                <Button variant="contained" className='add-to-cart-btn' onClick={() => console.log('Add to cart clicked')}>
                                    Add to cart
                                </Button>
                            </div>
                            {/* Wishlist and Compare */}
                            <div className='compare-wishlist-links d-flex mt-3'>
                                <a href="#" className='link-item' onClick={(e) => { e.preventDefault(); console.log('Add to wishlist'); }}>
                                    <FaHeart /> ADD TO WISHLIST
                                </a>
                                <a href="#" className='link-item' onClick={(e) => { e.preventDefault(); console.log('Compare'); }}>
                                    <FaCodeCompare /> COMPARE
                                </a>
                            </div>
                            {/* Meta Information List */}
                            <div className='meta-info-list mt-4'>
                                <p className='meta-item'>**Type:** {productData.type}</p>
                                <p className='meta-item'>**MFG:** {productData.mfgDate}</p>
                                <p className='meta-item'>**LIFE:** {productData.life}</p>
                            </div>
                            {/* Category and Tags */}
                            <div className='category-tags mt-4'>
                                <p>Category: **{productData.category}**</p>
                                <p>Tags: *chicken, natural, organic*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProductModal;