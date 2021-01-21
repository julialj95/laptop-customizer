import React from "react";
import FeaturesSegment from "./FeaturesSegment";
import FEATURES from "./FeaturesStore";

class FeaturesComponent extends React.Component {
  render() {
    const { selected, updateFeature } = this.props;

    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <FeaturesSegment
            selected={selected}
            onChange={updateFeature}
            feature={feature}
            // features={features}
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
