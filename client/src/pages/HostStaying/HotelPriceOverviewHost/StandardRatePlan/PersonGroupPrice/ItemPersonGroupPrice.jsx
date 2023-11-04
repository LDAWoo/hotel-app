import CurrencyFormat from 'react-currency-format'
import Title from '../../../../../components/Title/Title';
import Icon from '../../../../../components/Icon/Icon';
import { BiSolidUser } from "react-icons/bi";
const ItemPersonGroupPrice = ({person,price}) =>{
    return <div className='flex flex-row items-center'>
        <div className='flex items-center flex-row gap-2 w-[150px] '>
            <Icon icon={BiSolidUser} size={24}/>
            <p className='text-[14px]'>✕</p>
            <Title title={person} xl/>
        </div>
        <CurrencyFormat 
        className='text-[14px] '
        value={price}
        displayType={'text'}
        thousandSeparator={true}
        fixedDecimalScale={true}
        decimalScale={2}
        prefix="VND "
        />
    </div>
}

export default ItemPersonGroupPrice;