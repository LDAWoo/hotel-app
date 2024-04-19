import { format } from "date-fns";
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineClose } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { addHotelFavorite, deleteHotelFavorite } from "../../../api/User/Wishlist";
import Button from '../../../components/Buttons/Button';
import { UserContext } from "../../../components/Contexts/AppUserProvider";
import Icon from "../../../components/Icon/Icon";
import Image from '../../../components/Image/Image';
import MoneyFormatStaying from "../../../components/Staying/MoneyFormatStaying";
import StayingRating from "../../../components/Staying/StayingRating";
import Title from "../../../components/Title/Title";
import routesConfig from "../../../configs/routesConfig";
import useRegisterWishlist from "../../../hooks/Wishlist/useRegisterWishlist";

function CardItem({item, height}) {
    const {t} = useTranslation()
    const {token} = useContext(UserContext)
    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    const [loading, setLoading] = useState(false)
    const {removeTemporaryWishlist,setTemporaryWishlist,removeFromWishlist} = useRegisterWishlist();

    const url =
        routesConfig.hotelDetails +
        `?id=${item?.hotelId}&location=${item?.city}&checkin=${format(
        new Date(),
        "yyyy-MM-dd",
        )}&checkout=${format(
        nextDay,
        "yyyy-MM-dd",
        )}&group_adults=1&group_children=0&group_rooms=1`;

    const handleRemoveFavorite = async () => {
        if(loading) return;
        try {
            setLoading(true)
            await deleteHotelFavorite(item?.hotelId, token)
            removeTemporaryWishlist(item)
            setLoading(false)
        } catch (error) {
            setLoading(true)
        }
    }

    const handleAddFavorite = async () => {
        if(loading) return;
        try{
            setLoading(true)
            await addHotelFavorite(item?.hotelId, token);
            setTemporaryWishlist(item)
            setLoading(false)
        }catch (error) {
            setLoading(true)
        }
    }

    useEffect(() => {
        const timeoutUndo = setTimeout(() =>{
            if(item?.status === "temporary" && !loading){
                removeFromWishlist(item)
            }
        },[5000])

        return () => {
            clearTimeout(timeoutUndo)
        }

    },[item,removeFromWishlist,loading])

    return ( 
        <div style={{height: `${height-10}px`}}>
            {
                item?.status === "temporary" ? 
                <div className="p-6 border-2 border-dashed border-[#e7e7e7] w-full h-fit rounded-lg" style={{height: `${height-10}px`}}>
                    <div className="flex flex-row justify-center">
                        <div>
                            <Button title={t("MyWishlist.undo")} spin={loading} className="p-[4px_8px] rounded-[4px]" border xl fontBold onClick={() => handleAddFavorite()}/>
                        </div>
                    </div>
                </div>
                :
            <div className="relative h-full w-full">
                <Link className='w-full h-full' to={url}>
                    <div className='w-full h-full rounded-lg shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] overflow-hidden'>
                        <div className='flex flex-col h-full'>
                            <div className='flex aspect-[20/16] flex-1'>
                                <Image
                                    src={item?.hotelImage || item.urlImage}
                                    className='w-full h-full object-cover rounded-tl-lg rounded-tr-lg'
                                />
                            </div>
                            <div className="flex flex-col w-full m-0 p-3 gap-1 2md:gap-2">
                                <div className='flex w-full dark:text-white'>
                                    <Title
                                    title={item?.name}
                                    fontBold
                                    nowrap={false}
                                    xxl
                                    />
                                </div>
                                <div className='flex flex-row items-center gap-2 mt-1'>
                                    <StayingRating
                                    rating={item?.rating}
                                    className='text-[12px]'
                                    />
                                    <Title
                                    title={`${item?.countView} ${t("MyWishlist.previews")}`}
                                    large
                                    className='dark:text-primary-50'
                                    />
                                </div>
                                <div className='flex w-full items-start gap-1'>
                                    <Icon icon={SlLocationPin} size={18}/>
                                    <Title
                                        title={`${item?.districtAddress}, ${item?.country}`}
                                        nowrap={false}
                                        xl
                                        className='dark:text-primary-50 min-h-[36px] line-clamp-2 overflow-hidden text-ellipsis'
                                    />
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <Title 
                                    title={`1 ${t("MyWishlist.nights")}, 1 ${t("MyWishlist.adults")}`}
                                    large
                                    />
                                    <div className="flex flex-row gap-1 items-end justify-end flex-wrap">
                                        <MoneyFormatStaying price={4502800} decimalScale={0} className="text-[#d4111e] text-[14px] gap-1 line-through"/>
                                        <MoneyFormatStaying price={1702089} decimalScale={0} className="font-bold text-[16px] gap-1"/>
                                    </div>
                                    <div className="flex flex-row items-center gap-[2px] flex-wrap justify-end">
                                        <span className="text-[14px]">+</span>
                                        <MoneyFormatStaying price={39600} decimalScale={0} className="text-[12px] gap-[2px]"/>
                                        <Title 
                                        title={t("MyWishlist.includesTaxesChanges")}
                                        large
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="absolute top-[8px] right-[8px] z-10">
                    <div>
                        <Button icon={!loading && MdOutlineClose} spin={loading} classSpin="w-5 h-5" size={20} className="rounded-full bg-white hover:bg-gray-100 duration-300 p-2 shadow-[0_2px_8px_0_rgba(26,26,26,0.16)]" classButton="gap-[0!important]" onClick={() => handleRemoveFavorite()}/>
                    </div>
                </div>  
            </div>
            }
        </div>
     );
}

CardItem.propTypes = {
    item: PropTypes.object,
    height: PropTypes.number,
}

export default CardItem;