import {AiOutlineCheck} from 'react-icons/ai'

export const HotelPriceData =[
    {
        id:1,
        title:"How much do you want to charge per night?",
        type:'number',
        data: [{
            id:1,
            name:"Price guests pay",
            subName:"Including taxes, commission and charges",
            
        }],
        
    },
    {
        id:2,
        type:'none',
        commissionRate: 15,
            data:[
                {
                    icon: AiOutlineCheck,
                    name:"24/7 help in your language"
                },
                {
                    icon: AiOutlineCheck,
                    name:"Save time with automatically confirmed bookings"
                },
                {
                    icon: AiOutlineCheck,
                    name:"We promote your place on Google"
                }
            ],
            earning:"Your earnings (including taxes)"
    }
]