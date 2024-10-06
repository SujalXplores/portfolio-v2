import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonViews: FC = () => {
  return (
    <ContentLoader
      speed={2}
      backgroundColor="#a3a3a3"
      foregroundColor="#f5f5f5"
      height={24}
    >
      <rect y="33%" rx="2" ry="2" width="100" height="8" />
    </ContentLoader>
  );
};

export default SkeletonViews;
