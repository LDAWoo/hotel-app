import ComponentHost from '../ComponentHost'
import ComponentHotelPolicy from './ComponentHotelPolicy';
import ComponentNotificationHotelPolicy from './ComponentNotificationHotelPolicy';
import FooterHost from '../FooterHost'
import {useNavigate} from 'react-router-dom'
import routesConfig from '../../../configs/routesConfig'

const HotelPolicyHost = () => {
    const navigate= useNavigate();

    const handleBack = () =>{
        navigate(routesConfig.becomeAHostHotelPriceOverview)
    }

    const handleContinue = () =>{
        navigate(routesConfig.becomeAHostHotelPriceOverview)
    }

    return <ComponentHost 
    title="Cancellation policies"
    componentLeft={<ComponentHotelPolicy/>}
    componentRight={<ComponentNotificationHotelPolicy/>}
    footer={<FooterHost onBack={handleBack} onContinue={handleContinue}/>}
    />
}

export default HotelPolicyHost;