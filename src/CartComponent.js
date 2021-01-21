import React from "react";
import CartSegment from "./CartSegment";
import CartTotal from "./CartTotal";

class CartComponent extends React.Component {
  render() {
    const { selected } = this.props;
    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = selected[feature];
      return (
        <CartSegment
          key={idx}
          selected={selected}
          name={selectedOption.name}
          cost={selectedOption.cost}
          featureHash={featureHash}
          feature={feature}
        />
      );
    });
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <CartTotal selected={selected} />
      </section>
    );
  }
}
export default CartComponent;
