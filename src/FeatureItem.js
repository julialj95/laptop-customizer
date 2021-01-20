import React from "react";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class ProductRow extends React.Component {
  render() {
    return (
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
    );
  }
}

export default ProductRow;
