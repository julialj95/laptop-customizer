import React from "react";

class CartTotal extends React.Component {
  render() {
    const { currency, selected } = this.props;
    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">{currency.format(total)}</div>
      </div>
    );
  }
}

export default CartTotal;
