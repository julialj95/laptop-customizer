import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class FeatureItem extends React.Component {
  render() {
    const {
      itemHash,
      item,
      itemName,
      selected,
      feature,
      updateFeature,
    } = this.props;
    return (
      <div className="feature__item">
        <input
          type="radio"
          // key={itemHash}
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={itemName === selected[feature].name}
          onChange={() => updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureItem;
