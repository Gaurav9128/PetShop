import React from "react";
import "./ProductList.css";

const products = [
  {
    id: 1,
    title: "Pedigree Chicken And Vegetables Adult Dog Dry Food",
    image: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/152504.png?v=1753340464&width=300&height=300&crop=center&fit=crop", // sample
    weights: ["20kg", "1kg", "10kg", "2.8kg", "370g", "15kg", "5.5kg"],
    price: 3627,
    mrp: 3900,
    discount: "7% OFF",
    tag: "EXTRA 5% Off above ₹2000. Use code ZOOMIE5.",
    tagColor: "#B7F0AE",
  },
  {
    id: 2,
    title: "Drools Optimum Performance Adult Dog Dry Food",
    image: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/image_2611.webp?v=1747764578&width=300&height=300&crop=center&fit=crop",
    weights: ["20kg", "10kg", "3kg+2×75g"],
    price: 2790,
    mrp: 3100,
    discount: "10% OFF",
    tag: "EXTRA 5% Off above ₹1000. Use code DROOLS5",
    tagColor: "#B7F0AE",
  },
  {
    id: 3,
    title: "Farmina N&D Pumpkin Chicken Mini Dog Food",
    image: "https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Frame10459-966200.png?v=1721829294&width=300&height=300&crop=center&fit=crop",
    weights: ["2.5kg", "800g", "7kg", "1.6kg", "5kg", "14kg"],
    price: 2193,
    mrp: 2550,
    discount: "14% OFF",
    tag: "EXTRA 4% off. Use code LUXE4",
    tagColor: "#B7F0AE",
  },
  {
    id: 4,
    title: "Drools Focus Super Premium Adult Dog Food",
    image: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/DroolsFocusAdultSuperPremiumDogFood_12kg_1kgExtraFreeInside.png?v=1748329998&width=300&height=300&crop=center&fit=crop",
    weights: ["12kg+1kg", "1.2kg", "4kg"],
    price: 4950,
    mrp: 5500,
    discount: "10% OFF",
    tag: "EXTRA 4% off above ₹2500. Use code FOCUS",
    tagColor: "#B7F0AE",
  }
];

const ProductList = () => {
  return (
    <div className="product-list-wrapper">

      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">

            <div
              className="product-tag"
              style={{ backgroundColor: product.tagColor }}
            >
              {product.tag}
            </div>

            <img src={product.image} className="product-img" />

            <h3 className="product-title">{product.title}</h3>

            <div className="weight-box">
              {product.weights.map((w, i) => (
                <button key={i} className="weight-btn">
                  {w}
                </button>
              ))}
            </div>

            <div className="price-box">
              <span className="price">₹{product.price}</span>
              <span className="mrp">MRP ₹{product.mrp}</span>
              <span className="discount">{product.discount}</span>
            </div>

            <div className="offers">
              <span>✔ View offers</span>
            </div>

            <button className="add-cart-btn">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
