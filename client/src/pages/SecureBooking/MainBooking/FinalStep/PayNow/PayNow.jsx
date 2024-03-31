import { useTranslation } from "react-i18next";
import Title from "../../../../../components/Title/Title";


const PayNow = () => {
    const {t} = useTranslation();
    return (
        <div className="flex flex-col gap-2">
            <Title title={t("Secure.Final.PayNow.title")} fontBold extraLarge5/>
            <Title title={t("Secure.Final.PayNow.subTitle")}  xl/>
        </div>
    )
}

export default PayNow;