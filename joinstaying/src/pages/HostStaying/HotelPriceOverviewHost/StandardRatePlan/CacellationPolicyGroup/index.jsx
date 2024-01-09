import Title from '../../../../../components/Title/Title'
import Border from '../../../../../components/Border/Border'
import { PriceOverViewCancelPolicyData } from '../../../../../components/Constants/PriceOverViewCancelPolicyData';
import Label from '../../../../../components//Label/Label'

const CancellationPolicyGroup = () =>{
    return <div className="flex flex-col gap-2 dark:text-primary-50">
        <Title 
        title="This policy is set at the property level – any changes made will be applied to all rooms."
        large
        nowrap={false}

        />
        <Border/>
        <ul className='list-none gap-2 flex flex-col'>
        {PriceOverViewCancelPolicyData.map((item,index) => (
            <Label 
            className="items-start gap-3"
            key={index} 
            icon={item?.icon} 
            classIcon="dark:text-white"
            size={24}
            title={item?.name}
            classTitle="text-[14px] dark:text-primary-50"
            />
        ))}
        </ul>
    </div>
}

export default CancellationPolicyGroup;