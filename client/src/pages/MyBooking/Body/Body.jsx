import { format } from 'date-fns';
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from 'react-router-dom';
import { getBooking, getBookingDetails } from "../../../api/User/Booking";
import { UserContext } from "../../../components/Contexts/AppUserProvider";
import { getLocale } from "../../../components/Locale/Locale";
import MoneyFormatStaying from "../../../components/Staying/MoneyFormatStaying";
import Title from "../../../components/Title/Title";
import BodyBookingSkeleton from "./BodyBookingSkeleton";
import HeaderBookingSkeleton from "./HeaderBookingSkeleton";


function Body() {
    const {t} = useTranslation()
    const locale = getLocale();
    const {token,userLoading,user} = useContext(UserContext)
    const [bookings, setBookings] = useState([])
    const [booking, setBooking] = useState({});
    const [loading , setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const bid = searchParams.get('bid') || "";
    const [totalRooms , setTotalRooms] = useState({})

    useEffect(() => {
        if(!userLoading && Object.keys(user).length > 0 && token){
            const fetchData = async() => {
                try {
                    setLoading(true)
                    const resultBookings = await getBooking(token)
                    const resultBooking = await getBookingDetails(bid, token);
                    setBookings(resultBookings.data);
                    setBooking({rooms: resultBooking.data});
                } catch (error) {
                    setBookings([])
                    setBooking([])
                    setLoading(true)
                }
            }
            fetchData()
        }
    },[user,userLoading,token,bid])


    useEffect(() => {
        if(bookings.length > 0){
            const filterBookings = bookings.reduce((acc, b) => {
                if(b?.bookingId === bid){
                    acc.push(b)
                }
                return acc;
            })

            if(Object.keys(bookings).length > 0){
                setBooking((prev) => ({
                    ...prev,
                    ...filterBookings
                }))
            }
        }

    },[bookings,bid])

    useEffect(() => {
        if (booking.rooms && booking.rooms.length > 0) {
            const total = booking.rooms.reduce((acc, room) => {
                const quantityRooms = acc.totalRoom + room.quantityRoom;
                const discount = acc.totalDiscount + (room.discount || 0) / quantityRooms;
                const totalPrice = acc.totalPrice + (room.totalPriceRoom || 0);
                const totalPriceOriginal = acc.totalPriceOriginal + (room.totalPriceRoomOrigin || 0);

                return {
                    totalRoom: quantityRooms,
                    totalDiscount: discount,
                    totalPrice: totalPrice,
                    totalPriceOriginal: totalPriceOriginal
                };
            }, { totalRoom: 0, totalDiscount: 0, totalPrice: 0, totalPriceOriginal: 0 });

            setTotalRooms(total);
            setLoading(false)
        }
    }, [booking?.rooms]);
    

    return ( 
        <div className="w-full flex-col">
            <div className="flex flex-row items-start justify-between">
                <Title title={t("MyBooking.title")} fontBold extraLarge9 />
                {loading ? 
                <div>
                    <HeaderBookingSkeleton />
                </div> : <div className="flex flex-col items-start">
                    <div className="flex flex-col items-start">
                        <Title title={t("MyBooking.bookingConfirmation")} xxl/>
                        <div className="uppercase text-[9px]">
                            {t("MyBooking.confirmNumber")}
                            <span className="text-hotel-50 font-bold text-[13px]">{` ${booking?.bookingCode}`}</span>
                            <br/>
                            {t("MyBooking.pinCode")}
                            <span className="text-hotel-50 font-bold text-[13px]">{` ${booking?.pinCode}`}</span>
                        </div>
                    </div>

                </div>}
            </div>

            {loading ? <div className="mt-1">
                <BodyBookingSkeleton/>
            </div> : <div className="flex flex-col w-full p-2 border-[2px] border-black bg-gray-100 mt-1">
                <div className="flex flex-col 2md:flex-row 2md:justify-between items-center justify-center w-full gap-1">
                    <div className="flex flex-col 2md:flex-row items-center">
                        <div className="min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] 2md:w-[90px] 2md:h-[90px] 2md:max-w-[90px] 2md:max-h-[90px] opacity-80 bg-white">
                            <img className="w-full h-full object-cover" src={booking?.hotel?.hotelImage} alt={booking?.hotel?.hotelName}/>
                        </div>
    
                        <div className="flex flex-col ml-2 text-center items-center 2md:items-start">
                            <Title title={booking?.hotel?.hotelName} large fontBold/>
                            <div className="flex flex-row items-center gap-1">
                                <Title title={t("MyBooking.address")} medium fontBold/>   
                                <Title title={booking.address} medium nowrap={false}/>   
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <Title title={t("MyBooking.phone")} medium fontBold/>   
                                <Title title={booking.phoneNumber} medium nowrap={false}/>   
                            </div>
                        </div>
                    </div>

                    {booking?.rooms && booking?.rooms.length > 0 && <div className="flex flex-row">
                        <div className="flex flex-row items-start 2md:min-w-[450px]">
                            <div className="p-[0_16px] w-full border-r-[1px] border-gray-200">
                                <div className="flex flex-col items-center uppercase w-full">
                                    <Title title={t("MyBooking.checkIn")} small/>
                                    <Title title={`${format(new Date(booking?.rooms[0]?.checkInDate), 'dd', {locale})}`} fontBold extraLarge7/>
                                    <Title title={`${format(new Date(booking?.rooms[0]?.checkInDate), 'LLLL', {locale})}`} fontBold medium/>
                                    <Title title={`${format(new Date(booking?.rooms[0]?.checkInDate), 'EEEE', {locale})}`} className="italic font-[Georgia] capitalize" medium/>
                                    {/* <div className="flex flex-row items-center">
                                        <Icon icon={LuClock3} size={10}/>
                                        <Title title={`${"10:00 - 12:00"}`} className="ml-[2px] font-[Georgia]" medium/>
                                    </div> */}
                                </div>
                            </div>
                            <div className="p-[0_16px] w-full border-l-[1px] border-r-[1px] border-gray-200">
                                <div className="flex flex-col items-center uppercase w-full">
                                    <Title title={t("MyBooking.checkOut")} small/>
                                    <Title title={`${format(new Date(booking?.rooms[0]?.checkOutDate), 'dd', {locale})}`} fontBold extraLarge7/>
                                    <Title title={`${format(new Date(booking?.rooms[0]?.checkOutDate), 'LLLL', {locale})}`} fontBold medium/>
                                    <Title title={`${format(new Date(booking?.rooms[0]?.checkOutDate), 'EEEE', {locale})}`} className="italic font-[Georgia] capitalize" medium/>
                                    {/* <div className="flex flex-row items-center">
                                        <Icon icon={LuClock3} size={10}/>
                                        <Title title={`${"10:00 - 12:00"}`} className="ml-[2px] font-[Georgia]" medium/>
                                    </div> */}
                                </div>
                            </div>

                            <div className="p-[0_16px] w-full border-l-[1px] border-gray-200 h-full">
                                <div className="flex flex-row justify-between items-center w-full">
                                    <Title title={t("MyBooking.rooms")} small/>
                                    <Title title={t("MyBooking.nights")} small/>
                                </div>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <Title title={totalRooms?.totalRoom} fontBold extraLarge7/>
                                    <Title title="/" extraLarge7 className="text-gray-300"/>
                                    <Title title={booking?.rooms[0]?.totalDay} fontBold extraLarge7/>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>

                <div className="border-t border-gray-300 w-full mt-2 mb-2">
                </div>

                <div className="flex flex-col">
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-col items-start">
                            <Title title={t("MyBooking.price")} fontBold xxl className="uppercase"/>
                            <Title title={`${totalRooms?.totalRoom} ${t("MyBooking.rooms")}`} medium className="lowercase"/>
                            {totalRooms?.totalDiscount > 0 && <Title title={`${totalRooms?.totalDiscount} % ${t("MyBooking.vat")}`} medium className="uppercase"/>}
                            <Title title={t("MyBooking.price")} xxxl className="uppercase"/>
                        </div>
    
                        <div className="flex flex-col items-end">
                            <span></span>
                            <MoneyFormatStaying price={totalRooms?.totalPrice} decimalScale={0} className="text-[10px] gap-1"/>
                            {totalRooms?.totalDiscount > 0 && <MoneyFormatStaying price={totalRooms?.totalPriceOriginal} decimalScale={0} className="text-[10px] gap-1"/>}
                            <MoneyFormatStaying price={totalRooms?.totalPrice} decimalScale={0} className="text-[20px] gap-1"/>
                        </div>  
                    </div>

                    <div className="flex flex-col">
                        <Title title={t("MyBooking.finalPrice.title")} fontBold large nowrap={false}/>
                        <Title title={t("MyBooking.finalPrice.items.item1")} medium nowrap={false}/>
                        <Title title={t("MyBooking.finalPrice.items.item2")} medium nowrap={false}/>
                    </div>
                </div>

                <div className="border-t border-gray-300 w-full mt-1 mb-1"></div>

                <div className="flex flex-col">
                    <Title title={t("MyBooking.paymentInfo.title")} fontBold large nowrap={false}/>
                    <Title title={t("MyBooking.paymentInfo.items.item1")} medium nowrap={false}/>
                    <Title title={t("MyBooking.paymentInfo.items.item2")} medium nowrap={false}/>
                </div>

                <div className="border-t border-gray-300 w-full mt-1 mb-1"></div>

                <div className="flex flex-col">
                    <Title title={t("MyBooking.additionInfo.title")} fontBold large nowrap={false}/>
                    <Title title={t("MyBooking.additionInfo.items.item1")} medium nowrap={false}/>
                    <Title title={t("MyBooking.additionInfo.items.item2")} medium nowrap={false}/>
                    <Title title={t("MyBooking.additionInfo.items.item3")} medium nowrap={false}/>
                </div>

                <div className="border-t border-gray-300 w-full mt-1 mb-1"></div>

                <div className="flex flex-col w-full">
                    <Title title="Double Room" fontBold large nowrap={false}/>
                    <div className="flex flex-row gap-[2px]" >
                        <Title title={t("MyBooking.guestName")} fontBold medium nowrap={false}/>
                        <Title title={`${booking.fullName} ${t("MyBooking.forMax")}`} medium nowrap={false}/>
                    </div>
                    <div className="flex flex-col gap-[2px]" >
                        <Title title={t("MyBooking.roomName")} fontBold medium nowrap={false}/>
                        <div className="flex flex-col">
                            {booking.rooms.map((room, index) => (
                                <div key={index} className="flex flex-row items-center gap-1 h-[15px]">
                                        <span className="text-[10px]">{`- ${room.roomName}`}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>  
            </div>}
        </div>
     );
}

export default Body;