import { useEffect, useState } from 'react';
import {NotificationHotelPriceHostData} from '../../../components/Constants/NotificationHotelPriceHostData';
import ComponentNotification from '../ComponentNotification';

const ComponentNotificationHotelPrice = () =>{
    const [data,setData] = useState([])

    useEffect(() =>{
        setData(NotificationHotelPriceHostData);
    },[NotificationHotelPriceHostData])

    return <ComponentNotification data={data}/>
}

export default ComponentNotificationHotelPrice;