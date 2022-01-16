import products from "../assets/products.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  console.log(products);

  return (
    <div>
      <h2>Accesorios</h2>
      <div className="accesorios2" id="acces">
        {products.map((products) => {
          return <ProductCard key={products.nombre} products={products} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
