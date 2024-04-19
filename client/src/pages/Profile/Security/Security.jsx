import SideBar from '../SideBar/SideBar'
import Title from '../../../components/Title/Title'
import { useContext, useState } from 'react'
import Button from '../../../components/Buttons/Button'
import { UserContext } from '../../../components/Contexts/AppUserProvider'
import { postUserForgot } from '../../../api/User/Forgot'
import { useTranslation } from 'react-i18next'

const Security = () => {
    const {t} = useTranslation()
    const {user} = useContext(UserContext);
    const [active, setActive] = useState("")
    const [loading, setLoading] = useState(false)
    const [resetEmail, setResetEmail] = useState({
        email: "",
        active: false,
    })

    const items = [
        {
            Title: t("Profile.security.password"),
            current: resetEmail.active ? t("Profile.security.confirmPassword") : t("Profile.security.resetPassword"),
            value: resetEmail?.email,
            menu: [
                {
                    title: t("Profile.security.changePassword"),
                    typeof: "text",
                },
               
            ],
            disabled: resetEmail.active,
            active: "password",
            type:"Reset",
            cancel: t("Profile.security.cancel"), 
            action: t("Profile.security.reset"),
            submit: t("Profile.security.sendEmail"),
        },

    ]    

    const handleActive = (ac) => {
        setActive(ac)
    }

    const handleCancel = () => {
        setActive("")
    }

    const handleSummit = async(item) => {
        const email = user?.email;

        if(item.type === "Reset") {
            try {
                setLoading(true)
                await postUserForgot(user.email);
                setResetEmail({
                    email,
                    active: true,
                })
                setActive("")
                setLoading(false)
            } catch (error) {
                setLoading(true)
            }
        }
    }

    
    return (
        <div className='w-full flex-1'>
                <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 mb-10 p-[10px] bg-transparent'>
                    <div className='flex flex-row w-full'>
                        <SideBar/>

                        <div className='flex flex-col w-full'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col gap-2'>
                                    <Title title={t("Profile.security.title")} fontBold extraLarge9 nowrap={false}/>
                                    <Title title={t("Profile.security.subTitle")} xxl nowrap={false}/>
                                </div>
                            </div>

                            <div>
                            {items.map((item,index) => (
                                <div key={index} className={`flex flex-row justify-between p-[16px_0_16px_0] ${index === 0 ? 'border-t' : ''}  border-b`}>
                                    <div className='flex flex-row items-start w-full gap-4'>
                                        <div className="w-[146px]">
                                            <Title title={item?.Title} xxl nowrap={false}/>
                                        </div>
                                        {
                                            active === item?.active 
                                            ? 
                                            <div className='flex flex-row items-center gap-4 w-full mr-8'>
                                                {
                                                    item?.menu.map((menuItem,index) => (
                                                        <div key={index} className='flex flex-col gap-1 w-full'>
                                                            {menuItem.typeof === "text"
                                                            &&  <div>
                                                                <Title title={menuItem.title} xxl nowrap={false}/>
                                                            </div>}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            : 
                                            <div className='w-full flex flex-row gap-1 items-center'>
                                                <Title title={item?.current} xxl />
                                                {item?.value && <Title title={item?.value} xxl fontBold/>}
                                            </div>
                                        }
                                    </div>

                                    <div className='flex flex-col items-end gap-8'>
                                        {
                                            active === item?.active
                                            ? 
                                            <>
                                                <Button title={item?.cancel} disabled={loading} className={` rounded-sm duration-200 p-1 ${loading ? 'cursor-not-allowed text-gray-500 bg-transparent' : "text-hotel-50  hover:bg-hotel-25"}`} xl fontMedium onClick={() => handleCancel(item?.active)}/>
                                                <Button title={item?.submit} disabled={loading} loading={loading} classLoading="h-[16px] w-[16px]" background className="p-1 rounded-sm" classButton="w-full justify-center" xl fontMedium onClick={() => handleSummit(item)}/>
                                            </> 
                                            :
                                            <>{!item?.disabled && <Button title={item?.action} disabled={active.length > 0 && active != item?.active} className={` p-2 rounded-sm duration-200 ${active.length > 0 && active != item?.active ? 'cursor-not-allowed text-gray-500 bg-transparent' : 'text-hotel-50 hover:bg-hotel-25'}`} xl fontMedium onClick={() => handleActive(item?.active)}/>}</>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

Security.propTypes = {

}

export default Security
