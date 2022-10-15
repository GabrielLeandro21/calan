import React from 'react';
import { featureProps } from '../../../types/feature';
import CardFeature from '../../Card/Feature';

const Feature: React.FC<featureProps> = ({ feature }: featureProps) => {
  return (
    <section className="feature">
      {feature.map(({ title, description, image }) => (
        <CardFeature
          image={image}
          title={title}
          description={description}
          key={title}
        />
      ))}
    </section>
  );
};

export default Feature;
