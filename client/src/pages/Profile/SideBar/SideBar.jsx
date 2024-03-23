
import { LiaUserPlusSolid } from "react-icons/lia";
import { PiLockKeyThin } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../../components/Icon/Icon';
import Title from '../../../components/Title/Title';
import routesConfig from '../../../configs/routesConfig';
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const {t} = useTranslation()
  const location = useLocation();
  const items = [
    {
        name: t("Profile.information.title"),
        icon: LiaUserPlusSolid,
        path: routesConfig.profile + "/information",
    },
    {
        name: t("Profile.security.title"),
        icon: PiLockKeyThin,
        path: routesConfig.profile +"/security",
    }
  ]  

  return (
    <div>
        <div className='flex-col hidden 2md:flex w-[300px] border border-gray-200 rounded-lg mr-8'>
            {items.map((item,index) => (
                <div key={index} className={`w-full border-b-[1px] ${index === items?.length - 1 ? 'border-transparent' : 'border-gray-200'} `}>
                    <Link 
                    to={item?.path} 
                    className={`flex flex-row gap-4 items-center hover:underline hover:text-hotel-50 p-4 duration-200 ${item.path === location.pathname ? 'text-hotel-50': ''}`}
                    >
                        <Icon icon={item?.icon} size={18} classIcon="p-2 rounded-full bg-gray-100"/>
                        <div className='flex flex-col items-start'>
                            <Title title={item?.name} xl />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

SideBar.propTypes = {

}

export default SideBar
