import React from 'react';
import './CategoryGrid.css';

// Sample data for the categories
const categories = [
  { id: 1, name: 'Dog food', image: 'https://supertails.com/cdn/shop/files/frame_1707513243_480x.webp?v=1762267105', isTrending: false },
  { id: 2, name: 'Cat food', image: 'https://supertails.com/cdn/shop/files/frame_1707513244_480x.webp?v=1762267105', isTrending: false },
  { id: 3, name: 'Treats', image: 'https://supertails.com/cdn/shop/files/frame_1707513245_480x.webp?v=1762267105', isTrending: false },
  { id: 4, name: 'Litter supplies', image: 'https://supertails.com/cdn/shop/files/frame_1707512609_25897dad-5a4d-4d44-8ebc-ec466963bc80_480x.webp?v=1762248796', isTrending: false },
  { id: 5, name: 'Prescription food', image: 'https://supertails.com/cdn/shop/files/frame_1707513246_480x.webp?v=1762267105', isTrending: false },
  { id: 6, name: 'Premium food', image: 'https://supertails.com/cdn/shop/files/frame_1707513247_480x.webp?v=1762267104', isTrending: false },
  { id: 7, name: 'Fresh food', image: 'https://supertails.com/cdn/shop/files/frame_1707513248_480x.webp?v=1762267105', isTrending: false },
  { id: 8, name: 'Food supplements', image: 'https://supertails.com/cdn/shop/files/frame_1707513248_480x.webp?v=1762267105', isTrending: false },
  { id: 9, name: 'Winter wear', image: 'https://supertails.com/cdn/shop/files/frame_1707512338_91a0bdab-149a-434e-b27d-8d982afdd03c_480x.webp?v=1762419354', isTrending: true },
  { id: 10, name: 'Toys', image: 'https://supertails.com/cdn/shop/files/frame_1707512339_4c0c10a2-a040-4fe1-bcd8-5b25bcc4d2bb_480x.webp?v=1762252273', isTrending: false },
];

const CategoryItem = ({ name, image, isTrending }) => (
  <div className="category-item">
    <div className="image-container">
      <img src={image} alt={name} className="category-image" />
      {/* {isTrending && <div className="trending-badge"></div>} */}
    </div>
    <p className="category-name"><strong>{name}</strong></p>
  </div>
);

const CategoryGrid = () => (
  <div className="everyday-essentials">
    <h2>Everyday essentials</h2>
    <div className="grid-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          image={category.image}
          isTrending={category.isTrending}
        />
      ))}
    </div>
  </div>
);

export default CategoryGrid;