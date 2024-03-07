import { useContext, useEffect, useState } from "react";
import { getFacilities } from "../../../../api/HostStaying/FacilitiesHost";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import useRegisterFacilities from "../../../../hooks/JoinStaying/FacilitiesHost/useRegisterFacilities";
import ComponentExtraBed from "./ComponentExtraBed";
import FacilitiesSkeleton from "./FacilitiesSkeleton";
import Title from "../../../../components/Title/Title";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { useTranslation } from "react-i18next";

const ComponentAmenities = () => {
  const { t } = useTranslation();
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { facilities, amenityServices, setField } = useRegisterFacilities();

  useEffect(() => {
    const fetch = async () => {
      if (token && amenityServices.length === 0) {
        try {
          setLoading(true);
          const results = await getFacilities(token);
          setField("amenityServices", results);
          setLoading(false);
        } catch (error) {
          setLoading(true);
        }
      }
    };

    fetch();
  }, [token, amenityServices]);

  const handleChange = (e) => {
    const checkedFacilityId = e.target.value;
    const isFacilitySelected = facilities.some((facility) => facility.id === checkedFacilityId);

    if (isFacilitySelected) {
      setField(
        "facilities",
        facilities.filter((facility) => facility.id !== checkedFacilityId)
      );
    } else {
      setField("facilities", [...facilities, { id: checkedFacilityId }]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => <FacilitiesSkeleton key={index} />)
      ) : (
        <>
          <ComponentExtraBed />
          <Title title={t("HostStaying.CreateRoom.items.amenities.name")} fontBold xxl />
          {amenityServices &&
            amenityServices.map((item, index) => (
              <div key={index} className="flex flex-row gap-2">
                <Checkbox value={item?.id} title={item?.name} checked={facilities.some((f) => f?.id === item?.id)} onChange={handleChange} />
              </div>
            ))}
        </>
      )}
    </div>
  );
};

ComponentAmenities.propTypes = {};

export default ComponentAmenities;
