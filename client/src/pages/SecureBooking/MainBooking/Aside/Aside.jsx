import { Fragment } from "react";
import BookingSummary from "./BookingSummary/BookingSummary";
import Panel from "./Panel/Panel";
import PriceSummary from "./PriceSummary/PriceSummary";
import PropertyDetail from "./PropertyDetail/PropertyDetail";

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
    component: PropertyDetail,
    panel: true,
    data: data,
  },
  {
    component: BookingSummary,
    panel: true,
    data: data,
  },
  {
    component: PriceSummary,
    panel: true,
    data: data,
  },
];

function Aside() {
  return (
    <aside className='w-[35%] flex flex-col gap-4'>
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
    </aside>
  );
}

export default Aside;
