import Title from "../../components/Title/Title";
import {Link} from 'react-router-dom'
import routesConfig from '../../configs/routesConfig'
import {useTranslation} from 'react-i18next'

function NotPage() {
    const {t} = useTranslation();
    return ( 
        <div className='w-full flex-1 flex'>
            <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 mb-10 p-[10px] bg-transparent'>
                <div className='flex flex-col w-full'>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col gap-1 items-center text-center w-full">
                                <Title title={t("NotPage.title")} fontBold className="text-[36px] 2md:text-[50px]"/>
                                <Title title={t("NotPage.subTitle")} xxl nowrap={false}/>
                                <Link to={routesConfig.home} className="underline text-hotel-50 hover:text-secondary-200 duration-150">{t("NotPage.goToHomePage")}</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
     );
}

export default NotPage;