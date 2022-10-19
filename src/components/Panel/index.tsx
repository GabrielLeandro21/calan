import React from 'react';
import { PanelProps } from '../../types/panel';

const Panel: React.FC<PanelProps> = ({
  direction,
  title,
  description,
  image,
  actions,
}: PanelProps) => {
  return (
    <section className={`panel panel--direction-${direction}`}>
      <div className="panel__content">
        <div>
          <h2 className="panel__title">{title}</h2>
          <p
            className="panel__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div>{actions}</div>
      </div>
      <figure className="panel__figure">
        <img src={image} alt="Panel Image" />
      </figure>
    </section>
  );
};

export default Panel;
