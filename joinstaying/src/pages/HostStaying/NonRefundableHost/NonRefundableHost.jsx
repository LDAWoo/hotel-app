import ComponentHost from '../ComponentHost';
import FooterHost from '../FooterHost';
import ComponentNonRefundable from './ComponentNonRefundable';
import ComponentNotificationNonRefundable from './ComponentNotificationNonRefundable';
import {useNavigate} from 'react-router-dom'
import routesConfig from '../../../configs/routesConfig'


const NonRefundableHost = () =>{
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(routesConfig.becomeAHostHotelPriceOverview)
    }

    const handleContinue = () =>{
        navigate(routesConfig.becomeAHostHotelPriceOverview)
    }

    return <ComponentHost 
        title="Set up a non-refundable rate plan"
        componentLeft={<ComponentNonRefundable/>}
        componentRight={<ComponentNotificationNonRefundable/>}
        footer={<FooterHost onBack={handleBack} onContinue={handleContinue}/>}
    />
}

export default NonRefundableHost;