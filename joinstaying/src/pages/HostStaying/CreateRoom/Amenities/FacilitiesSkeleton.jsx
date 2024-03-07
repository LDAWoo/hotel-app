import Skeleton from "../../../../components/Skeleton/Skeleton";

const FacilitiesSkeleton = () => {
  return (
    <Skeleton viewBox="0 0 300 30">
      <rect x="0" y="0%" rx="4" ry="4" width="5%" height="50%" />
      <rect x="7%" y="11%" rx="1" ry="1" width="100%" height="25%" />
    </Skeleton>
  );
};

export default FacilitiesSkeleton;
