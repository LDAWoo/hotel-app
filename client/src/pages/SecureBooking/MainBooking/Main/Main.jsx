import { Fragment } from "react";
import Panel from "../Aside/Panel/Panel";
import Account from "./Account/Account";
import YourDetails from "./YourDetails/YourDetails";
import GoodToKnow from "./GoodToKnow/GoodToKnow";
import QuantityRoomAndBath from "./QuantityRoomAndBath/QuantityRoomAndBath";
import AddToStay from "./AddToStay/AddToStay";
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
const items = [
  {
    component: Account,
    panel: true,
    data: [],
  },
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
  {
    component: QuantityRoomAndBath,
    panel: true,
    data: data,
  },
  {
    component: AddToStay,
    panel: true,
    data: [],
  },
];

function Main() {
  return (
    <main className='w-[65%] flex flex-col gap-4'>
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
    </main>
  );
}

export default Main;
