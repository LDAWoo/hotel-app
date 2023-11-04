import Border from '../../../components/Border/Border';
import Title from "../../../components/Title/Title";
import HotelDiscount from "./HotelDiscount";

const ComponentHotelDiscount = () =>{
    return <div className="flex flex-col gap-2">
        <Title
        nowrap={false} 
        xl
        title="Offering lower rates for groups of less than 2 makes your property more attractive to potential guests."
        />
        <Title
        nowrap={false} 
        xl
        title="The recommended discounts are based on data from properties like yours. These can be updated at any time."
        />
        <Border className="mt-4"/>
        <HotelDiscount/>
    </div>
}

export default ComponentHotelDiscount;