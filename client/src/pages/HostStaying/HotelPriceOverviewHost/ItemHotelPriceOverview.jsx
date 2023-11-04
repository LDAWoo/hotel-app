import { BsInfoCircle } from "react-icons/bs";
import Icon from "../../../components/Icon/Icon";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Buttons/Button";

const ItemHotelPriceOverview = ({title,titleButton="Edit",onClick}) =>{
    return <div className="flex items-center flex-row w-full mb-4">
    <div className="flex items-center flex-1 gap-2">
        <Title title={title} fontBold/>
        <Icon icon={BsInfoCircle} size={14} classIcon="translate-y-[2px]"/>
    </div>
    <div>
        <Button title={titleButton} border className="pt-1 pb-1" onClick={onClick}/>
    </div>
</div>
}

export default ItemHotelPriceOverview;