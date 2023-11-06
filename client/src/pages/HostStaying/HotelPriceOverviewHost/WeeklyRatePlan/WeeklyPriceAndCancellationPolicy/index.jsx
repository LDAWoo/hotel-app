import ItemHotelPriceOverview from "../../ItemHotelPriceOverview";
import {useNavigate} from 'react-router-dom'
import routesConfig from '../../../../../configs/routesConfig'

const WeeklyPriceAndCancellationPolicy = () =>{
    const navigate = useNavigate();
     
    const handleClick = () =>{
        navigate(routesConfig.becomeAHostNonRefundable)
    }

    return <ItemHotelPriceOverview title="Price and cancellation policy" onClick={handleClick}/>
}

export default WeeklyPriceAndCancellationPolicy;