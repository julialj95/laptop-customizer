import React from "react";
import ProductsSegment from "./FeaturesSegment";
import slugify from "slugify";

class ProductsComponent extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <ProductsSegment
            id={itemHash}
            featureHash={feature + "-" + idx}
            name={slugify(feature)}
            checked={item.name === this.state.selected[feature].name}
            onChange={(e) => this.updateFeature(feature, item)}
          />
        );
      });
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}
export default ProductsComponent;

// use map here
