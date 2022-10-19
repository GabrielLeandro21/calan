export type DetailsProps = string | undefined;

export type DetailsItemProps = {
  attributes: {
    createdAt: string;
    depth: string;
    description: string;
    height: string;
    price: number;
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
    width: string;
    stripe: string;
    quantity: number;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export type DetailsInitalStateProps = {
  createdAt: string;
  depth: string;
  description: string;
  height: string;
  price: number;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  width: string;
  quantity: number;
  stripe: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};
