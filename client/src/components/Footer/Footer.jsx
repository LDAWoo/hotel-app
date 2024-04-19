import Button from '../Buttons/Button'
import Border from '../Border/Border'
import Title from '../Title/Title'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import routesConfig from '../../configs/routesConfig'

function Footer() {
    const {t} = useTranslation()

    const items = [
        {
            name: t("AccessFooter.items.item1"),
            link: "/terms-and-conditions"
        },
        {
            name: t("AccessFooter.items.item2"),
            link: "/how-we-work"
        },
        {
            name: t("AccessFooter.items.item3"),
            link: "/privacy-policy"
        },
        {
            name: t("AccessFooter.items.item4"),
            link: "/msa-statement"
        },
        {
            name: t("AccessFooter.items.item5"),
            link: "/about-staying-com"
        }
    ]

    const handleJoinStaying = () =>{
        window.open(
            routesConfig.join,
            "_blank",
          )
    }

    return ( 
        <footer className="w-full">
            <div className='relative'>
                <div className='flex flex-col relative w-full bg-hotel-600'>
                    <div className='flex items-center justify-center p-4'>
                        <div>
                            <Button 
                            onClick={handleJoinStaying}
                            xl
                            className="p-[6px_8px_6px_8px] text-hotel-50 bg-hotel-25 rounded-sm hover:opacity-90 duration-200"
                            title={t("ListYourProperties.listYourProperties")}/>   
                        </div> 
                    </div>

                    <Border />

                    <div className='p-4 flex items-center w-full justify-center gap-2 text-center'>
                        <div className='block'>
                            {
                                items.map((item,index) => (
                                    <Link key={index} to={item.link} className='p-2 text-white inline-block underline items-center justify-center'>
                                        <div className='flex flex-col items-start'>
                                            <Title title={item?.name} xl fontBold/>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className='p-[0_4px_12px_4px] flex items-center justify-center text-white text-center'>
                        <Title xl title={`${t("AccessFooter.nameTwo")}. ${t("AccessFooter.nameOne")}`} nowrap={false}/>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;