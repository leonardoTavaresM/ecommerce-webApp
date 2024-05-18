import Cart from "@/components/shoppingCart/Cart";
import { useState, useEffect } from "react";

const index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<Error | null>(null);

  console.log("products", products);

  useEffect(() => {
    async function handleData() {
      setLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:5000/products");
        const json = await response.json();

        setLoading(false);
        setProducts(json);
      } catch (err) {
        console.log("err", err);
        setLoading(false);
        setError(
          err instanceof Error ? err : new Error("Ocorreu um erro desconhecido")
        );
      }
    }
    handleData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  if (loading) return <div>Loading...</div>;

  const cart = {
    products,
  };

  return (
    <div>
      <Cart cart={cart} />
    </div>
  );
};

export default index;
