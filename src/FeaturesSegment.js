import React from "react";
import slugify from "slugify";
import FeatureItem from "./FeatureItem";
import FEATURES from "./FeaturesStore";

class FeaturesSegment extends React.Component {
  render() {
    const { updateFeature, selected, feature } = this.props;
    const options = FEATURES[feature].map((item, idx) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureItem
          key={idx}
          updateFeature={updateFeature}
          itemName={item.name}
          selected={selected}
          feature={feature}
          item={item}
          itemHash={itemHash}
        />
      );
    });

    return <>{options}</>;
  }
}

export default FeaturesSegment;
