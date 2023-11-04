import { useNavigate } from "react-router-dom";
import ItemHotelPriceOverview from "../../ItemHotelPriceOverview";
import routesConfig from '../../../../../configs/routesConfig'
const PricePerGroupSize = () =>{
    const navigate = useNavigate(); 

    const handleClick = () =>{
        navigate(routesConfig.becomeAHostHotelGroupDiscount)
    }
    return <ItemHotelPriceOverview 
        title="Price per group size" 
        onClick={handleClick}
    />
}

export default PricePerGroupSize;