import Title from "../../../../components/Title/Title";
import PersonGroupPrice from "./PersonGroupPrice";
import PricePerGroupSize from "./PricePerGroupSize";
import Border from '../../../../components/Border/Border'
import CancellationPolicy from "./CancellationPolicy/CancellationPolicy";
import CancellationPolicyGroup from "./CacellationPolicyGroup";

const StandardRatePlan = () =>{
    return <div className="flex flex-col w-full">
        <div >
            <div className="mb-4">
            <Title title="Standard rate plan" fontBold extraLarge4/>
            </div>
            <PricePerGroupSize/>
            <Border/>
            <PersonGroupPrice/>
            <Border/>
            <CancellationPolicy/>
            <CancellationPolicyGroup/>

        </div>
    </div>
}

export default StandardRatePlan;