import Title from "../../../../../components/Title/Title";
import CheckBox from "../../../../../components/CheckBox/CheckBox";
import useRegisterWantPay from "../../../../../hooks/SecureBooking/useRegisterWantPay";
import { useTranslation } from "react-i18next";

const WantPay = () => {
    const {receiveMarketingEmail, setField} = useRegisterWantPay()
    const {t} = useTranslation()

    const handleChecked = () => {
        setField("receiveMarketingEmail", !receiveMarketingEmail)
    }
    return (
        <div className="flex flex-col gap-2">
            <Title title={t("Secure.Final.WantToPay.title")} fontBold extraLarge5/>


            <div>
                {/* items pay with ... */}
            </div>

            <div>
                <CheckBox name="receiveMarketingEmail" key="receiveMarketingEmail" value={receiveMarketingEmail} checked={receiveMarketingEmail} onChange={handleChecked} 
                title={t("Secure.Final.WantToPay.items.item1")}/>
            </div>

        </div>
    )
}

export default WantPay;