import { useEffect, useState } from "react";
import { HotelPriceData } from "../../../components/Constants/HotelPriceData";
import Title from "../../../components/Title/Title";
import Label from "../../../components/Label/Label";
import CurrencyFormat from 'react-currency-format'
import useRegisterHotelPriceValue from "../../../hooks/JoinStaying/HotelPriceHost/useRegisterHotelPriceValue";
import MoneyFormatStaying from "../../../components/Staying/MoneyFormatStaying";

const ComponentHotelPrice = () =>{
    const[active,setActice] = useState(false);
    const{value,setValue} =useRegisterHotelPriceValue();
    const[totalPrice,setTotalPrice] = useState();

    const handleChange = (values) =>{
        const{value} = values;
        setValue(value);
    }

    useEffect(() =>{
        if(value > 0){
            setTotalPrice(value - value * 0.15)
        }
    },[value])

    const handleFocus = () =>{
        setActice(true)
    }
    const handleBlur = () =>{
        setActice(false)
    }

    const handleKeyDown =(e)=>{
        if(e.key === "-"){
            e.preventDefault();
        }
    }
    return <div>
        {HotelPriceData.map((price,index) =>(
            <div key={index} className="flex flex-col gap-2">
                {price?.title && <Title title={price?.title} fontBold nowrap={false}/>}
                {price?.type == "number" && 
                    <div>
                    {
                        price?.data.map((item,index) =>(
                            <div key={index} className="flex flex-col gap-2 dark:text-primary-50">
                                <Title title={item?.name} xl fontMedium/>
                                <div className={`flex relative border-[2px] rounded-sm duration-300 dark:text-white ${active ? 'border-hotel-75': 'border-primary-700 dark:border-primary-500'}`}>
                                    <div className="pt-1 pb-1 pr-2 pl-2 after:absolute after:contents-[''] after:w-[1px] after:h-[60%] after:top-[20%] after:ml-2 after:bg-[#e7e7e7] dark:after:bg-primary-400">VND</div>
                                    <div className="flex flex-1 w-full ml-2">
                                        <CurrencyFormat 
                                        displayType="input"
                                        thousandSeparator={!active}
                                        className="w-full focus:outline-none bg-transparent pt-1 pb-1 pr-2 pl-2"
                                        value={value}
                                        decimalScale={2}
                                        fixedDecimalScale={!active}
                                        onValueChange={handleChange} 
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onKeyDown={handleKeyDown}
                                        />
                                    </div>
                                </div>
                                <Title title={item?.subName} large/>
                            </div>
                        ))
                    }
                    </div>
                }
                 {price?.type == "none" && <div>
                 {value > 0 && <div className="flex flex-col gap-2 pl-2 pb-2">
                                <div><Title title={`${price?.commissionRate}%`}/>
                                  {" "}Staying.com commission
                                </div>
                                <ul className="inline-block list-none pt-0 pb-5 ml-[40px] text-[14px]">
                                {price?.data.map((i,index) =>(
                                        <Label key={index} icon={i?.icon} title={i?.name} size={18} className="inline-block" classIcon="text-green-800" classTitle="dark:text-primary-50"/>
                                ))}
                                </ul>
                                <hr className="dark:border-primary-400"/>
                                <p className="mt-5">
                                    <MoneyFormatStaying price={totalPrice}/>
                                    {" "}Your earnings (including taxes)
                                </p>
                            </div>}
                    </div>}
            </div>
        ))}
        
    </div>
}

export default ComponentHotelPrice;