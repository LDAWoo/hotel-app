import { useEffect, useState } from 'react';
import ComponentNotification from '../ComponentNotification'
import { NotificationUnitNameHostData } from '../../../components/Constants/NotificationUnitNameHostData';

function ComponentNotificationUnitName () {
    const [data,setData] = useState([]);
    useEffect(() =>{
        setData(NotificationUnitNameHostData)
    },[NotificationUnitNameHostData])

    return <ComponentNotification data={data}/>
}

export default ComponentNotificationUnitName;