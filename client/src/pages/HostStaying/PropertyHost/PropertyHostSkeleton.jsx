import Skeleton from "../../../components/Skeleton/Skeleton";

const PropertyHostSkeleton = () => {
  return (
    <Skeleton viewBox='0 0 200 100'>
      <rect x='0' y='0%' rx='5' ry='5' width='100%' height='50%' />
      <rect x='0' y='60%' rx='5' ry='5' width='60%' height='20%' />
    </Skeleton>
  );
};

export default PropertyHostSkeleton;
