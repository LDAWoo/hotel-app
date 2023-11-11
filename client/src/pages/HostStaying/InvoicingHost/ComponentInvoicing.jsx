import { InvoicingData } from "../../../components/Constants/InvoicingData";
import Title from "../../../components/Title/Title";
import RadioInput from "../../../components/RadioInput/RadioInput";
import Border from "../../../components/Border/Border";
import { useReducer } from "react";
import TextInput from "../../../components/TextInput/TextInput";
import InvoicingRecipientAddRess from "./InvoicingRecipientAddRess";

const initialState = InvoicingData.map((invoicing) => ({
  id: invoicing.id,
  selectedValue: null,
  title: null,
}));

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_OPTION":
      return state.map((invoicing) =>
        invoicing.id === action.id
          ? { ...invoicing, selectedValue: action.value, title: action.title }
          : invoicing,
      );
    default:
      return state;
  }
};

const ComponentInvoicing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (id, value, title) => {
    dispatch({ type: "SELECT_OPTION", id, value, title });
  };

  console.log(initialState);

  return (
    <div>
      <div>
        <Title
          title='At the beginning of each month we will send you an invoice for all complete bookings in the previous month.'
          xl
          nowrap={false}
          className='dark:text-primary-50'
        />
      </div>
      {InvoicingData.map((invoicing, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <Title title={invoicing?.title} xxl fontBold nowrap={false} />
          {invoicing?.type === "radio" && invoicing?.data && (
            <div className='flex flex-col gap-2'>
              {invoicing?.data.map((item, index) => (
                <div key={index}>
                  <RadioInput
                    id={item?.value}
                    value={item?.value}
                    name={item?.name}
                    title={item?.title}
                    //   isChecked={item?.checked}
                    onChange={() =>
                      handleChange(invoicing.id, item?.value, item?.title)
                    }
                  />

                  {state[0].selectedValue === "legal_company" &&
                    item?.value === "legal_company" && (
                      <div className='flex flex-col gap-2 mt-4'>
                        <Title title={item?.title} xl fontBold />
                        <TextInput
                          className={`mb-5 w-full`}
                          classBorder='border border-primary-100 rounded-sm'
                          classInput='w-full focus:outline-none placeholder:text-[14px] text-[14px] border-[1px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] border-transparent focus:border-hotel-75 dark:focus:border-hotel-500 dark:bg-primary-700 dark:text-white'
                        />
                      </div>
                    )}

                  {state[1].selectedValue === "no" &&
                    item?.value === "no" &&
                    item?.data && (
                      <InvoicingRecipientAddRess data={item?.data} />
                    )}
                </div>
              ))}
            </div>
          )}
          {index !== InvoicingData.length - 1 && <Border className='mt-4' />}
        </div>
      ))}
    </div>
  );
};

export default ComponentInvoicing;
