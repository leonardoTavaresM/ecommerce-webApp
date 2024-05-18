import Link from "next/link";
import { useEffect, useState } from "react";

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
    code: string;
  };
};

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
  const defaultProductImage = "/static/mug/default-mug.jpg";

  return (
    <div className="d-flex position-relative bordert my-2">
      <img
        src={defaultProductImage}
        alt="caneca default"
        className="flex-shrink h-40 w-40"
      />
      <div>
        <Link
          href={`/products/${props.product.code}`}
          className="stretched-link"
        >
          <h3 className="font-bold">{props.product.title}</h3>
        </Link>
        <h4 className="font-bold">R$ {props.product.amount}</h4>
        <Installment installment={props.product.installments} />
      </div>
    </div>
  );
};
