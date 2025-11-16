import React, { useRef, useState } from "react";
import "./CategorySlider.css";

const categories = [
  { name: "All", img: "https://via.placeholder.com/80?text=All" },
  { name: "Dry Food", img: "https://via.placeholder.com/80?text=Dry" },
  { name: "Wet Food", img: "https://via.placeholder.com/80?text=Wet" },
  { name: "Grain Free", img: "https://via.placeholder.com/80?text=Grain" },
  { name: "Treats", img: "https://via.placeholder.com/80?text=Treats" },
  { name: "Veg Food", img: "https://via.placeholder.com/80?text=Veg" },
  { name: "Puppy Food", img: "https://via.placeholder.com/80?text=Puppy" },
  { name: "Puppy Food", img: "https://via.placeholder.com/80?text=Puppy" },
  { name: "Puppy Food", img: "https://via.placeholder.com/80?text=Puppy" },
];

const CategorySlider = () => {
  const [active, setActive] = useState("All");
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="category-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft}>
        &#8249;
      </button>

      <div className="category-container" ref={scrollRef}>
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category-item ${active === cat.name ? "active" : ""}`}
            onClick={() => setActive(cat.name)}
          >
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
};

export default CategorySlider;
