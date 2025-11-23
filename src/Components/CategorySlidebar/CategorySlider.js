import React, { useRef, useState } from "react";
import "./CategorySlider.css";

const categories = [
  { name: "All", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/all_dog_food_cb1373cc-338c-410e-9de2-867a222c002a.png?v=1714830649" },
  { name: "Dry Food", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Dog_dry_food_66cfee13-6618-4c89-be67-1b4498fdc63c.png?v=1759494247" },
  { name: "Wet Food", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Wet_Food_fd867130-b824-4b58-bdaf-69411756de9f.png?v=1714807675" },
  { name: "Grain Free", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Grain_Free_373da780-5f75-49df-9aaa-9d2b17c2a8a1.png?v=1714999051" },
  { name: "Treats", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Treats_5e180213-44d8-45ba-84c7-46b8203a70ed.png?v=1760098493" },
  { name: "Veg Food", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Veg_Food_10d40c1a-18e2-4475-adc8-86fff5caf4df.png?v=1714999052" },
  { name: "Puppy Food", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Puppy_Food_9d90ec3a-7acb-47e3-989b-571dba6840c0.png?v=1732016346" },
  { name: "Puppy Food", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Royal_Canin_8f887851-52a0-4391-9bc3-506abccf7f86.png?v=1716016926" },
  { name: "Puppy Food", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/lab.png?v=1754285576" },
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
