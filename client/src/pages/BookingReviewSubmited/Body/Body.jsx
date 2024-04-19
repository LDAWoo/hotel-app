import Icon from '../../../components/Icon/Icon'
import Title from '../../../components/Title/Title'
import { IoHeartSharp } from "react-icons/io5";
function Body() {
    return ( 
        <div className="flex flex-col w-full gap-4">
           <div className="flex flex-col gap-2 justify-center items-center text-center">
                <div className="flex flex-row gap-2 items-center">
                    <Icon icon={IoHeartSharp} classIcon="text-[rgb(255,180,180)]" size={28}/>
                    <Title title="Thanks for sharing!" fontBold extraLarge8/>
                </div>
                <span>Your feedback on customer success. All your comments will be displayed on the <strong>Hotel</strong></span>
           </div>
        </div>
     );
}

export default Body;