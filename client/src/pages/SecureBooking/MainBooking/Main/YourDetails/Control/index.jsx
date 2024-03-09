import Checkbox from "../../../../../../components/Checkbox/Checkbox";
import RadioInput from "../../../../../../components/RadioInput/RadioInput";
import Title from "../../../../../../components/Title/Title";
import useRegisterControl from "../../../../../../hooks/SecureBooking/useRegisterControl";

function Control() {
  const { bookingForMe, businessTravel, electronicConfirm, setField } =
    useRegisterControl();

  const bookingFor = [
    {
      id: "notstayer_false",
      name: "whoAreYouBookingFor",
      title: "I am the main guest",
      checked: true,
    },
    {
      id: "notstayer_true",
      name: "whoAreYouBookingFor",
      title: "Booking is for someone else",
      checked: false,
    },
  ];

  const travelling = [
    {
      id: "yes",
      name: "areYouTravellingForWork",
      title: "Yes",
      checked: true,
    },
    {
      id: "no",
      name: "areYouTravellingForWork",
      title: "No",
      checked: false,
    },
  ];

  const handleChangeBookingFor = (isChecked) => {
    setField("bookingForMe", isChecked);
  };

  const handleChangeTravelling = (isChecked) => {
    setField("businessTravel", isChecked);
  };

  const handleChangeConfirm = () => {
    setField("electronicConfirm", !electronicConfirm);
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
        <Checkbox
          checked={electronicConfirm}
          title='Yes, I want free paperless confirmation (recommended)'
          value={electronicConfirm}
          name='confirmation'
          onChange={handleChangeConfirm}
          key='confirmation'
        />
        <Title title="We'll text you a link to download our app" large />
      </div>
      <div>
        <Title title='Who are you booking for?' fontBold xl />
        {bookingFor.map((x, index) => (
          <div key={index}>
            <div className='flex flex-col gap-0'>
              <RadioInput
                id={x?.id}
                title={x?.title}
                name={x?.name}
                value={x?.checked}
                isChecked={bookingForMe}
                onChange={() => handleChangeBookingFor(x?.checked)}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Title title='Are you traveling for work?' fontBold xl />
        {travelling.map((x, index) => (
          <div key={index}>
            <div className='flex flex-col gap-0'>
              <RadioInput
                id={x?.id}
                title={x?.title}
                name={x?.name}
                value={x?.checked}
                isChecked={businessTravel}
                onChange={() => handleChangeTravelling(x?.checked)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Control;
