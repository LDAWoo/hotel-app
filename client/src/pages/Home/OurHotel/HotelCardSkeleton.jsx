import Skeleton from "../../../components/Skeleton/Skeleton";
function HotelCardSkeleton() {
  return (
    <Skeleton>
      <rect x='0' y='0' rx='10' ry='10' width='100%' height='80%' />
      <rect x='0' y='82%' rx='5' ry='5' width='60%' height='25' />
      <rect x='80%' y='82%' rx='5' ry='5' width='20%' height='25' />
      <rect x='0' y='89%' rx='5' ry='5' width='50%' height='20' />
      <rect x='0' y='95%' rx='5' ry='5' width='40%' height='20' />
    </Skeleton>
  );
}

export default HotelCardSkeleton;
