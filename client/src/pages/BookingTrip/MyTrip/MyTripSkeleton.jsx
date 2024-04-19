import Skeleton from "../../../components/Skeleton/Skeleton";


function MyTripSkeleton() {
    return ( 
        <Skeleton viewBox='0 0 500 100' className="h-full w-full">
            <rect x='0' y='0%' rx='3' ry='3' width='30%' height='15%' />
            <rect x='0' y='20%' rx='3' ry='3' width='20%' height='10%' />
            <rect x='0' y='35%' rx='3' ry='3' width='100%' height='65%' />
        </Skeleton>
     );
}

export default MyTripSkeleton;