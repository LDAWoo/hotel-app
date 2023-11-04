import { useEffect, useState } from "react";
import ItemDiscount from "./ItemDiscount";

const datas = [
    {
        id: 1,
        guests: 2,
        price: 1800000
    },
    {
        id: 2,
        guests: 1,
        price: 2000000
    }
    
]

const BodyDiscount = () =>{
    const[data,setData] = useState([])

    useEffect(() =>{
        setData(datas)
    },[datas])

    return <div >
        {data.map((item,index) => (
            <ItemDiscount 
            key={index}
            guest={item?.guests} 
            price={item?.price}
            />
        ))}
    </div>
}

export default BodyDiscount;