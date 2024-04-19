import { useContext } from "react";
import { IoMdHeart } from "react-icons/io";
import { Navigation } from "swiper/modules";
import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import { DeviceContext } from "../../../components/Contexts/AppDeviceProvider";
import Icon from "../../../components/Icon/Icon";
import Spin from "../../../components/Spin/Spin";
import Title from "../../../components/Title/Title";
import useRegisterWishlist from "../../../hooks/Wishlist/useRegisterWishlist";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import CardItem from "./CardItem";
import CardItemSkeleton from "./CardItemSkeleton";
import NoWishlist from "./NoWishlist";
import { useTranslation } from "react-i18next";

function Body() {
    const {t} = useTranslation()
    const { width } = useRegisterWindowSizeStore();
    const { isMobile } = useContext(DeviceContext);
    const {wishlist, loadingWishlist} = useRegisterWishlist()
    
    return ( 
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-1">
                <Title title={t("MyWishlist.title")} fontBold extraLarge9/>
                <div className="flex flex-row gap-2 items-center">
                    <div className="flex flex-row gap-1 items-center text-[15px]">
                        <Icon icon={IoMdHeart} classIcon="text-[#d4111e]" size={20}/>
                        <div className="flex flex-row items-center gap-1">
                            {loadingWishlist ? <Spin/> : <span className="">{wishlist.length}</span>}
                            <Title title={t("MyWishlist.propertiesSaved")}/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">

                    </div>
                </div>

                <div className="mt-4">
                    {loadingWishlist ? 
                        <div className='grid grid-cols-2 sm:grid-cols-3 2md:grid-cols-4 gap-4'>
                            {Array.from({ length: 4 }).map((_, index) => (
                            <CardItemSkeleton key={index} />
                            ))}
                        </div> : 
                        <>
                            {wishlist.length > 0 ? 
                                <CarouselCustom
                                spaceBetween={15}
                                navigation={!isMobile}
                                modules={[Navigation]}
                                slidesPerView={width >= 900 ? 4 : width >= 640 ? 3 : 2}
                                slides={wishlist}
                                component={CardItem}
                                />    
                                : <NoWishlist/>
                            }
                        </>
                        }
                </div>
            </div>
        </div>
     );
}

export default Body;