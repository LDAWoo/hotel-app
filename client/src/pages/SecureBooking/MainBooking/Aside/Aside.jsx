import { Fragment } from "react";
import BookingSummary from "./BookingSummary/BookingSummary";
import Panel from "./Panel/Panel";
import PriceSummary from "./PriceSummary/PriceSummary";
import PropertyDetail from "./PropertyDetail/PropertyDetail";
import useRegisterSecureBooking from "../../../../hooks/SecureBooking/useRegisterSecureBooking";

function Aside() {
  const { data } = useRegisterSecureBooking();

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
