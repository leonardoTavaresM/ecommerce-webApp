import Item from "./Item";

const ItemsList: React.FC = (props) => {
  function onQuantityChanged(ev) {
    props.onQuantitifyChanged(ev);
  }

  let rows = [];

  props.products.forEach((product, index) => {
    rows.push(
      <Item
        key={index}
        product={product}
        onQuantityChanged={onQuantityChanged}
      />
    );
  });

  return (
    <div>
      {rows.map((row) => (
        <div>{row}</div>
      ))}
    </div>
  );
};

export default ItemsList;
