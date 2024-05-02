import React from 'react';
import ContentLoader from 'react-content-loader';

const ENTRIES = [
  {
    id: 1,
    width: 150,
  },
  {
    id: 2,
    width: 120,
  },
  {
    id: 3,
    width: 190,
  },
  {
    id: 4,
    width: 170,
  },
  {
    id: 5,
    width: 185,
  },
  {
    id: 6,
    width: 160,
  },
  {
    id: 7,
    width: 140,
  },
  {
    id: 8,
    width: 180,
  },
  {
    id: 9,
    width: 175,
  },
  {
    id: 10,
    width: 155,
  },
];

const GuestbookEntriesSkeleton: React.FC = () => {
  return (
    <>
      <ContentLoader
        speed={2}
        backgroundColor="#a3a3a3"
        foregroundColor="#f5f5f5"
        height="38px"
        width="180px"
        className="mb-8"
      >
        <rect width="180px" height="38px" />
      </ContentLoader>
      {ENTRIES.map(({ id, width }) => (
        <ContentLoader
          key={id}
          speed={2}
          backgroundColor="#a3a3a3"
          foregroundColor="#f5f5f5"
          height={36}
          width={width}
        >
          <rect rx="2" ry="2" width={width} height="10" />
        </ContentLoader>
      ))}
    </>
  );
};

export default GuestbookEntriesSkeleton;
