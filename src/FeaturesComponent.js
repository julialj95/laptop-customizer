import React from "react";
import FeaturesSegment from "./FeaturesSegment";

class FeaturesComponent extends React.Component {
  render() {
    const { selected, updateFeature, featureOptions } = this.props;

    const features = Object.keys(featureOptions).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <FeaturesSegment
            key={featureHash}
            selected={selected}
            updateFeature={updateFeature}
            feature={feature}
          />
        </fieldset>
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default FeaturesComponent;
