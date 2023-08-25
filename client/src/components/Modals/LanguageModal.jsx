import Modals from './Modals'
import useRegisterModal from '../../hooks/useRegisterModal'

function LanguageModal(){
    
    const {isOpen, onClose} = useRegisterModal()

    return (
        <Modals
        isOpen={isOpen}
        title="Select Language"
        onClose={onClose}

        ></Modals>
    );
}

export default LanguageModal;