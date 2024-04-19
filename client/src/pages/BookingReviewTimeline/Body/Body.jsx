import { useState } from 'react';
import Title from '../../../components/Title/Title'
import {Link} from 'react-router-dom'
import Image from '../../../components/Image/Image';
import {format} from 'date-fns'
import StayingRating from '../../../components/Staying/StayingRating';
import Button from '../../../components/Buttons/Button'
import { SlOptionsVertical } from "react-icons/sl";
import ToolTip from '../../../components/ToolTip/ToolTip';
function Body() {
    const [active, setActive] = useState("all-previews")
    const [visibleTooltip, setVisibleTooltip] = useState({
        hotelId: '',
        active: false,
    });

    const items = [
        {
            id: "all-previews",
            name: "All previews",
            value: 0
        },
        {
            id: "property-previews",
            name: "Property previews",
            value: 0
        }
    ]

    const handleChooseOptions = (id) => {
        setActive(id)
    }

    return ( 
        <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col 2md:flex-row gap-4 w-full">
                <div className="flex flex-col bg-gray-50 border border-gray-300 rounded-[6px] w-full 2md:w-[30%]">
                    <div className="flex flex-row gap-3 p-4 items-center">
                        <div className="flex bg-secondary-200 text-white flex-row justify-center items-center h-[52px] w-[52px] rounded-full overflow-hidden">
                            <Title title={`w`} fontBold xxl className="capitalize"/>
                        </div>
                        <div className='flex flex-col'>
                            <Title title={`Woo Lee`} xl fontBold/>
                            <Link className='text-hotel-50 text-[14px] hover:underline duration-150 hover:text-secondary-200'>Edit your profile</Link>
                        </div>
                    </div>

                    <div className='flex flex-col w-full'>
                        {items.map((item, index) => (
                            <div key={index} onClick={() => handleChooseOptions(item?.id)} className={`flex border-t border-t-gray-200 hover:border-t-gray-200 flex-row justify-between text-hotel-50 p-4 cursor-pointer border-l-2 ${active === item.id ? ' border-hotel-75' : 'border-transparent'} hover:border-hotel-75 duration-200`}>
                                <Title title={item?.name} xl />
                                <Title title={item?.value} xl fontMedium/>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className='flex flex-col w-full 2md:w-[60%]'>
                    <div className='p-4 flex flex-row gap-3 w-full bg-gray-50 border border-gray-300 rounded-[6px]'>
                        <div className='h-[72px] min-w-[72px] overflow-hidden rounded-[8px]'>
                            <Image className="w-full h-full object-cover" src="https://cf.bstatic.com/xdata/images/hotel/270x200/504430246.jpg?k=530764bc2d855404318a2fc6e2ba0630bffe74b17b207b93ade14600d986ad3f&o="/>
                        </div>
                        <div className='flex flex-row justify-between w-full'>
                            <div className='flex flex-col gap-1'>
                               <div className='flex flex-col gap-2'>
                                    <div className='rounded-[4px] p-[2px_4px] text-[12px] w-fit border border-[#008234] text-[#008234] overflow-hidden'>
                                            Review posted
                                    </div>
                                    <span className='font-bold text-[15px]'>
                                        You reviewed <Link className='underline hover:text-secondary-200 duration-200'>{"Hotel"}</Link>
                                    </span>
                                </div>
                                <Title title={`${format(new Date(), 'dd LLL yyyy')}`} xxl/>
                                <div className='flex flex-row gap-1 items-center'>
                                    <StayingRating rating={9}/>
                                    <Title title={`Good`} extraLarge4/>
                                </div>
                            </div>
                            <div>
                                <ToolTip width={230} placement="bottom-end" isVisible={visibleTooltip.active} typeToolTip="TippyHeadless" interactive items={
                                    <div className="pt-2 pb-2 overflow-hidden rounded-md shadow-[0_2px_8px_0_rgba(26,26,26,0.16)]">
                                    <div className="flex flex-col w-full">
                                        <Button className="p-[10px_16px] hover:bg-gray-100 duration-300" title="Edit" xl/>
                                        <Button className="p-[10px_16px] hover:bg-gray-100 duration-300" title="Delete" xl/>
                                    </div>
                                </div>
                                }>
                                    <div>
                                        <Button icon={SlOptionsVertical} size={18} border className="p-[4px] rounded-[2px]" classButton="gap-[0!important]"/>
                                    </div>
                                </ToolTip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Body;