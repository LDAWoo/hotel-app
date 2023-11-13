import { FacilitiesHostData } from "../../../components/Constants/FacilitiesHostData";
import CheckBox from "../../../components/Checkbox/Checkbox";
import { useContext, useEffect, useState } from "react";
import { getFacilities } from "../../../api/HostStaying/FacilitiesHost";
import { UseToken } from "../../../components/Contexts/AppTokenProvider";
import FacilitiesSkeleton from "./FacilitiesSkeleton";

function ComponentFacilities() {
  const [facilities, setFacilities] = useState();
  const [loading, setLoading] = useState(true);
  const { token } = useContext(UseToken);
  useEffect(() => {
    const fetch = async () => {
      try {
        const results = await getFacilities(token);
        setFacilities(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  console.log(facilities);

  return (
    <div className='flex flex-col gap-2'>
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <FacilitiesSkeleton key={index} />
        ))
      ) : (
        <>
          {facilities.listResult.map((item, index) => (
            <div key={index} className='flex flex-row gap-2'>
              <CheckBox value={item?.id} title={item?.name} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ComponentFacilities;
