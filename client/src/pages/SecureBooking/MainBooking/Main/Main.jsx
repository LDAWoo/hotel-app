import { Fragment, useEffect, useState } from "react";
import Panel from "../Aside/Panel/Panel";
import Account from "./Account/Account";
import YourDetails from "./YourDetails/YourDetails";
import GoodToKnow from "./GoodToKnow/GoodToKnow";
import QuantityRoomAndBath from "./QuantityRoomAndBath/QuantityRoomAndBath";
import AddToStay from "./AddToStay/AddToStay";
import useRegisterSecureBooking from "../../../../hooks/SecureBooking/useRegisterSecureBooking";
import Button from "../../../../components/Buttons/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import useRegisterYourDetails from "../../../../hooks/SecureBooking/useRegisterYourDetails";
import SpecialRequests from "./SpecialRequests/SpecialRequests";
import YourArrival from "./YourArrival/YourArrival";
import useRegisterControl from "../../../../hooks/SecureBooking/useRegisterControl";
import useRegisterAddToStay from "../../../../hooks/SecureBooking/useRegisterAddToStay";
import useRegisterArrivalItem from "../../../../hooks/SecureBooking/useRegisterArrivalTime";
import { postBookingSessionInfo } from "../../../../api/Booking";
import useRegisterSpecialRequests from "../../../../hooks/SecureBooking/useRegisterSpecialRequests";
import { useNavigate } from "react-router-dom";
import routerConfig from '../../../../configs/routesConfig'
import { useTranslation } from "react-i18next";

function Main() {
  const { data,setData } = useRegisterSecureBooking();
  const {t} = useTranslation();

  const items = [
    // {
    //   component: Account,
    //   panel: true,
    //   data: [],
    // },
    {
      component: YourDetails,
      panel: true,
      data: data,
    },
    {
      component: GoodToKnow,
      panel: true,
      data: [],
    },
    // {
    //   component: QuantityRoomAndBath,
    //   panel: true,
    //   data: data,
    // },
    {
      component: AddToStay,
      panel: true,
      data: data,
    },
    {
      component: SpecialRequests,
      panel: true,
      data: data,
    },
    {
      component: YourArrival,
      panel: true,
      data: data,
    },
  ];

  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false);

  const { firstName, lastName, email, country, phoneNumber,validation } =
    useRegisterYourDetails();

  const { bookingForMe, businessTravel, electronicConfirm } =
    useRegisterControl();

  const { orderCar, orderTaxi, pickUpService } = useRegisterAddToStay();

  const { specialRequirements } = useRegisterSpecialRequests();

  const { estimatedCheckInTime } = useRegisterArrivalItem();

  const navigate = useNavigate()
  useEffect(() => {
    setDisabled(!validation)
  },[validation])

  const handleFinalStep = async () => {
    try {
      const updateData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        phoneNumber: phoneNumber,
        bookingForMe,
        businessTravel,
        electronicConfirm,
        orderCar,
        orderTaxi,
        pickUpService,
        specialRequirements,
        estimatedCheckInTime,
      };

      setLoading(true);
      const results = await postBookingSessionInfo(data?.jwtToken, updateData);
      setData(results);
      navigate(`${routerConfig.secureBooking}?token=${results?.jwtToken}&source=final`)
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
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
          title={t("Secure.Details.finalStep")}
          icon={MdKeyboardArrowRight}
          background
          size={24}
          className='pt-2 pb-2 w-full '
          classButton='flex justify-center items-center w-full'
          titlePosition='before'
          xxl
          fontMedium
          loading={loading}
          onClick={handleFinalStep}
          disabled={disabled || loading}
        />
      </div>
    </main>
  );
}

export default Main;
