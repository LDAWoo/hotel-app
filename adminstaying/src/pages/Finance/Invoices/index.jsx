import Title from "../../../components/Title/Title";
import Button from "../../../components/Buttons/Button";
import { arrow } from "../../../assets/Icon";
import OutsideClickHandler from "react-outside-click-handler";
import { subMonths, format } from "date-fns";
import { useEffect, useState } from "react";

function Invoices() {
  const [months, setMonths] = useState([]);
  const [showMonth, setShowMonth] = useState(false);
  const currentMonth = new Date();

  const [state, setState] = useState({
    titleMonth: format(currentMonth, "MMMM yyyy"),
    valueMonth: format(currentMonth, "MM-yyyy"),
  });

  const { titleMonth, valueMonth } = state;

  const targetMonth = new Date(2023, 6);
  const numberOfMonths = Math.ceil((currentMonth - targetMonth) / (1000 * 60 * 60 * 24 * 30));

  useEffect(() => {
    const monthList = Array.from({ length: numberOfMonths }, (_, index) => {
      const previousMonth = subMonths(currentMonth, index);
      return { value: format(previousMonth, "MM-yyyy"), title: format(previousMonth, "MMMM yyyy") };
    });
    setMonths(monthList);
  }, []);

  const handleShowMonth = () => {
    setShowMonth(!showMonth);
  };

  const handleClick = (t, v) => {
    setState((prev) => ({ ...prev, titleMonth: t, valueMonth: v }));
    setShowMonth(false);
  };

  return (
    <div className="p-4 bg-white border rounded-sm">
      <div className="flex flex-col gap-4">
        <Title title="Invoices for reservation check-out period:" xxl fontBold nowrap={false} />
        <div className="relative flex">
          <OutsideClickHandler onOutsideClick={() => setShowMonth(false)}>
            <Button title={titleMonth} className="pt-[6px] pb-[6px] pl-2 pr-2" border icon={arrow} titlePosition="before" classIcon="text-hotel-75" onClick={handleShowMonth} />
            {showMonth && (
              <div className="absolute left-0 min-w-[12rem] top-full bg-white z-[200] shadow-[0_6px_10px_0_rgba(0,0,0,.14),0_3px_18px_0_rgba(0,0,0,.12),0_3px_5px_-1px_rgba(0,0,0,.2)]">
                <ul className="max-h-[250px] overflow-auto list-none m-0 p-0 bg-white">
                  {months.map((m, index) => (
                    <li key={index}>
                      <Button onClick={() => handleClick(m.title, m.value)} title={m.title} className="relative block m-0 bg-transparent min-w-full pl-2 hover:bg-gray-100 duration-200 pr-2 pt-3 pb-3 whitespace-nowrap text-[14px] cursor-pointer text-left" />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </OutsideClickHandler>
        </div>

        <Title title="Invoices are calculated based on the reservation check-out date. This statement does not include payments you'll receive from Staying.com." xl nowrap={false} />
      </div>
    </div>
  );
}

export default Invoices;
