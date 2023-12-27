import { Fragment } from "react";
import Panel from "../Aside/Panel/Panel";
import Account from "./Account/Account";
import YourDetails from "./YourDetails/YourDetails";
import GoodToKnow from "./GoodToKnow/GoodToKnow";

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
