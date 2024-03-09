import Title from "../../../../../components/Title/Title";
import useRegisterSpecialRequests from "../../../../../hooks/SecureBooking/useRegisterSpecialRequests";

const SpecialRequests = () => {
  const { specialRequirements, setField } = useRegisterSpecialRequests();

  const handleChange = (e) => {
    const value = e.target.value;
    setField("specialRequirements", value);
  };
  return (
    <div className='flex flex-col gap-2'>
      <Title title='Special Requests' fontBold extraLarge4 />
      <Title
        title="Special requests can't be guaranteed, but the property will do its best to meet your needs. You can always make a special request after your booking is complete."
        xl
        nowrap={false}
      />
      <div className='flex flex-row gap-1'>
        <Title title='Please write your requests.' fontBold xl nowrap={false} />
        <Title title='(optional)' xl nowrap={false} />
      </div>
      <textarea
        value={specialRequirements}
        onChange={handleChange}
        className='focus:outline-none shadow-[0_0_0_2px_rgba(0,13,194,.76)] p-2 text-[14px] rounded-md '
      />
    </div>
  );
};

SpecialRequests.propTypes = {};

export default SpecialRequests;
