import Skeleton from "../../../components/Skeleton/Skeleton";


function HeaderBookingSkeleton() {
    return ( 
        <Skeleton viewBox="0 0 500 100">
            <rect x="0" y="0" rx="3" ry="3" width="100%" height="30%"/>
            <rect x="0" y="45%" rx="3" ry="3" width="60%" height="20%"/>
            <rect x="0" y="75%" rx="3" ry="3" width="20%" height="20%"/>
        </Skeleton>
     );
}

export default HeaderBookingSkeleton;