import React from "react";
import ItemQuantity from "./ItemQuantity";

const Item: React.FC = (props) => {
  const defaultProductImage = "/static/mug/default-mug.jpg";

  function onQuantityChanged(ev) {
    props.onQuantityChanged(ev);
  }

  return (
    <div className="container my-2">
      <div className="flex flex-row">
        <div className="w-1/6">
          <img
            src={defaultProductImage}
            alt="default Image"
            className="img-thumbnail"
          />
        </div>
        <div className="w-4/6 py-5">
          <h5>{props.product.title}</h5>
        </div>
        <div className="w-1/6 py-5">
          <ItemQuantity
            product={props.product}
            onQuantityChanged={onQuantityChanged}
          />
        </div>
        <div className="w-1/6 py-5 text-right">
          <h4>R${props.product.unitPrice * props.product.qty}</h4>
        </div>
      </div>
    </div>
  );
};

export default Item;
