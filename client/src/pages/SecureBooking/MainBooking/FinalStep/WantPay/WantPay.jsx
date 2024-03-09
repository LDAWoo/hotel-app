import Title from "../../../../../components/Title/Title";
import CheckBox from "../../../../../components/CheckBox/CheckBox";
import useRegisterWantPay from "../../../../../hooks/SecureBooking/useRegisterWantPay";

const WantPay = () => {

    const {receiveMarketingEmail, setField} = useRegisterWantPay()


    const handleChecked = () => {
        setField("receiveMarketingEmail", !receiveMarketingEmail)
    }
    return (
        <div className="flex flex-col gap-2">
            <Title title="How do you want to pay?" fontBold extraLarge5/>


            <div>
                {/* items pay with ... */}
            </div>

            <div>
                <CheckBox name="receiveMarketingEmail" key="receiveMarketingEmail" value={receiveMarketingEmail} checked={receiveMarketingEmail} onChange={handleChecked} title="I consent to receiving marketing emails from Booking.com, including promotions, rewards, travel experiences, and information about Booking.com’s products and services."/>
            </div>



        </div>
    )
}

export default WantPay;