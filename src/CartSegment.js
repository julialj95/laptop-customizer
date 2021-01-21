import React from "react";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class CartSegment extends React.Component {
  render() {
    const { feature, name, cost, featureHash } = this.props;
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature}</div>
        <div className="summary__option__value">{name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(cost)}
        </div>
      </div>
    );
  }
}

export default CartSegment;
