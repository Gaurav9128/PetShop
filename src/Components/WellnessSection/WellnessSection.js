import React from 'react';
import './WellnessSection.css';

// Sample data for the categories
const categories = [
  { id: 1, name: 'Skin Care', image: 'https://supertails.com/cdn/shop/files/frame_1707512361_cdc10d47-c6e9-41e5-9029-75102abea455_480x.webp?v=1762252521', isTrending: false },
  { id: 2, name: 'Dewormer', image: 'https://supertails.com/cdn/shop/files/frame_1707512368_5751f603-90ec-4bbc-bb4f-eeaf15cb4238_480x.webp?v=1762252521', isTrending: false },
  { id: 3, name: 'Tick & fleas', image: 'https://supertails.com/cdn/shop/files/frame_1707512363_480x.webp?v=1762252522', isTrending: false },
  { id: 4, name: 'Joint Care', image: 'https://supertails.com/cdn/shop/files/frame_1707512364_480x.webp?v=1762252522', isTrending: false },
  { id: 5, name: 'Kidney Care', image: 'https://supertails.com/cdn/shop/files/frame_1707512365_cf6fefc6-f4eb-4a12-8ce5-e1da533a8942_480x.webp?v=1762252522', isTrending: false },
  { id: 6, name: 'Cardiac Care', image: 'https://supertails.com/cdn/shop/files/frame_1707512366_64ba404d-50f2-40b6-9660-ee3bfc976c2c_480x.webp?v=1762252522', isTrending: false },
  { id: 7, name: 'Liver Care', image: 'https://supertails.com/cdn/shop/files/frame_1707512367_86654b94-7741-4068-877b-cf1b4b9ebc61_480x.webp?v=1762252522', isTrending: false },

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

const WellnessSection = () => (
  <div className="everyday-essentials">
    <h2>All-Round Wellness</h2>
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

export default WellnessSection;