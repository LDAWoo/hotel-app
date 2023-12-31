import { useContext, useEffect, useState } from "react";
import { getFacilities } from "../../../api/HostStaying/FacilitiesHost";
import CheckBox from "../../../components/Checkbox/Checkbox";
import { UseToken } from "../../../components/Contexts/AppTokenProvider";
import useRegisterFacilities from "../../../hooks/JoinStaying/FacilitiesHost/useRegisterFacilities";
import FacilitiesSkeleton from "./FacilitiesSkeleton";
import ComponentExtraBed from "./ComponentExtrabed";
import Title from "../../../components/Title/Title";

function ComponentFacilities() {
  const { token } = useContext(UseToken);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { facilities, setFacilities } = useRegisterFacilities();

  useEffect(() => {
    const fetch = async () => {
      if (token) {
        try {
          const results = await getFacilities(token);
          setData(results?.listResult);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetch();
  }, [token]);

  const handleChange = (e) => {
    const checkedFacilityId = e.target.value;
    const isFacilitySelected = facilities.some(
      (facility) => facility.id === checkedFacilityId,
    );

    if (isFacilitySelected) {
      setFacilities(
        facilities.filter((facility) => facility.id !== checkedFacilityId),
      );
    } else {
      setFacilities([...facilities, { id: checkedFacilityId }]);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <FacilitiesSkeleton key={index} />
        ))
      ) : (
        <>
          <ComponentExtraBed />
          <Title title='Tiện nghi' fontBold xxl />
          {data &&
            data.map((item, index) => (
              <div key={index} className='flex flex-row gap-2'>
                <CheckBox
                  value={item?.id}
                  title={item?.name}
                  onChange={handleChange}
                />
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default ComponentFacilities;
