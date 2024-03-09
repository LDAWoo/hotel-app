import Skeleton from "../../components/Skeleton/Skeleton";

const ItemResultsSkeleton = () => {
  return (
    <Skeleton viewBox='0 0 400 500'>
      <rect x='0' y='0' rx='3' ry='3' width='30%' height='22%' />

      <rect x='33%' y='0' rx='3' ry='3' width='30%' height='2.5%' />
      <rect x='33%' y='4%' rx='3' ry='3' width='20%' height='2.5%' />
      <rect x='73%' y='11.5%' rx='3' ry='3' width='27%' height='2.5%' />
      <rect x='73%' y='15.5%' rx='3' ry='3' width='27%' height='2.5%' />
      <rect x='73%' y='19.5%' rx='3' ry='3' width='27%' height='2.5%' />
    </Skeleton>
  );
};

ItemResultsSkeleton.propTypes = {};

export default ItemResultsSkeleton;
