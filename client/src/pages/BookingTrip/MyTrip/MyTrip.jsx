import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../components/Contexts/AppUserProvider";
import { getBooking } from "../../../api/User/Booking";
import Title from "../../../components/Title/Title";
import Image from "../../../components/Image/Image";
import Button from "../../../components/Buttons/Button";
import {format} from 'date-fns'
import { getLocale } from "../../../components/Locale/Locale";
import { Link } from "react-router-dom";
import MoneyFormatStaying from "../../../components/Staying/MoneyFormatStaying";
import { SlOptionsVertical } from "react-icons/sl";
import ToolTip from "../../../components/ToolTip/ToolTip";
import routesConfig from "../../../configs/routesConfig";
import { useTranslation } from "react-i18next";


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
                    setLoading(false)
                } catch (error) {
                    setLoading(true)
                }
            }
            fetchData()
        }
    },[user,userLoading,token])

    const items =[
        {
            name: t("MyTrip.items.item1"),
        },
        {
            name: t("MyTrip.items.item2"),
        }
    ]

    const handleShowOptions = () => {
        setVisible(!visible);
    }

    return ( 
        <div className="flex w-full">
            <div className="flex flex-col gap-12 w-full">
                <Title title={t("MyTrip.title")} fontBold extraLarge9 />

                <div className="w-full">
                    {
                        loading ? (
                            <div>Loading</div>
                        ) : (
                            <>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="flex flex-col gap-1">
                                        <Title title="Ho Chi Minh City" fontBold extraLarge9 nowrap={false} />
                                        <Title title={`${format(new Date(), 'dd LLLL yyyy', {locale})} - ${format(new Date(), 'dd LLLL yyyy', {locale})}`} xxl nowrap={false} />
                                    </div>

                                    <Link to={routesConfig.mybooking} target="_blank" className="relative z-0 mt-4 flex w-full rounded-md border border-gray-200 p-6 duration-200 shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] hover:shadow-[0_2px_16px_0_rgba(26,26,26,0.24)]">
                                        <div className="flex flex-row items-center w-full">
                                            <div className="flex flex-row w-full">
                                                <div className="flex flex-row items-start sm:items-center flex-1 gap-6">
                                                    <div className="min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] 2md:w-[80px] 2md:h-[80px] 2md:max-w-[80px] 2md:max-h-[80px] opacity-60 bg-white">
                                                        <Image src="https://bstatic.com/xdata/images/hotel/300x300/504430246.jpg?k=e4423874ca62d56e8cd030e1fdac03a7587d8fb99fdc95dbbb52f84bb51c2bb1&o="/>
                                                    </div>
                                                    <div className="flex flex-col gap-1 text-gray-500">
                                                        <Title title="Hotel" fontBold xxl />
                                                        <div className="inline sm:flex flex-row items-center gap-1">
                                                            <Title title={`${format(new Date(), 'dd LLLL yyyy', {locale})}`} xl nowrap={false}/>
                                                            <Title title={`${"–"}`} xl nowrap={false} className="m-[0_4px] sm:m-0"/>
                                                            <Title title={`${format(new Date(), 'dd LLLL yyyy', {locale})}`} xl nowrap={false}/>
                                                            <Title title={`${"·"}`} xl nowrap={false} className="m-[0_4px] sm:m-0"/>
                                                            <Title title={`${"Ho Chi Minh"}`} xl nowrap={false} className="2md:flex hidden"/>
                                                            <MoneyFormatStaying price={200000} decimalScale={0} className="2md:hidden gap-1 text-[14px]"/>
                                                        </div>
                                                        <Title title={t("MyTrip.complete")} xl/>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row items-start">
                                                    <div className="flex flex-row items-center gap-2">
                                                        <MoneyFormatStaying price={200000} decimalScale={0} className="2md:flex hidden font-bold gap-1 text-[18px]"/>
                                                        <ToolTip width={230} placement="bottom-end" isVisible={visible} onClickOutside={handleShowOptions} typeToolTip="TippyHeadless" interactive items={
                                                            <div className="pt-2 pb-2 overflow-hidden rounded-md shadow-[0_2px_8px_0_rgba(26,26,26,0.16)]">
                                                                <div className="flex flex-col w-full">
                                                                    {
                                                                        items.map((item,index) => (
                                                                            <Link to={routesConfig.hotelDetails} target="_blank" key={index} className="p-[10px_16px] hover:bg-gray-100 duration-300">
                                                                                <Title title={item?.name} xl/>
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
                            </>
                        )
                    }
                </div>
            </div>
        </div>
     );
}

export default MyTrip;