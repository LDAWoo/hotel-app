import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Buttons/Button";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
import routesConfig from "../../../configs/routesConfig";


function NoWishlist() {
    const {t} = useTranslation()
    const navigate = useNavigate();
    
    const items = [
        {
            name: t("MyWishlist.NotWishlist.items.item1")
        },
        {
            name: t("MyWishlist.NotWishlist.items.item2")
        },
        {
            name: t("MyWishlist.NotWishlist.items.item3")
        }   
    ]

    const handleStartSearch = () => {
        navigate(routesConfig.home)
    }

    return ( 
        <div className="flex flex-col gap-4 justify-center items-center text-center">
            <div>
                <Image src="/images/WishlistEmptyList.png" className="w-full h-full object-cover"/>
            </div>

            <Title title={t("MyWishlist.NotWishlist.title")} fontBold extraLarge5 nowrap={false}/>
            
            <div className="flex flex-col items-center justify-center text-center text-[14px]">
                {items.map((item, index) => (
                    <div key={index}>
                        <span>{`${index + 1}. ${item?.name}`}</span>
                    </div>
                ))}
            </div>

            <div>
                <Button title={t("MyWishlist.NotWishlist.startSearching")} background className="p-[8px_12px] rounded-sm" xl fontMedium onClick={handleStartSearch}/>
            </div>
        </div>
     );
}

export default NoWishlist;