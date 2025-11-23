import React from "react";
import "./essentials.css";

const categories = [
  { title: "Dog food", discount: "Up to 50% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707518079.webp?tr=w-320,f-auto,q-auto" },
  { title: "Cat food", discount: "Up to 45% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707518080.webp?tr=w-320,f-auto,q-auto" },
  { title: "Treats", discount: "Up to 45% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707518081.webp?tr=w-320,f-auto,q-auto" },
  { title: "Litter supplies", discount: "Up to 70% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707518087.webp?tr=w-320,f-auto,q-auto" },
  { title: "Prescription diet", discount: "Lowest Prices", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707518082.webp?tr=w-320,f-auto,q-auto" },
  { title: "Premium food", discount: "Up to 25% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707518083.webp?tr=w-320,f-auto,q-auto" },
  { title: "Fresh food", discount: "Up to 30% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707518084.webp?tr=w-320,f-auto,q-auto" },
  { title: "Food supplements", discount: "Up to 60% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707518085.webp?tr=w-320,f-auto,q-auto" },
  { title: "Winter wear", discount: "TRENDING", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707517533.webp?tr=w-320,f-auto,q-auto" },
  { title: "Toys", discount: "Up to 70% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516641.webp?tr=w-320,f-auto,q-auto" },
  { title: "Grooming tools", discount: "Up to 70% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516648.webp?tr=w-320,f-auto,q-auto" },
  { title: "GPS tracker", discount: "Up to 45% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516661.webp?tr=w-320,f-auto,q-auto" },
  { title: "Beds & mats", discount: "Up to 70% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516660.webp?tr=w-320,f-auto,q-auto" },
  { title: "Walk essentials", discount: "Up to 70% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516646.webp?tr=w-320,f-auto,q-auto" },
  { title: "Bowls & feeders", discount: "Up to 70% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516650.webp?tr=w-320,f-auto,q-auto" },
  { title: "Travel supplies", discount: "Up to 70% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516649.webp?tr=w-320,f-auto,q-auto" },
];

const CategoryGrid = () => {
  return (
    <div className="main-wrapper">
      <h2 className="title">Everyday essentials</h2>
      <div className="grid-wrapper">
        {categories.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} className="card-img" />
            <p className="discount">{item.discount}</p>
            <p className="card-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
