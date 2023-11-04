import { useEffect, useState } from 'react';
import ComponentNotification from '../ComponentNotification'
import {NotificationHotelPolicyHostData} from '../../../components/Constants/NotificationHotelPolicyHostData'
 
const ComponentNotificationHotelPolicy = () =>{
    const [data,setData] = useState([])

    useEffect(() =>{
        setData(NotificationHotelPolicyHostData)
    },[NotificationHotelPolicyHostData])

    return <ComponentNotification data={data} />
}

export default ComponentNotificationHotelPolicy;