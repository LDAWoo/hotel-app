import { Fragment, useState } from "react";
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

const data = {
  hotelId: "123",
  hotelName: "The Hotel",
  addRess: "124 An Nhơn, Go Vap District , Ho Chi Minh City, Vietnam",
  checkIn: "2023-12-24",
  checkOut: "2023-12-26",
  adults: 2,
  nights: 2,
  children: 0,
  price: 2000000,
  rooms: 1,
};

function Main() {
  const { data } = useRegisterSecureBooking();

  const items = [
    // {
    //   component: Account,
    //   panel: true,
    //   data: [],
    // },
    {
      component: YourDetails,
      panel: true,
      data: [],
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
      data: [],
    },
    {
      component: SpecialRequests,
      panel: true,
      data: [],
    },
    {
      component: YourArrival,
      panel: true,
      data: [],
    },
  ];

  console.log(data);

  const [loading, setLoading] = useState(false);

  const { firstName, lastName, email, country, phoneNumber } =
    useRegisterYourDetails();

  const { bookingForMe, businessTravel, electronicConfirm } =
    useRegisterControl();

  const { orderCar, orderTaxi } = useRegisterAddToStay();

  const { specialRequirements } = useRegisterSpecialRequests();

  const { estimatedCheckInTime } = useRegisterArrivalItem();

  const handleFinalStep = async () => {
    try {
      const updateData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        phoneNumber: phoneNumber.number,
        bookingForMe,
        businessTravel,
        electronicConfirm,
        orderCar,
        orderTaxi,
        pickUpService: false,
        specialRequirements,
        estimatedCheckInTime,
      };

      setLoading(true);
      console.log(updateData);
      const res = await postBookingSessionInfo(data?.jwtToken, updateData);
      console.log(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <main className='w-[65%] flex flex-col gap-4'>
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
          title='Next: Final Step'
          icon={MdKeyboardArrowRight}
          background
          size={24}
          className='pt-2 pb-2 w-[300px] '
          classButton='flex justify-center items-center w-full'
          titlePosition='before'
          xxl
          fontMedium
          loading={loading}
          onClick={handleFinalStep}
          disabled={loading}
        />
      </div>
    </main>
  );
}

export default Main;
