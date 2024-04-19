import Icon from "../../Icon/Icon";
import { BsPhone } from "react-icons/bs";
import Title from "../../Title/Title";
import { useEffect, useRef, useState } from "react";
import { generateQR } from "../../../utils/QRCode/QRCode";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { format } from "date-fns";
import { getLocale } from "../../Locale/Locale";
import MoneyFormatStaying from "../../Staying/MoneyFormatStaying";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'

function Body({isOpen, data}) {
    const {t} = useTranslation()
    const locale = getLocale();
    const [imageQRCode, setImageQRCode] = useState('')
    const [transition, setTransition] = useState(false);
    const phoneRef = useRef();
    const [containerHeight, setContainerHeight] = useState('auto')
    const [containerMargin, setContainerMargin] = useState('auto')
    const {width} = useRegisterWindowSizeStore()
    const [currentTime, setCurrentTime] = useState(format(new Date(), "HH:mm"))

    useEffect(() => {
        const qrData = `
                ${data?.hotel?.hotelName}
                ${t("BookingConfirm.confirmationNumber")} ${data?.bookingCode}
                ${t("BookingConfirm.pinCode")} ${data?.pinCode}
                ${t("BookingConfirm.checkOut")} / ${t("BookingConfirm.checkOut")}: ${format(new Date(data?.rooms[0]?.checkInDate), 'dd LLL yyyy', {locale})} - ${format(new Date(data?.rooms[0]?.checkOutDate), 'dd LLL yyyy', {locale})}
                ${t("BookingConfirm.address")}: ${data?.address}
                ${t("BookingConfirm.nights")} / ${t("BookingConfirm.rooms")}: ${data?.rooms[0]?.totalDay} ${t("BookingConfirm.nights")}, ${data?.rooms.length} ${t("BookingConfirm.rooms")}
                ${t("BookingConfirm.price")}: ${data?.totalPrice}
            `;
        const fetch = async () => {
            const imageQR = await generateQR(qrData);
            setImageQRCode(imageQR)
        }   

        if(Object.keys(data).length > 0){
            fetch();
        }

    },[data,locale,t]);

    useEffect(() => {
        if(isOpen){
            setTransition(isOpen)
        }
    },[isOpen])

    useEffect(() => {
        if(phoneRef.current){
            if(width > 900){
                setContainerHeight(phoneRef.current.clientHeight - 100 +"px")
            }else{
                setContainerHeight('auto')
            }
            setContainerMargin(phoneRef.current.clientHeight + 16 +"px")
        }
    },[phoneRef,width])

    useEffect(() => {
        if(isOpen){
            const time = setInterval(() => {
                setCurrentTime(format(new Date(), "HH:mm"))
            },1000)

            return () => {
                clearInterval(time)
            }
        }
    },[isOpen])

    return ( 
        <div style={{height: containerHeight}}>
            <div className="flex flex-col 2md:flex-row items-center justify-start lg:justify-center h-full">
                <div className="flex flex-col 2md:mb-[0!important]" style={{marginBottom: containerMargin}}>
                    <div className="relative mb-4 flex flex-row text-white items-center justify-center p-[4px_6px] gap-1 bg-hotel-300 rounded-[4px]">
                        <span className="absolute top-full translate-y-[-3px] left-[50%] w-[7px] h-[7px] bg-hotel-300 rotate-45">
                        </span>
                        <Icon icon={BsPhone} size={18}/>
                        <Title title={t("BookingConfirm.scanWithPhone")} large/>
                    </div>
                    <div className="flex items-center justify-center bg-[50%_50%] border-[2px] border-hotel-300 rounded-[8px] p-[2px] overflow-hidden min-w-[154px] min-h-[154px] bg-[url('/images/loading.gif')] bg-no-repeat">
                        {imageQRCode && <img src={imageQRCode} className="w-full h-full object-cover"/>}
                    </div>
                </div>
                <div className="absolute bottom-[-2px] 2md:top-[-26px] w-[316px] right-auto 2md:right-[60px] cursor-default">
                    <div className={`relative border-[12px] border-black border-b-0 rounded-tl-[32px] rounded-tr-[32px] rounded-b-0 bg-black overflow-hidden transition-all duration-700 ${!transition ? 'mt-[50px]' : 'mt-0'}`} ref={phoneRef}>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center p-[5px_20px] bg-[#003580] overflow-hidden w-full text-[#3c659e] text-[10px] box-border">
                                <span>{currentTime}</span>
                                <span className="w-[64px] h-[4px] bg-[#285594] rounded-[20px] mx-auto"></span>
                                <span>
                                    <Icon icon={MdOutlineSignalCellularAlt} size={14}/>
                                </span>
                            </div>
                            <div className="bg-[#003580] flex flex-row justify-center text-white pb-[10px]">
                                <Title title="Staying.com" extraLarge5 fontMedium/>
                            </div>
    
                            <div className="p-4 bg-white flex flex-col">
                                <div className="mb-1">
                                    <Title title={data?.hotel?.hotelName} fontBold xl/>
                                </div>
    
                                <div className="p-4 flex flex-col bg-[#f1fef6] rounded-md mb-1">
                                    <div className="text-[12px] flex gap-1">
                                        <Title title={t("BookingConfirm.confirmationNumber")}/>
                                        <strong>{data?.bookingCode}</strong>
                                    </div>
                                    <div className="text-[12px] flex gap-1">
                                        <Title title={t("BookingConfirm.pinCode")}/>
                                        <strong>{data?.pinCode}</strong>
                                    </div>
                                </div>
    
                                <div className="flex flex-row gap-2 items-center">
                                    <Icon icon={CiCalendar} size={20}/>
                                    <Title title={`${format(new Date(data?.rooms[0]?.checkInDate), 'dd LLL yyyy', {locale})} - ${format(new Date(data?.rooms[0]?.checkOutDate), 'dd LLL yyyy', {locale})}`} xl/>
                                </div>
                                <div className="flex flex-row gap-2 items-center mb-2 mt-2">
                                    <Icon icon={IoLocationOutline} size={20}/>
                                    <Title title={data?.address} xl nowrap={false}/>
                                </div>
    
                                <div className="">
                                    <Title title={`${data?.rooms[0]?.totalDay} ${t("BookingConfirm.nights")}, ${data?.rooms.length} ${t("BookingConfirm.rooms")}`} xl/>
                                </div>
    
                                <div className="flex flex-row justify-between items-center">
                                    <Title title={t("BookingConfirm.price")} xl fontBold/>
                                    <MoneyFormatStaying price={data?.totalPrice} decimalScale={0} className="text-[14px] gap-1 font-bold"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

Body.propTypes = {
    isOpen: PropTypes.bool,
    data: PropTypes.object
}

export default Body;