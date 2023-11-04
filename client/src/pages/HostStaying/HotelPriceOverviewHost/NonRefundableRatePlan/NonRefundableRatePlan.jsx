import Border from '../../../../components/Border/Border';
import Title from "../../../../components/Title/Title";
import PriceAndCancellationPolicy from "./PriceAndCancellationPolicy";
import PriceAndCancellationPolicyGroup from "./PriceAndCancellationPolicyGroup";

const NonRefundableRatePlan = () =>{
    return <div className="flex flex-col w-full">
        <div>
            <div className="mb-4">
                <Title title="Non-refundable rate plan" fontBold extraLarge4/>
            </div>
            <PriceAndCancellationPolicy/>
            <Border/>
            <PriceAndCancellationPolicyGroup/>
        </div>
    </div>
}

export default NonRefundableRatePlan;