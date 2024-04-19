import userRegisterToolTipAdult from '../../../hooks/useRegisterToolTipAdult';
import Button from '../../Buttons/Button'
import {useTranslation} from 'react-i18next'
function Done() {
    const {onClose} = userRegisterToolTipAdult()
    const {t} = useTranslation();

    const handleDoneGuests = () => {
        onClose();
    }
    return ( 
        <div className='flex w-full'>
            <Button title={t("Search.Guest.Done")} border xl medium className="p-[4px_8px] rounded-[4px]" classButton="w-full items-center justify-center" onClick={handleDoneGuests}/>
        </div>
     );
}

export default Done;