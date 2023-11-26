import Skeleton from "../../../../components/Skeleton/Skeleton";

function GallerySkeleton() {
  return (
    <Skeleton viewBox='0 0 400 250'>
      <rect x='0' y='0' rx='2' ry='2' width='35%' height='33%' />
      <rect x='0' y='35%' rx='2' ry='2' width='35%' height='33%' />
      <rect x='36%' y='0' rx='2' ry='2' width='64%' height='68%' />
      <rect x='0' y='70%' rx='2' ry='2' width='35%' height='68%' />
      <rect x='36%' y='70%' rx='2' ry='2' width='31.5%' height='68%' />
      <rect x='68.5%' y='70%' rx='2' ry='2' width='31.5%' height='68%' />
    </Skeleton>
  );
}

export default GallerySkeleton;
