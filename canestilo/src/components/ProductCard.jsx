const ProductCard = ({ products }) => {
  console.log(products);

  return (
    <div id="products">
      <h3>{products.nombre}</h3>
      <img src={products.link} alt="Accesorios" />
      <p>Precio: ${products.precio}</p>
    </div>
  );
};

export default ProductCard;
