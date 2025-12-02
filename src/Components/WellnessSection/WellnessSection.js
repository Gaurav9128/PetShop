import React from "react";
import "./WellnessSection.css";

const wellnessData = [
  // { title: "Supertails+ clinic", discount: "Fear-Free", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516647.webp?tr=w-320,f-auto,q-auto" },
  { title: "Kidney care", discount: "Up to 10% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516652.webp?tr=w-320,f-auto,q-auto" },
  { title: "Dewormer", discount: "Up to 14% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516643.webp?tr=w-320,f-auto,q-auto" },
  { title: "Tick & fleas", discount: "Up to 30% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516645.webp?tr=w-320,f-auto,q-auto" },
  { title: "Joint care", discount: "Up to 20% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516658.webp?tr=w-320,f-auto,q-auto" },
  { title: "Kidney care", discount: "Up to 10% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516652.webp?tr=w-320,f-auto,q-auto" },
  { title: "Cardiac care", discount: "Up to 12% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516654.webp?tr=w-320,f-auto,q-auto" },
  { title: "Liver care", discount: "Up to 10% OFF", img: "https://ik.imagekit.io/supertails/cdn/shop/files/frame_1707516655.webp?tr=w-320,f-auto,q-auto" }
];

const WellnessGrid = () => {
  return (
    <div className="wellness-wrapper">
      <h2 className="wellness-title">All-round Wellness</h2>

      <div className="wellness-grid">
        {wellnessData.map((item, index) => (
          <div className="wellness-card" key={index}>
            
            <div className="img-box">
              <img src={item.img} alt={item.title} className="wellness-img" />
            </div>

            <p className="discount-label">{item.discount}</p>

            <p className="wellness-name">{item.title}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessGrid;
