import { useState } from "react";
import Title from "../../../components/Title/Title";
import TableNonRefundable from "./TableNonRefundable";
import Label from '../../../components/Label/Label'
import {AiOutlineExclamationCircle} from 'react-icons/ai'

const PriceAndNonRefundable = () =>{
    const [active,setActive] = useState(false)
    const [discount,setDiscount] = useState(10)
    
    const handleChangeValue = (e) =>{
        setDiscount(e.target.value)
    }

    const handleFocus = () =>{
        setActive(true)
    }

    const handleBlur = () =>{
        setActive(false)
    }

    return (
        <div className="flex flex-col gap-2">
            <Title title="Discount for guests that book with this rate plan:" xl fontMedium nowrap={false}/>
            <div className={`w-full flex relative border-[2px] rounded-sm duration-300 dark:text-white ${active ? 'border-hotel-75': 'border-primary-700 dark:border-primary-400'}`}>
                        <input 
                        className='bg-transparent w-full focus:outline-none pr-2 pl-2'
                        value={discount}
                        type='number'
                        onChange={handleChangeValue}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        />
                        <div className='relative'>
                       <div className="pt-1 pb-1 pr-2 pl-2 after:absolute after:left-0 after:contents-[''] after:w-[1px] after:h-[60%] after:top-[20%] after:ml-0 after:bg-[#e7e7e7] dark:after:bg-primary-400 text-[14px]">%</div>
                        </div>
            </div>

            <TableNonRefundable
            price={2100000}
            discount={discount}
            />

            <Label 
            icon={AiOutlineExclamationCircle}
            classTitle="text-[14px]"
            title="Guests who select non-refundable rates are usually looking for competitive prices. A discount of at least 10% will attract more guests by improving your visibility."
            />
        </div>
    )
}

export default PriceAndNonRefundable;