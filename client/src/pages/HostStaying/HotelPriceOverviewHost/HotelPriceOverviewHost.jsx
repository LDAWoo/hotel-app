import ComponentHost from '../ComponentHost'
import ComponentHotelPriceOverview from './ComponentHotelPriceOverview';
import FooterHost from '../FooterHost'

const HotelPriceOverviewHost = () =>{
    return <ComponentHost 
    title="Rate plan" 
    componentLeft={<ComponentHotelPriceOverview/>}
    componentRight
    footer={<FooterHost/>}
    />
}

export default HotelPriceOverviewHost;