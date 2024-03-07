import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineCheck } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import Icon from "../../../components/Icon/Icon";
import Title from "../../../components/Title/Title";
import routesConfig from "../../../configs/routesConfig";
import useRegisterCreateRoom from "../../../hooks/JoinStaying/CreateRoom/useRegisterCreateRoom";
import Amenities from "./Amenities/Amenities";
import BasicInformation from "./BasicInformation/BasicInformation";
import CompositionAndPrice from "./CompositionAndPrice/CompositionAndPrice";
import ConfirmHotel from "./ConfirmHotel/ConfirmHotel";
import PaymentMode from "./PaymentMode/PaymentMode";
import PhotoHotel from "./PhotoHotel/PhotoHotel";
import Policies from "./Policies/Policies";
const CreateRoom = () => {
  const { t } = useTranslation();
  const { completeInformation, completeComposition, completeAmenities, completePhoto, completePolicies, completePayment, completeConfirm } = useRegisterCreateRoom();

  const items = [
    {
      source: "information",
      name: t("HostStaying.CreateRoom.items.information.name"),
      complete: completeInformation,
    },
    {
      source: "composition",
      name: t("HostStaying.CreateRoom.items.composition.name"),
      complete: completeComposition,
    },
    {
      source: "amenities",
      name: t("HostStaying.CreateRoom.items.amenities.name"),
      complete: completeAmenities,
    },
    {
      source: "photos",
      name: t("HostStaying.CreateRoom.items.photo.name"),
      complete: completePhoto,
    },
    {
      source: "policies",
      name: t("HostStaying.CreateRoom.items.policies.name"),
      complete: completePolicies,
    },
    {
      source: "payment",
      name: t("HostStaying.CreateRoom.items.payment.name"),
      complete: completePayment,
    },
    {
      source: "confirm",
      name: t("HostStaying.CreateRoom.items.confirm.name"),
      complete: completeConfirm,
    },
  ];

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSource = searchParams.get("source");
  const sessionToken = searchParams.get("token");
  const [flag, setFlag] = useState(false);
  const [currentSourceCreator, setCurrentSourceCreator] = useState("");
  const lastCompleteIndex = items
    .slice()
    .reverse()
    .findIndex((item) => item.complete);

  const lastIndex = lastCompleteIndex !== -1 ? items.length - 1 - lastCompleteIndex : -1;

  useEffect(() => {
    const [firstIncompleteItem] = items.filter((item) => item.complete);

    if (!firstIncompleteItem) {
      setCurrentSourceCreator(items[0].source);
      return;
    }

    if (!flag) {
      setCurrentSourceCreator(items[lastIndex + 1].source);
      setFlag(true);
    }
  }, [lastIndex, flag, currentSourceCreator]);

  const handleApplyListing = (src, index) => {
    if (index - 1 > lastIndex) return;
    setCurrentSourceCreator(src);
  };

  useEffect(() => {
    navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=${currentSourceCreator}`}`);
  }, [navigate, currentSourceCreator, sessionToken]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="max-w-[var(--max-width)] overflow-hidden flex-1 ">
        <div className="flex-1">
          <div className="flex flex-row min-w-full flex-1 items-center gap-[2px] overflow-x-auto pl-4 pr-4">
            {items.map((item, index) => (
              <div key={index} className="gap-[2px] text-center justify-center h-full flex flex-col w-full cursor-pointer" onClick={() => handleApplyListing(item?.source, index)}>
                <div className={`${item.source === currentSource ? "bg-gray-100" : ""} flex justify-center items-center pt-3 pb-3 pr-3 pl-3 min-w-[140px] h-[60px]`}>
                  <div className="flex flex-row justify-center text-center items-center gap-[3px]">
                    {item?.complete && <Icon icon={MdOutlineCheck} size={20} />}

                    <Title title={item?.name} xl nowrap={false} />
                  </div>
                </div>

                <span className={` ${item?.complete || item.source === currentSource ? "bg-hotel-50 " : "bg-gray-200"} w-full h-1 rounded-md`}></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {currentSource === "information" && <BasicInformation />}
        {currentSource === "composition" && <CompositionAndPrice />}
        {currentSource === "amenities" && <Amenities />}
        {currentSource === "photos" && <PhotoHotel />}
        {currentSource === "policies" && <Policies />}
        {currentSource === "payment" && <PaymentMode />}
        {currentSource === "confirm" && <ConfirmHotel />}
      </div>
    </div>
  );
};

CreateRoom.propTypes = {};

export default CreateRoom;
