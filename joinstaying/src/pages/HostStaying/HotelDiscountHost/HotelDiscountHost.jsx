import ComponentHost from '../ComponentHost'
import ComponentHotelDiscount from './ComponentHotelDiscount';
import FooterHost from '../FooterHost'
import {useNavigate} from 'react-router-dom'
import routesConfig from '../../../configs/routesConfig'

const HotelDiscountHost = () =>{
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(routesConfig.becomeAHostHotelPriceOverview)
    }

    const handelContinue = () =>[
        navigate(routesConfig.becomeAHostHotelPriceOverview)
    ]

    return <ComponentHost 
            title="Price per group size"
            componentLeft={<ComponentHotelDiscount/>}
            componentRight
            footer={<FooterHost onBack={handleBack} onContinue={handelContinue}/>}
    />
}

export default HotelDiscountHost;