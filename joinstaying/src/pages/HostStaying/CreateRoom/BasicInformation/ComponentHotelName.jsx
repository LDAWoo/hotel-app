import PropTypes from "prop-types";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { validateName } from "../../../../Regexs/Validate";
import Star from "../../../../components/Star/Start";
import TextError from "../../../../components/TextError/TextError";
import TextInput from "../../../../components/TextInput/TextInput";
import Title from "../../../../components/Title/Title";
import useRegisterHotelName from "../../../../hooks/JoinStaying/HotelNameHost/useRegisterHotelName";

const ComponentHotelName = () => {
  const { t } = useTranslation();

  const ratings = [
    {
      id: 1,
      name: "rating",
      title: t("HostStaying.CreateRoom.items.information.information.ratings.star0"),
      value: 0,
    },
    {
      id: 2,
      name: "rating",
      title: `1 ${t("HostStaying.CreateRoom.items.information.information.ratings.star")}`,
      value: 1,
    },
    {
      id: 3,
      name: "rating",
      title: `2 ${t("HostStaying.CreateRoom.items.information.information.ratings.star")}`,
      value: 2,
    },
    {
      id: 4,
      name: "rating",
      title: `3 ${t("HostStaying.CreateRoom.items.information.information.ratings.star")}`,
      value: 3,
    },
    {
      id: 5,
      name: "rating",
      title: `4 ${t("HostStaying.CreateRoom.items.information.information.ratings.star")}`,
      value: 4,
    },
    {
      id: 6,
      name: "rating",
      title: `5 ${t("HostStaying.CreateRoom.items.information.information.ratings.star")}`,
      value: 5,
    },
  ];

  const managerHotels = [
    {
      id: "yes",
      name: "managerHotel",
      title: t("HostStaying.CreateRoom.items.information.information.multipleHotel.yes"),
      value: true,
    },
    {
      id: "no",
      name: "managerHotel",
      title: t("HostStaying.CreateRoom.items.information.information.multipleHotel.no"),
      value: false,
    },
  ];

  const { hotelName, errorHotelName, contactPerson, errorContactPerson, phoneNumberOne, errorPhoneNumberOne, phoneNumberTwo, errorPhoneNumberTwo, rating, managerHotel, setField } = useRegisterHotelName();

  const handleChangeHotelName = (value) => {
    setField("hotelName", value);
  };

  const handleChangeContractPerson = (value) => {
    setField("contactPerson", value);
  };

  const handleChangePhoneNumberOne = (value) => {
    setField("phoneNumberOne", value);
  };

  const handleChangePhoneNumberTwo = (value) => {
    setField("phoneNumberTwo", value);
  };

  const handleCheckedRating = (value) => {
    setField("rating", value);
  };

  const handleCheckedManagerHotel = (value) => {
    setField("managerHotel", value);
  };

  const onKeyDownName = (e, value) => {
    if (!validateName(e.key)) {
      e.preventDefault();
    } else if (e.key === " " && value.trim() === "") {
      e.preventDefault();
    }
  };

  const onKeyDownPhone = (e) => {
    const key = e.key;

    if (!(key >= "0" && key <= "9") && key !== "Backspace") {
      e.preventDefault();
    }
  };

  const StarRating = ({ value }) => {
    const stars = [];

    for (let i = 0; i < value; i++) {
      stars.push(<Star key={i} size={20} className="gap-0" />);
    }

    return <div className="flex flex-row">{stars}</div>;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Title title={t("HostStaying.CreateRoom.items.information.information.hotelName")} fontBold xl nowrap={false} />

        <div className="flex flex-col gap-1 ">
          <div className="flex flex-col w-full">
            <TextInput type="text" className="w-full" value={hotelName} error={errorHotelName ? errorHotelName.length > 0 : ""} sizeIcon={20} onChange={(e) => handleChangeHotelName(e.target.value)} onKeyDown={(e) => onKeyDownName(e, hotelName)} />
            <TextError error={errorHotelName} />
          </div>
          <Title title={t("HostStaying.CreateRoom.items.information.information.subHotelName")} large xl />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Title title={t("HostStaying.CreateRoom.items.information.information.contactPerson")} fontBold xl nowrap={false} />

        <div className="flex flex-col gap-1">
          <div className="flex flex-col w-full">
            <TextInput type="text" className="w-full" value={contactPerson} error={errorContactPerson ? errorContactPerson.length > 0 : ""} sizeIcon={20} onChange={(e) => handleChangeContractPerson(e.target.value)} onKeyDown={(e) => onKeyDownName(e, contactPerson)} />
            <TextError error={errorContactPerson} />
          </div>
          <Title title={t("HostStaying.CreateRoom.items.information.information.subContactPerson")} large xl />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Title title={t("HostStaying.CreateRoom.items.information.information.phoneNumber")} fontBold xl nowrap={false} />

        <div className="flex flex-col gap-1">
          <div className="flex flex-col w-full">
            <TextInput type="text" className="w-full" min={0} value={phoneNumberOne} error={errorPhoneNumberOne ? errorPhoneNumberOne.length > 0 : ""} sizeIcon={20} onChange={(e) => handleChangePhoneNumberOne(e.target.value)} onKeyDown={(e) => onKeyDownPhone(e)} />
            <TextError error={errorPhoneNumberOne} />
          </div>
          <Title title={t("HostStaying.CreateRoom.items.information.information.subPhoneNumber")} large xl />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Title title={t("HostStaying.CreateRoom.items.information.information.otherPhoneNumber")} fontBold xl nowrap={false} />

        <div className="flex flex-col gap-1">
          <div className="flex flex-col w-full">
            <TextInput type="text" className="w-full" min={0} value={phoneNumberTwo} error={errorPhoneNumberTwo ? errorPhoneNumberTwo.length > 0 : ""} sizeIcon={20} onChange={(e) => handleChangePhoneNumberTwo(e.target.value)} onKeyDown={(e) => onKeyDownPhone(e)} />
            <TextError error={errorPhoneNumberTwo} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Title title={t("HostStaying.CreateRoom.items.information.information.nameRanting")} fontBold xl nowrap={false} />

        {ratings.map((r, index) => (
          <label key={index} className="flex flex-row items-center gap-1 text-[14px] cursor-pointer w-full" htmlFor={r?.id}>
            <input type="radio" name={r?.name} className="w-4 h-4 mr-[8px] cursor-pointer dark:bg-primary-700" value={r?.value} checked={r?.value === rating} id={r?.id} onChange={() => handleCheckedRating(r?.value)} />
            {r?.title}
            <StarRating value={r?.value} />
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <Title title={t("HostStaying.CreateRoom.items.information.information.nameMultipleHotel")} fontBold xl nowrap={false} />

        {managerHotels.map((m, index) => (
          <label key={index} className="flex flex-row items-center gap-1 text-[14px] cursor-pointer w-full" htmlFor={m?.id}>
            <input type="radio" name={m?.name} className="w-4 h-4 mr-[8px] cursor-pointer dark:bg-primary-700" value={m?.value} checked={m?.value === managerHotel} id={m?.id} onChange={() => handleCheckedManagerHotel(m?.value)} />
            {m?.title}
          </label>
        ))}
      </div>
    </div>
  );
};

ComponentHotelName.propTypes = {
  value: PropTypes.number,
};

export default memo(ComponentHotelName);
