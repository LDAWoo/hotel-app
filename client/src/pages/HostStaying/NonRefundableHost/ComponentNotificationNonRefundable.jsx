import { useEffect, useState } from "react";
import { NotificationNonRefundableData } from "../../../components/Constants/NotificationNonRefundableData";
import ComponentNotification from '../ComponentNotification';

const ComponentNotificationNonRefundable = () =>{
    const [data,setData] = useState([])

    useEffect(() =>{
        setData(NotificationNonRefundableData)
    },[NotificationNonRefundableData])

    return (
        <ComponentNotification data={data}/>
    )
}

export default ComponentNotificationNonRefundable;