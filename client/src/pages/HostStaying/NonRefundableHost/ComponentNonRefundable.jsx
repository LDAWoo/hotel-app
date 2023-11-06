import { useState } from "react";
import Title from "../../../components/Title/Title";
import Toogle from "../../../components/Toogle/Toogle";
import PriceAndNonRefundable from "./PriceAndNonRefundable";
import Border from '../../../components/Border/Border'

const ComponentNonRefundable = () =>{

    const [show,setShow] = useState(true);

    const handleChange = () =>{
        setShow(!show)
    }

    return <div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <Title title="In addition to the standard rate plan you've created for your property, you can add a non-refundable rate plan." 
                nowrap={false}
                xl
                />
                <Title title="With this, you set a discounted price but your revenue for these bookings is guaranteed as guests will not receive a refund if they cancel or don’t show up." 
                nowrap={false}
                xl
                />
                
                <div className="my-4">
                    <Toogle 
                    title="Set up a non-refundable rate plan" 
                    isChecked={show}
                    onChange={handleChange}
                    />
                </div>

                {show && <div>
                    <Border className="mt-4"/>
                    <PriceAndNonRefundable/>
                </div>}
            </div>

        </div>
    </div>
}

export default ComponentNonRefundable;