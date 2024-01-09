import Title from '../../../../../components/Title/Title'
import MoneyFormatStaying from '../../../../../components/Staying/MoneyFormatStaying'
import { useEffect, useState } from 'react'

const ItemDiscount = ({guest,price}) =>{
    const [active,setActice] = useState(false);
    const [discount,setDiscount] = useState(guest > 1 ? 0 : 10)
    const [prices,setPrices] = useState(price)
    const[totalPrice,setTotalPrice] = useState()

    useEffect(() =>{
        setPrices(price)
    },[price])

    useEffect(() =>{
        setTotalPrice(prices - prices * discount / 100)
    },[discount])


    const handleChangeValue = (e) =>{
        setDiscount(e.target.value)
    }

    const handleFocus = () =>{
        setActice(true)
    }
    const handleBlur = () =>{
        setActice(false)
    }

    return <div className={`p-4 ${guest > 1 ? "bg-gray-100 dark:bg-primary-500" : "bg-transparent"}`}>
        <div className="grid grid-cols-3 items-center">
            <Title title={`${guest} guest`} xl/>
            <div>
                {guest > 1 ? (
                    <div className='text-[14px]'>0%</div>
                ) : (
                    <div className={`w-[80%] flex relative border-[2px] rounded-sm duration-300 dark:text-white ${active ? 'border-hotel-75': 'border-primary-700 dark:border-primary-400'}`}>
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
                )}
            </div>
            <MoneyFormatStaying 
            className="text-[14px] flex float-right justify-end"
            price={totalPrice}/>
        </div>
    </div> 
}

export default ItemDiscount;