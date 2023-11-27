import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { getHotelPropertyHost } from "../../../api/HostStaying/HotelPropertyHost";
import { UseToken } from "../../../components/Contexts/AppTokenProvider";
import ItemHost from "../ItemHost";
import PropertyHostSkeleton from "./PropertyHostSkeleton";

function ComponentPropertyHost({ onClick, active }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(UseToken);
  useEffect(() => {
    const fetch = async () => {
      try {
        const results = await getHotelPropertyHost(token);
        console.log(results);
        setProperties(results?.listResult);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 bg-white dark:bg-primary-700'>
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <PropertyHostSkeleton key={index} />
        ))
      ) : (
        <>
          {properties.length > 0 &&
            properties.map((item, index) => (
              <ItemHost
                key={index}
                name={item?.name}
                description={item?.description}
                active={item?.id === active}
                onClick={() => onClick(item?.id)}
              />
            ))}
        </>
      )}
    </div>
  );
}

ComponentPropertyHost.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default ComponentPropertyHost;
