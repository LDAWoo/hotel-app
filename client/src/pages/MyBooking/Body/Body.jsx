import Image from "../../../components/Image/Image";
import { getLocale } from "../../../components/Locale/Locale";
import Title from "../../../components/Title/Title";
import Icon from "../../../components/Icon/Icon";
import {format} from 'date-fns'
import { LuClock3 } from "react-icons/lu";
import MoneyFormatStaying from "../../../components/Staying/MoneyFormatStaying";
import { useTranslation } from "react-i18next";


function Body() {
    const {t} = useTranslation()
    const locale = getLocale();
    

    return ( 
        <div className="w-full flex-col">
            <div className="flex flex-row items-start justify-between">
                <Title title={t("MyBooking.title")} fontBold extraLarge9 />
                <div className="flex flex-col items-start">
                    <div className="flex flex-col items-start">
                        <Title title={t("MyBooking.bookingConfirmation")} xxl/>
                        <div className="uppercase text-[9px]">
                            {t("MyBooking.confirmNumber")}
                            <span className="text-hotel-50 font-bold text-[13px]">182993239</span>
                            <br/>
                            {t("MyBooking.pinCode")}
                            <span className="text-hotel-50 font-bold text-[13px]">1234</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col w-full p-2 border-[2px] border-black bg-gray-100 mt-1">
                <div className="flex flex-col 2md:flex-row 2md:justify-between items-center justify-center w-full gap-1">
                    <div className="flex flex-col 2md:flex-row items-center">
                        <div className="min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] 2md:w-[90px] 2md:h-[90px] 2md:max-w-[90px] 2md:max-h-[90px] opacity-80 bg-white">
                            <Image src="https://bstatic.com/xdata/images/hotel/300x300/504430246.jpg?k=e4423874ca62d56e8cd030e1fdac03a7587d8fb99fdc95dbbb52f84bb51c2bb1&o="/>
                        </div>
    
                        <div className="flex flex-col ml-2 text-center items-center 2md:items-start">
                            <Title title="Hotel" large fontBold/>
                            <div className="flex flex-row items-center gap-1">
                                <Title title={t("MyBooking.address")} medium fontBold/>   
                                <Title title="124 An Nhơn, Go Vap, Gò Vấp, Vietnam" medium nowrap={false}/>   
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <Title title={t("MyBooking.phone")} medium fontBold/>   
                                <Title title="0352843864" medium nowrap={false}/>   
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="flex flex-row items-start 2md:min-w-[450px]">
                            <div className="p-[0_16px] w-full border-r-[1px] border-gray-200">
                                <div className="flex flex-col items-center uppercase w-full">
                                    <Title title={t("MyBooking.checkIn")} small/>
                                    <Title title={`${format(new Date(), 'dd', {locale})}`} fontBold extraLarge7/>
                                    <Title title={`${format(new Date(), 'LLLL', {locale})}`} fontBold medium/>
                                    <Title title={`${format(new Date(), 'EEEE', {locale})}`} className="italic font-[Georgia] capitalize" medium/>
                                    <div className="flex flex-row items-center">
                                        <Icon icon={LuClock3} size={10}/>
                                        <Title title={`${"10:00 - 12:00"}`} className="ml-[2px] font-[Georgia]" medium/>
                                    </div>
                                </div>
                            </div>
                            <div className="p-[0_16px] w-full border-l-[1px] border-r-[1px] border-gray-200">
                                <div className="flex flex-col items-center uppercase w-full">
                                    <Title title={t("MyBooking.checkOut")} small/>
                                    <Title title={`${format(new Date(), 'dd', {locale})}`} fontBold extraLarge7/>
                                    <Title title={`${format(new Date(), 'LLLL', {locale})}`} fontBold medium/>
                                    <Title title={`${format(new Date(), 'EEEE', {locale})}`} className="italic font-[Georgia] capitalize" medium/>
                                    <div className="flex flex-row items-center">
                                        <Icon icon={LuClock3} size={10}/>
                                        <Title title={`${"10:00 - 12:00"}`} className="ml-[2px] font-[Georgia]" medium/>
                                    </div>
                                </div>
                            </div>

                            <div className="p-[0_16px] w-full border-l-[1px] border-gray-200 h-full">
                                <div className="flex flex-row justify-between items-center w-full">
                                    <Title title={t("MyBooking.units")} small/>
                                    <Title title={t("MyBooking.nights")} small/>
                                </div>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <Title title="1" fontBold extraLarge7/>
                                    <Title title="/" extraLarge7 className="text-gray-300"/>
                                    <Title title="1" fontBold extraLarge7/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 w-full mt-2 mb-2">
                </div>

                <div className="flex flex-col">
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-col items-start">
                            <Title title={t("MyBooking.price")} fontBold xxl className="uppercase"/>
                            <Title title={`1 ${t("MyBooking.units")}`} medium className="lowercase"/>
                            <Title title={`8 % ${t("MyBooking.vat")}`} medium className="uppercase"/>
                            <Title title={t("MyBooking.price")} xxxl className="uppercase"/>
                        </div>
    
                        <div className="flex flex-col items-end">
                            <span></span>
                            <MoneyFormatStaying price={925926} decimalScale={0} className="text-[10px] gap-1"/>
                            <MoneyFormatStaying price={74074} decimalScale={0} className="text-[10px] gap-1"/>
                            <MoneyFormatStaying price={1000000} decimalScale={0} className="text-[20px] gap-1"/>
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
                        <Title title={`${"Lee Vu / "}${t("MyBooking.forMax")}${" 2 "}${t("MyBooking.people")}`} medium nowrap={false}/>
                    </div>
                    <div className="flex flex-row gap-[2px]" >
                        <Title title={t("MyBooking.bedSize")} fontBold medium nowrap={false}/>
                        <Title title={`${"1 double bed (131-150 cm wide)"}`} medium nowrap={false}/>
                    </div>
                </div>  

            </div>
        </div>
     );
}

export default Body;