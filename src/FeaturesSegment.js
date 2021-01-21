import React from "react";
import slugify from "slugify";
import FeatureItem from "./FeatureItem";
import FEATURES from "./FeaturesStore";

class FeaturesSegment extends React.Component {
  render() {
    const { updateFeature, selected, feature } = this.props;
    console.log(feature);
    const options = FEATURES[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      console.log(itemHash);
      return (
        <FeatureItem
          itemHash={itemHash}
          onChange={updateFeature}
          itemName={item.name}
          selected={selected}
          feature={feature}
          item={item}
        />
      );
    });

    return <>{options}</>;
  }
}

export default FeaturesSegment;
