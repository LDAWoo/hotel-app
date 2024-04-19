import Skeleton from '../../../components/Skeleton/Skeleton'

function BookingConfirmSkeleton() {
    return ( 
        <Skeleton viewBox='0 0 500 400'>
            <rect x="0" y="0" rx="3" ry="3" width="15%" height="3%"/>
            <rect x="0" y="5%" rx="3" ry="3" width="100%" height="6%"/>

            <rect x="0" y="16%" rx="2" ry="2" width="50%" height="3%"/>
            <rect x="0" y="20%" rx="2" ry="2" width="40%" height="3%"/>
            <rect x="0" y="24%" rx="2" ry="2" width="30%" height="3%"/>

            <rect x="0" y="29%" rx="3" ry="3" width="15%" height="5%"/>

            <rect x="0" y="38%" rx="3" ry="3" width="80%" height="5%"/>

            <rect x="0" y="48%" rx="2" ry="2" width="45%" height="6%"/>
            <rect x="0" y="55%" rx="2" ry="2" width="35%" height="6%"/>
            <rect x="0" y="62%" rx="2" ry="2" width="25%" height="6%"/>

        </Skeleton>
     );
}

export default BookingConfirmSkeleton;