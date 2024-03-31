import { useTranslation } from "react-i18next";
import Title from "../../../../../components/Title/Title";
import useRegisterSpecialRequests from "../../../../../hooks/SecureBooking/useRegisterSpecialRequests";
import { useEffect } from "react";
import PropTypes from 'prop-types'

const SpecialRequests = ({data}) => {
  const { specialRequirements, setField } = useRegisterSpecialRequests();
  const {t} = useTranslation();

  useEffect(() => {
    if(data){
      const keysToCheck = ["specialRequirements"];
      keysToCheck.forEach((key) => {
        if(data[key] != null){
          setField(key, data[key]);
        }
      });
    }
  },[data])
  
  const handleChange = (e) => {
    const value = e.target.value;
    setField("specialRequirements", value);
  };
  return (
    <div className='flex flex-col gap-2'>
      <Title title={t("Secure.Details.SpecialRequests.title")} fontBold extraLarge4 />
      <Title
        title={t("Secure.Details.SpecialRequests.subTitle")}
        xl
        nowrap={false}
      />
      <div className='flex flex-row gap-1'>
        <Title title={t("Secure.Details.SpecialRequests.writeRequest")} fontBold xl nowrap={false} />
        <Title title={t("Secure.Details.SpecialRequests.optional")} xl nowrap={false} />
      </div>
      <textarea
        value={specialRequirements}
        onChange={handleChange}
        className='duration-200 focus:outline-none shadow-[0_0_0_1px_rgba(24,25,26,.76)] focus:shadow-[0_0_0_2px_rgba(0,13,194,.76)] p-2 text-[14px] rounded-md '
      />
    </div>
  );
};

SpecialRequests.propTypes = {
  data: PropTypes.object
};

export default SpecialRequests;
