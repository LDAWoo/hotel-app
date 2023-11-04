import Border from "../../../../components/Border/Border";
import Title from "../../../../components/Title/Title";
import WeeklyPriceAndCancellationPolicy from "./WeeklyPriceAndCancellationPolicy";
import WeeklyPriceAndCancellationPolicyGroup from "./WeeklyPriceAndCancellationPolicyGroup";

const WeeklyRatePlan = () =>{
    return <div className="flex flex-col w-full">
    <div>
        <div className="mb-4">
            <Title title="Weekly rate plan" fontBold extraLarge4/>
        </div>
        <WeeklyPriceAndCancellationPolicy/>
        <Border/>
        <WeeklyPriceAndCancellationPolicyGroup/>
    </div>
</div>
}

export default WeeklyRatePlan;