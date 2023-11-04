import Border from "../../../components/Border/Border";
import NonRefundableRatePlan from "./NonRefundableRatePlan/NonRefundableRatePlan";
import StandardRatePlan from "./StandardRatePlan/StandardRatePlan";
import WeeklyRatePlan from "./WeeklyRatePlan/WeeklyRatePlan";

const ComponentHotelPriceOverview = () =>{
    return <div className="flex flex-col gap-2">
        <StandardRatePlan/>
        <Border className="mt-4"/>
        <NonRefundableRatePlan/>
        <Border className="mt-4"/>
        <WeeklyRatePlan/>
    </div>
}

export default ComponentHotelPriceOverview;