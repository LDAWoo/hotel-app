import { useEffect, useState } from "react";
import {PriceOverviewPriceAndPolicyDataGroup } from '../../../../../components/Constants/PriceOverviewPriceAndPolicyDataGroup'
import Label from '../../../../../components/Label/Label'

const PriceAndCancellationPolicyGroup = () =>{
    const [data,setData] = useState([])

    useEffect(() =>{
        setData(PriceOverviewPriceAndPolicyDataGroup)
    },[PriceOverviewPriceAndPolicyDataGroup])

    return <div>
        <ul className='list-none gap-2 flex flex-col'>
            {data.map((item,index) => (
                <Label 
                className="items-start gap-3"
                key={index} 
                icon={item?.icon} 
                classIcon="dark:text-white"
                size={24}
                title={item?.name}
                classTitle="text-[14px] dark:text-primary-50"
                />
            ))}
        </ul>
    </div>
}

export default PriceAndCancellationPolicyGroup;