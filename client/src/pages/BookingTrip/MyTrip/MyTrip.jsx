import { format } from 'date-fns';
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";
import { getBooking } from "../../../api/User/Booking";
import Button from "../../../components/Buttons/Button";
import { UserContext } from "../../../components/Contexts/AppUserProvider";
import Image from "../../../components/Image/Image";
import { getLocale } from "../../../components/Locale/Locale";
import MoneyFormatStaying from "../../../components/Staying/MoneyFormatStaying";
import Title from "../../../components/Title/Title";
import ToolTip from "../../../components/ToolTip/ToolTip";
import routesConfig from "../../../configs/routesConfig";
import MyTripSkeleton from "./MyTripSkeleton";


function MyTrip() {
    const { t } = useTranslation();
    const locale = getLocale();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {user, userLoading,token} = useContext(UserContext);

    useEffect(() => {
        if(!userLoading && Object.keys(user).length > 0 && token){
            const fetchData = async() => {
                try {
                    setLoading(true)
                    const results = await getBooking(token)
                    setData(results.data)
                    setLoading(false)
                } catch (error) {
                    setData([])
                    setLoading(false)
                }
            }
            fetchData()
        }
    },[user,userLoading,token])

    const items =[
        {
            name: t("MyTrip.items.item1"),
        },
        // {
        //     name: t("MyTrip.items.item2"),
        // }
    ]

    const handleShowOptions = () => {
        setVisible(!visible);
    }

    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);

    return ( 
        <div className="flex w-full">
            <div className="flex flex-col gap-12 w-full">
                <Title title={t("MyTrip.title")} fontBold extraLarge9 />

                <div className="w-full">
                    {
                        loading ? (
                            <div className="flex flex-col gap-4">
                                {Array.from({length: 1}).map((_,index) => (
                                    <div key={index}>
                                        <MyTripSkeleton />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                <div className="flex flex-col gap-4 w-full">
                                    {data && data.length > 0 ? 
                                    <>
                                        {data.map((item, index) => (
                                            <div key={index}>
                                                <div className="flex flex-col gap-1">
                                                    <Title title={`${item?.hotel.hotelAddress}`} fontBold extraLarge9 nowrap={false} />
                                                    <Title title={`${format(new Date(item?.bookingDate), 'dd LLLL yyyy', {locale})}`} xxl nowrap={false} />
                                                </div>
    
                                                <Link to={`${item?.payment.status === "STATUS_PAYMENT_PENDING" ? routesConfig.bookingconfirmation : routesConfig.mybooking}?bid=${item?.bookingId}`} target="_blank" className="relative z-0 mt-4 flex w-full rounded-md border border-gray-200 p-6 duration-200 shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] hover:shadow-[0_2px_16px_0_rgba(26,26,26,0.24)]">
                                                    <div className="flex flex-row items-center w-full">
                                                        <div className="flex flex-row w-full">
                                                            <div className="flex flex-row items-start sm:items-center flex-1 gap-6">
                                                                <div className="min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] 2md:w-[80px] 2md:h-[80px] 2md:max-w-[80px] 2md:max-h-[80px] opacity-60 bg-white">
                                                                    <Image src={item?.hotel?.hotelImage} className="w-full h-full object-cover"/>
                                                                </div>
                                                                <div className="flex flex-col gap-1 text-gray-500">
                                                                    <Title title={item?.hotel?.hotelName} fontBold xxl />
                                                                    <div className="inline sm:flex flex-row items-center gap-1">
                                                                        <Title title={`${format(new Date(item?.bookingDate), 'dd LLLL yyyy', {locale})}`} xl nowrap={false}/>
                                                                        <Title title={`${"·"}`} xl nowrap={false} className="m-[0_4px] sm:m-0"/>
                                                                        <Title title={`${item?.address}`} xl nowrap={false} className="2md:flex hidden"/>
                                                                        <MoneyFormatStaying price={item?.totalPrice} decimalScale={0} className="2md:hidden gap-1 text-[14px]"/>
                                                                    </div>
                                                                    {item?.payment.status === "STATUS_PAYMENT_PENDING" ? <Title title={t("MyTrip.confirm")} xl/> : <Title title={t("MyTrip.complete")} xl/>}
                                                                </div>
                                                            </div>
    
                                                            <div className="flex flex-row items-start">
                                                                <div className="flex flex-row items-center gap-2">
                                                                    <MoneyFormatStaying price={item?.totalPrice} decimalScale={0} className="2md:flex hidden font-bold gap-1 text-[18px]"/>
                                                                    <ToolTip width={230} placement="bottom-end" isVisible={visible} onClickOutside={handleShowOptions} typeToolTip="TippyHeadless" interactive items={
                                                                        <div className="pt-2 pb-2 overflow-hidden rounded-md shadow-[0_2px_8px_0_rgba(26,26,26,0.16)]">
                                                                            <div className="flex flex-col w-full">
                                                                                {
                                                                                    items.map((i,index) => (
                                                                                        <Link to={`${routesConfig.hotelDetails}?id=${item?.hotel?.hotelId}&location=${item?.hotel.city || "HCM"}&checkin=${format(new Date(), "yyyy-MM-dd")}&checkout=${format(nextDay, "yyyy-MM-dd")}&group_adults=1&group_children=0&group_rooms=1`} target="_blank" key={index} className="p-[10px_16px] hover:bg-gray-100 duration-300">
                                                                                            <Title title={i?.name} xl/>
                                                                                        </Link>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    }>
                                                                        <div>
                                                                            <Button icon={SlOptionsVertical} size={16} onClick={(e) => {
                                                                                e.preventDefault();
                                                                                handleShowOptions();
                                                                            }} className="p-2 bg-transparent hover:bg-gray-100 duration-300 rounded-sm" classButton="ml-1 mt-1 mb-1"/>
                                                                        </div>
                                                                    </ToolTip>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </>
                                    : <div className="w-full flex flex-col items-center justify-center text-center">
                                        <div className="w-[160px] h-[210px] 2md:w-[210px] 2md:h-[260px]">
                                            <Image src="/images/world.png"/>
                                        </div>
                                        <Title title={t("MyTrip.yourTrip")} fontBold extraLarge9 nowrap={false}/>
                                        <Title title={t("MyTrip.showAll")} xxl nowrap={false}/>
                                      </div>
                                    }
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
     );
}

export default MyTrip;