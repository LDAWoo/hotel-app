import { useState } from "react";
import ItemPersonGroupPrice from "./ItemPersonGroupPrice";
import Title from "../../../../../components/Title/Title";

const data =[
    {
        id:1,
        person: 2,
        price: 2000000,
    },
    {
        id:2,
        person: 1,
        price: 1500000,
    }
]

const PersonGroupPrice = () =>{
    const [overviewPersonData,setOverviewPersonData] = useState(data);

    return <div className="mb-4">
        <div className="flex flex-row items-center mb-4">
            <div className="w-[150px]">
                <Title title="Occupancy" fontBold/>
            </div>
            <div className="">
                <Title title="Guests pay" fontBold/>
            </div>
        </div>
        {overviewPersonData.map((item,index) => (
            <ItemPersonGroupPrice 
            key={index}
            person={item?.person} 
            price={item?.price}
            />
        ))}
    </div>
}

export default PersonGroupPrice;