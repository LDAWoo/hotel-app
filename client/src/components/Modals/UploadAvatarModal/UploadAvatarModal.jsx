
import useRegisterModalUploadAvatar from '../../../hooks/Profile/useRegisterModalUploadAvatar';
import Modals from '../Modals';
import Body from './Body';
import { useTranslation } from 'react-i18next';

const UploadAvatarModal = () => {
    const { isOpen, onClose } = useRegisterModalUploadAvatar();
    const {t} = useTranslation()

    return (
        <Modals
            classModalWidth="w-[530px]"
            isOpen={isOpen}
            title={t("Profile.information.selectImage")}
            onClose={onClose}
            body={<Body />}
            classTitle="justify-between"
            hAuto
        />
    );
}

UploadAvatarModal.propTypes = {}

export default UploadAvatarModal