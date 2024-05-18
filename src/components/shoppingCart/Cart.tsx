import { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import Summary from "./Summary";

const Cart: React.FC = (props) => {
  const { cart } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(cart.products);
  }, [cart.products]);

  function onQuantityChanged(ev) {
    for (const product of cart.products) {
      if (product.code === ev.product.code) {
        product.qty = ev.newQty;
        setProducts(cart.products.map((x) => x));
        break;
      }
    }
  }

  return (
    <div>
      <hr />
      <ItemsList products={products} onQuantityChanged={onQuantityChanged} />
      <hr />
      <Summary products={products} />
    </div>
  );
};

export default Cart;
