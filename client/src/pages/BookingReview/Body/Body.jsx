import Image from '../../../components/Image/Image';
import Title from '../../../components/Title/Title';
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiWink } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";
import Icon from "../../../components/Icon/Icon";
import { useState } from 'react';
import TextInput from '../../../components/TextInput/TextInput';
import StayingRating from '../../../components/Staying/StayingRating';
import Button from '../../../components/Buttons/Button';
import ToolTip from '../../../components/ToolTip/ToolTip';

function Body() {
    const [currentRating, setCurrentRating] = useState(0)
    const [activeRating, setActiveRating] = useState(0)

    const itemsRating = [
        {
            rating: 1,
            name: 'Disappointing',
            icon: BsEmojiFrown
        },
        {
            rating: 2,
            name: 'Average',
            icon: BsEmojiNeutral
        },
        {
            rating: 3,
            name: 'Good',
            icon: BsEmojiSmile
        },
        {
            rating: 4,
            name: 'Very good',
            icon: BsEmojiWink
        },
        {
            rating: 5,
            name: 'Excellent',
            icon: BsEmojiSunglasses
        }
    ]

    const emojis = [
        {
            name: "poor",
            icon: BsEmojiFrown
        },
        {
            name: "fair",
            icon: BsEmojiNeutral
        },
        {
            name: "good",
            icon: BsEmojiSmile
        },
        {
            name: "excellent",
            icon: BsEmojiSunglasses
        },
    ]

    const handleChooseRating = (r) => {
        setCurrentRating(r)
    }

    const handleMouseEnter = (r) => {
        setActiveRating(r)
    }

    const handleMouseLeave = (r) => {
        setActiveRating(0)
    }

    const categories = [
        {
            id: 1,
            name: "Staff",
        },
        {
            id: 2,
            name: "Facilities",
        },
        {
            id: 3,
            name: "Cleanliness",
        },
        {
            id: 4,
            name: "Comfort",
        },
        {
            id: 5,
            name: "Value for money",
        }
    ]

    return ( 
        <div className="flex flex-col">
            <div className='relative w-full h-[250px]'>
                <Image 
                className="w-full h-full object-cover"
                src="https://cf.bstatic.com/xdata/images/hotel/820x250/504430246.webp?k=530764bc2d855404318a2fc6e2ba0630bffe74b17b207b93ade14600d986ad3f&o="/>
                <div className='text-white absolute left-0 bottom-0 w-full p-[32px_16px] ' style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.7) 100%)'}}>
                    <Title title={`Rate Hotel`} xxxl/>
                    <div>
                        <Title title={`1 night in Ho Chi Minh City`} xl/>
                        <br/>
                        <Title title={`13 Apr - 14 Apr`} xl/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <div className='bg-white border border-gray-200 p-4 flex flex-col gap-4 w-full'>
                    <Title title="1. Rate this property:" xxxl fontBold/>
                    <Title title="How was your stay at Hotel?" xl fontBold/>

                        <div className='flex flex-col gap-2'>
                            <div className='flex w-full'>
                                {itemsRating.map((item, index) => (
                                    <div onClick={() => handleChooseRating(item?.rating)} onMouseEnter={() => handleMouseEnter(item?.rating)} onMouseLeave={() => handleMouseLeave(item?.rating)} key={index} className={`overflow-hidden w-full h-[42px] border border-[#bdbdbd] ${index === itemsRating.length - 1 ? 'border-r' : 'border-r-0'} ${index === 0 ? 'rounded-tl-[4px] rounded-bl-[4px]' : 'rounded-0'} ${index === itemsRating.length - 1 ? 'rounded-tr-[4px] rounded-br-[4px]' : 'rounded-0'}`}>
                                        <ToolTip typeToolTip='TippyHeadless' isVisible={activeRating === item?.rating} 
                                                items={
                                                    <div className=' text-white justify-center items-center flex flex-col bg-hotel-100 p-[4px_8px] rounded-[6px]'>
                                                        <div className='flex flex-row items-center gap-1'>
                                                            <Icon icon={item?.icon} size={22}/>
                                                            <Title title={item?.rating} xl fontBold/>
                                                        </div>
                                                        <Title title={item?.name} xl fontBold className="mt-[2px]"/>
                                                    </div>
                                                }>
                                                    <div className={`w-full h-full cursor-pointer flex items-center justify-center text-center duration-200 text-[14px] font-bold  ${item?.rating === currentRating ? 'bg-hotel-100 text-white' : 'hover:bg-gray-100 text-[#737373]'}`}>
                                                            <div>
                                                                {item?.rating}
                                                            </div>
                                                    </div>
                                        </ToolTip>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-row justify-between text-[#737373]'>
                                <Title title="Bab" fontMedium xl/>
                                <Title title="Exceptional" fontMedium xl/>
                            </div>
                        </div>
                </div>

                <div className='bg-white border border-gray-200 p-4 flex flex-col gap-4 w-full'>
                    <div className='flex flex-col gap-4'>
                        {categories.map((category, index) => (
                            <div key={index} className='flex flex-col gap-2'>
                                <Title title={category.name} xxl fontBold/>
                                <div className='flex flex-row w-full'>
                                    {emojis.map((emoji, index) => (
                                        <div data-value={emoji?.name} key={index} className={`w-full flex justify-center items-center hover:bg-gray-200 h-[42px] cursor-pointer duration-200`}>
                                            <Icon icon={emoji.icon} size={22} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='flex flex-col gap-4'>
                        <Title title="Write a short sentence to sum up your stay." xxl fontBold nowrap={false}/>
                        <TextInput />

                    </div>
                </div>

                <div className='bg-white border border-gray-200 p-4 flex flex-col gap-4 w-full'>
                    <div className='flex flex-col gap-4'>
                        <Title title="Preview of your experience" xxl fontBold nowrap={false}/>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-2 items-center'>
                                <div className='w-[32px] h-[32px] rounded-full overflow-hidden flex justify-center items-center text-white bg-secondary-200'>
                                    <span className='font-medium text-[14px] capitalize'>w</span>
                                </div>
                                <div> 
                                    <Title title={`Vu Lee`} fontBold xl/>
                                </div>
                            </div>
                            <div>
                                <StayingRating rating={currentRating}/>
                            </div>
                        </div>
                        <Title title="Good" extraLarge4/>
                        <Title title="There are no comments available for this review" xl nowrap={false}/>
                        <Button title="Submit review" fontBold xl background className="p-[8px_12px] rounded-[6px]" classButton="justify-center w-full"/>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Body;