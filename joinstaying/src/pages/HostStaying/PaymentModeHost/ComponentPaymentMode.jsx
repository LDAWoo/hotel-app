import { PaymentMdeData } from "../../../components/Constants/PaymentModeData";
import Title from "../../../components/Title/Title";
import RadioInput from "../../../components/RadioInput/RadioInput";

const ComponentPaymentMode = () => {
  return (
    <div>
      {PaymentMdeData.map((payment, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <Title title={payment?.title} xxl fontBold nowrap={false} />
          <Title title={payment?.subTitle} xl nowrap={false} />

          {payment?.type === "radio" && payment?.data && (
            <div className='flex flex-col gap-2'>
              {payment?.data.map((item, index) => (
                <RadioInput
                  key={index}
                  id={index}
                  name={item?.name}
                  title={item?.title}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ComponentPaymentMode;
