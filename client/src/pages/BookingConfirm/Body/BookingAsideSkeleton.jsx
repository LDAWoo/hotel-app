import Skeleton from "../../../components/Skeleton/Skeleton";


function BookingAsideSkeleton() {
    return ( 
        <Skeleton viewBox='0 0 500 400'>
             <rect x="0" y="5%" rx="3" ry="3" width="100%" height="10%"/>
             <rect x="0" y="20%" rx="3" ry="3" width="60%" height="10%"/>
             <rect x="0" y="39%" rx="3" ry="3" width="100%" height="61%"/>
        </Skeleton>
     );
}

export default BookingAsideSkeleton;