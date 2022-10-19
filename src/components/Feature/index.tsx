import React from 'react';
import { featureProps } from '../../types/feature';
import CardFeature from '../Card/Feature';

const Feature: React.FC<featureProps> = ({ feature, title }: featureProps) => {
  return (
    <section className="feature">
      <h2 className="feature__title">{title}</h2>
      <div className="feature__wrapper">
        {feature.map(({ title, description, image }) => (
          <CardFeature
            image={image}
            title={title}
            description={description}
            key={title}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
