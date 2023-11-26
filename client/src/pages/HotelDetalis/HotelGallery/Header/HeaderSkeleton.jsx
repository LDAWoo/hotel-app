import Skeleton from "../../../../components/Skeleton/Skeleton";

const HeaderSkeleton = () => {
  return (
    <Skeleton viewBox='0 0 400 45'>
      <rect x='0' y='0' rx='2' ry='2' width='30%' height='40%' />
      <rect x='80%' y='0' rx='2' ry='2' width='5%' height='40%' />
      <rect x='88%' y='0' rx='2' ry='2' width='12%' height='40%' />
      <rect x='0' y='55%' rx='2' ry='2' width='60%' height='30%' />
      <rect x='95%' y='45%' rx='2' ry='2' width='5%' height='40%' />
    </Skeleton>
  );
};

export default HeaderSkeleton;
