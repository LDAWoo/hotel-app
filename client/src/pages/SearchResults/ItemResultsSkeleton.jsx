import Skeleton from "../../components/Skeleton/Skeleton";

const ItemResultsSkeleton = () => {
  return (
        <Skeleton viewBox='0 0 500 135' className="w-full h-full">
          <rect x='0' y='0' rx='3' ry='3' width='30%' height='100%' />
    
          <rect x='33%' y='0' rx='3' ry='3' width='30%' height='15%' />
          <rect x='33%' y='20%' rx='3' ry='3' width='20%' height='15%' />
          <rect x='73%' y='72%' rx='3' ry='3' width='27%' height='8%' />
          <rect x='73%' y='82%' rx='3' ry='3' width='27%' height='8%' />
          <rect x='73%' y='92%' rx='3' ry='3' width='27%' height='8%' />
        </Skeleton>
  );
};

ItemResultsSkeleton.propTypes = {};

export default ItemResultsSkeleton;
