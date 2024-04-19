import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Buttons/Button';
import Icon from '../../../components/Icon/Icon';
import Image from '../../../components/Image/Image';
import Title from '../../../components/Title/Title';
import routesConfig from '../../../configs/routesConfig';
import { useTranslation } from "react-i18next";

function CreateAccount() {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate(routesConfig.register)
    }

    return ( 
        <div className="flex flex-col gap-1">
            <div className='w-full h-full relative flex aspect-[20/20] sm:aspect-auto'>
                <Image src="/images/backgroundmywishlistnotaccount.jpg" className="w-full h-full object-cover"/>
                <div className='flex text-center items-center justify-center flex-col gap-2 w-full absolute top-[22%] left-0 bg-[rgba(0,0,0,0.7)] text-white pb-6'>
                    <Icon icon={CiHeart} classIcon="flex justify-center items-center relative top-[-40px] m-[0_auto] w-[80px] pt-[20px] rounded-[40px_40px_0_0] bg-[rgba(0,0,0,0.7)] h-[40px] text-white" size={48}/>
                    <Title title={t("MyWishlist.CreateAccount.title")} xl fontBold extraLarge8 nowrap={false}/>
                    <Title title={t("MyWishlist.CreateAccount.subTitle")} xl nowrap={false}/>
                    <div>
                        <Button title={t("MyWishlist.CreateAccount.createAccount")} background className="p-[4px_12px] rounded-[2px]" xl fontBold onClick={handleCreateAccount}/>
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center text-center mt-1'>
                <Link to={routesConfig.login} className='text-[12px] text-hotel-50 hover:text-secondary-200 duration-150'>
                {t("MyWishlist.CreateAccount.alreadyHaveAnAccount")} <strong>{t("MyWishlist.CreateAccount.signUp")}</strong> {t("MyWishlist.CreateAccount.toSeeTheLists")}
                </Link>
            </div>
        </div>
     );
}

export default CreateAccount;