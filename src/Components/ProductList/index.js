import ProductItem from "./ProductItem";

const products = [
  {
    image: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/HENLOCHICKEN_RICE.png",
    title: "Henlo Baked Chicken & Liver Adult Dog Food",
    discount: 28,
    inStock: true,
    rating: 4,
    oldPrice: 379,
    newPrice: 339,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/3_23.jpg?v=1756971544&width=300&height=300&crop=center&fit=crop",
    title: "Henlo Mutton & Rice Dry Dog Food",
    discount: 25,
    inStock: true,
    rating: 4.5,
    oldPrice: 420,
    newPrice: 369,
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/HENLOFISH.png",
    title: "Henlo Salmon & Tuna Adult Dog Food",
    discount: 30,
    inStock: true,
    rating: 5,
    oldPrice: 450,
    newPrice: 315,
  },
];

const ProductList = () => {
  return (
    <div
      className="productList"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
        background: "#fafafa",
      }}
    >
      {products.map((p, i) => (
        <ProductItem key={i} {...p} />
      ))}
    </div>
  );
};

export default ProductList;
