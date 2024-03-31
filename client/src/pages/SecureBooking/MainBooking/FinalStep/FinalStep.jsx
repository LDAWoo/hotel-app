import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { postBookingSessionConfirm } from "../../../../api/Booking";
import Button from "../../../../components/Buttons/Button";
import routesConfig from "../../../../configs/routesConfig";
import useRegisterSecureBooking from "../../../../hooks/SecureBooking/useRegisterSecureBooking";
import useRegisterWantPay from "../../../../hooks/SecureBooking/useRegisterWantPay";
import Panel from "../Aside/Panel/Panel";
import PayNow from "./PayNow/PayNow";
import WantPay from "./WantPay/WantPay";
const FinalStep = () => {
    const [loading, setLoading] = useState(false)
    const {receiveMarketingEmail} = useRegisterWantPay()
    const { data } = useRegisterSecureBooking();
    const navigate = useNavigate()
    const {t} = useTranslation();

    const items = [
        {
          component: PayNow,
          panel: true,
          data: [],
        },
        {
            component: WantPay,
            panel: true,
            data: [],
        }
     
      ];

      const handleComplete = async() => {

        const updateData = {
            receiveMarketingEmail
        }

        try {
            setLoading(true)
            await postBookingSessionConfirm(data.jwtToken, updateData)
            setLoading(false)
            navigate(`${routesConfig.successfully}?token=${data.jwtToken}`)
        } catch (error) {
            setLoading(false)
        }
      }

    return (
        <main className='w-full mt-[80px] 2md:mt-0 2md:w-[65%] flex flex-col gap-4'>
      <>
        {items.map((item, index) => {
          const Component = item?.component;
          const isPanel = item?.panel;
          return (
            <Fragment key={index}>
              {isPanel ? (
                <Panel>
                  <Component data={item?.data} />
                </Panel>
              ) : (
                <Component data={item?.data} />
              )}
            </Fragment>
          );
        })}
      </>
      <div className='float-right w-full flex flex-row justify-between'>
        <div></div>
        <Button
          title={t("Secure.Final.CompleteBooking")}
          icon={MdKeyboardArrowRight}
          background
          size={24}
          className='pt-2 pb-2 w-full '
          classButton='flex justify-center items-center w-full'
          titlePosition='before'
          xxl
          fontMedium
          loading={loading}
          onClick={handleComplete}
          disabled={loading}
        />
      </div>
    </main>
    )
}

export default FinalStep;