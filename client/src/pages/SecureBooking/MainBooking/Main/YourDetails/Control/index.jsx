import { useTranslation } from "react-i18next";
import Checkbox from "../../../../../../components/Checkbox/Checkbox";
import RadioInput from "../../../../../../components/RadioInput/RadioInput";
import Title from "../../../../../../components/Title/Title";
import useRegisterControl from "../../../../../../hooks/SecureBooking/useRegisterControl";
import { useEffect } from "react";
import PropTypes from 'prop-types'

function Control({data}) {
  const { bookingForMe, businessTravel, electronicConfirm, setField } =
    useRegisterControl();
    const {t} = useTranslation();

  useEffect(() => {
    if(data){
      const keysToCheck = ["bookingForMe", "businessTravel", "electronicConfirm"];
      keysToCheck.forEach((key) => {
        if(data[key] != null){
          setField(key, data[key]);
        }
      });
    }
  },[data])

  const bookingFor = [
    {
      id: "notstayer_false",
      name: "whoAreYouBookingFor",
      title: t("Secure.Details.YourDetails.WhoBookingFor.items.item1"),
      checked: true,
    },
    {
      id: "notstayer_true",
      name: "whoAreYouBookingFor",
      title: t("Secure.Details.YourDetails.WhoBookingFor.items.item2"),
      checked: false,
    },
  ];

  const travelling = [
    {
      id: "areYouTravellingForWork_true",
      name: "areYouTravellingForWork",
      title: t("Secure.Details.YourDetails.TravelingForWorks.items.item1"),
      checked: true,
    },
    {
      id: "areYouTravellingForWork_false",
      name: "areYouTravellingForWork",
      title: t("Secure.Details.YourDetails.TravelingForWorks.items.item2"),
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
          title={t("Secure.Details.YourDetails.paperless")}
          value={electronicConfirm}
          name='confirmation'
          onChange={handleChangeConfirm}
          key='confirmation'
        />
        <Title title={t("Secure.Details.YourDetails.linkToDownload")} large />
      </div>
      <div>
        <Title title={t("Secure.Details.YourDetails.WhoBookingFor.title")} fontBold xl />
        {bookingFor.map((x, index) => (
          <div key={index}>
            <div className='flex flex-col gap-0'>
              <RadioInput
                id={x?.id}
                title={x?.title}
                name={x?.name}
                value={x?.checked}
                isChecked={x?.checked === bookingForMe}
                onChange={() => handleChangeBookingFor(x?.checked)}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Title title={t("Secure.Details.YourDetails.TravelingForWorks.title")} fontBold xl />
        {travelling.map((x, index) => (
          <div key={index}>
            <div className='flex flex-col gap-0'>
              <RadioInput
                id={x?.id}
                title={x?.title}
                name={x?.name}
                value={x?.checked}
                isChecked={x?.checked === businessTravel}
                onChange={() => handleChangeTravelling(x?.checked)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Control.propTypes = {
  data: PropTypes.object,
}

export default Control;
