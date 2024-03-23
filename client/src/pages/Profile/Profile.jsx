
import { useContext, useEffect } from 'react'
import { LiaUserPlusSolid } from 'react-icons/lia'
import { PiLockKeyThin } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../components/Contexts/AppUserProvider'
import Icon from '../../components/Icon/Icon'
import Title from '../../components/Title/Title'
import routesConfig from '../../configs/routesConfig'
import { useTranslation } from 'react-i18next'

const Profile = () => {
  const {t} = useTranslation();
  const {user, userLoading} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(!userLoading){
      if(!Object.keys(user).length > 0){
        navigate(routesConfig.home)
      }
    } 
  },[user,userLoading]) 

  const items = [
    {
        name: t("Profile.information.title"),
        subName: t("Profile.information.subTitle"),
        icon: LiaUserPlusSolid,
        path: "/information",
        active: true,
    },
    {
        name: t("Profile.security.title"),
        subName: t("Profile.security.title"),
        icon: PiLockKeyThin,
        path: "/security",
        active: false,
    }
  ]

  return (
    <div className='w-full'>
    <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
      <div className='flex flex-col w-full gap-8'>
        <div className='flex flex-col gap-2'>
          <Title title={t("Profile.title")} fontBold extraLarge9/>
          <Title title={t("Profile.subTitle")} xxl/>
        </div>

        <div className='grid grid-cols-1 2md:grid-cols-2 gap-6'>
          {items.map((item,index) => (
            <Link to={routesConfig.profile+item.path} key={index} className='flex flex-row gap-2 hover:text-hotel-50 duration-200 w-full items-start border rounded-lg border-gray-200 p-4'>
              <Icon icon={item?.icon} size={24}/>
              <div className='flex flex-col items-start'>
                <Title title={item?.name} xxxl fontBold nowrap={false}/>
                <Title title={item?.subName} xl nowrap={false}/>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </div>        
  )
}

Profile.propTypes = {}

export default Profile

