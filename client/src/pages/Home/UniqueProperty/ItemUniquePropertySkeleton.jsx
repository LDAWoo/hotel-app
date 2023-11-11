import Skeleton from "../../../components/Skeleton/Skeleton";

const ItemUniquePropertySkeleton = () => {
  return (
    <Skeleton viewBox='0 0 300 450'>
      <rect x='0' y='0%' rx='10' ry='10' width='100%' height='70%' />
      <rect x='0' y='75%' rx='5' ry='5' width='90%' height='6%' />
      <rect x='0' y='83%' rx='5' ry='5' width='80%' height='4%' />
      <rect x='0' y='90%' rx='5' ry='5' width='15%' height='10%' />
      <rect x='20%' y='92%' rx='5' ry='5' width='45%' height='5%' />
    </Skeleton>
  );
};

export default ItemUniquePropertySkeleton;
