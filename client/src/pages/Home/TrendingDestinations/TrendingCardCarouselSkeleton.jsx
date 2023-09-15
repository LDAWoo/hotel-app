import Skeleton from "../../../components/Skeleton/Skeleton";

function TrendingCardCarouselSkeleton() {
  return (
    <Skeleton>
      <rect x='0' y='0' rx='0' ry='0' width='100%' height='80%' />
      <rect x='0' y='85%' rx='5' ry='5' width='80%' height='5%' />
      <rect x='0' y='95%' rx='5' ry='5' width='40%' height='5%' />
    </Skeleton>
  );
}

export default TrendingCardCarouselSkeleton;
