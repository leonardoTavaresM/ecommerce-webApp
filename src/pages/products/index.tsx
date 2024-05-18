/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../../styles/Products.module.css";

type InstallmentProps = {
  installment: { number: number; total: number; hasFee?: boolean | null };
};

const Installment: React.FC<InstallmentProps> = (props) => {
  const { installment } = props;
  const fees = installment.hasFee ? "Com juros" : "Sem juros";
  return (
    <p>
      em {installment.number}x de R$ {installment.total} {fees}
    </p>
  );
};

type ProductListItemProps = {
  product: {
    title: string;
    amount: number;
    installments: { number: number; total: number; hasFee?: boolean | null };
  };
};

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
  const defaultProductImage = "/static/mug/default-mug.jpg";

  return (
    <div className={styles.rowItem}>
      <img
        src={defaultProductImage}
        alt="caneca default"
        className="flex-shrink h-40 w-40"
      />
      <div className={styles.itemText}>
        <a href="#" className="stretched-link">
          <h3 className="font-bold">{props.product.title}</h3>
        </a>
        <h4 className="font-bold">R$ {props.product.amount}</h4>
        <Installment installment={props.product.installments} />
      </div>
    </div>
  );
};

const ProductsForSaleList: React.FC = () => {
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

  return (
    <div className={styles.container}>
      {products?.map((x, index) => (
        <ProductListItem product={x} key={index} />
      ))}
    </div>
  );
};

export default ProductsForSaleList;
