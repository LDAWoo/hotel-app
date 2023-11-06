import { useEffect, useState } from "react";
import { HotelPolicyData } from "../../../components/Constants/HotelPolicyData";
import Title from "../../../components/Title/Title";
import SelectInput from '../../../components/SelectInput/SelectInput'
import RadioInput from '../../../components/RadioInput/RadioInput'

const ComponentHotelPolicy = () =>{
    const [data,setData] = useState([])

    useEffect(() =>{
        setData(HotelPolicyData)
    },[HotelPolicyData])

    return <div>
        {data.map((policy,index) =>(
            <div className="flex flex-col gap-2">
                <Title 
                title={policy?.title} 
                fontBold 
                xl 
                nowrap={false}
                />
                {policy?.type === "select" && (
                    <SelectInput className="w-full">
                        {policy?.data && (
                            policy?.data.map((item,index) => (
                                <option value={item?.value}>
                                    {item?.name}
                                </option>
                            ))
                        )}
                    </SelectInput>
                )}
                {policy?.type === "radio" && (
                    <div className="flex flex-col gap-2">
                        {policy?.data && (
                            policy?.data.map((item,index) => (
                                <RadioInput
                                key={index}
                                id={index} 
                                name={item?.name}
                                value={item?.value}
                                title={item?.title}
                                />
                            ))
                        )}
                    </div>
                )}
            </div>
        ))}
    </div>
}

export default ComponentHotelPolicy;