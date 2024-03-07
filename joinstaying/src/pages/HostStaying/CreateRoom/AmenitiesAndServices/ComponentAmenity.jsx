import { AmenitiesData } from "../../../../components/Constants/AmenitiesData";
import Title from "../../../../components/Title/Title";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import useRegisterAmenityService from "../../../../hooks/JoinStaying/CreateRoom/AmenityService/useAmenityService";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import { getFacilities } from "../../../../api/HostStaying/FacilitiesHost";
import FacilitiesSkeleton from "../Amenities/FacilitiesSkeleton";
function ComponentAmenity() {
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { facilities, amenityServices, setField } = useRegisterAmenityService();

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
    <div>
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => <FacilitiesSkeleton key={index} />)
      ) : (
        <>
          <Title title="Amenities" fontBold xxl />
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
}

export default ComponentAmenity;
