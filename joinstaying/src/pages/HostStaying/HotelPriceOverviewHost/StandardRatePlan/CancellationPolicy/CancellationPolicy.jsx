import ItemHotelPriceOverview from "../../ItemHotelPriceOverview";
import {useNavigate} from 'react-router-dom'
import routesConfig from '../../../../../configs/routesConfig'

const CancellationPolicy = () =>{
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(routesConfig.becomeAHostHotelPolicy)
    }
    return <ItemHotelPriceOverview 
            title="Cancellation policy" 
            onClick={handleClick}
    />
}

export default CancellationPolicy;