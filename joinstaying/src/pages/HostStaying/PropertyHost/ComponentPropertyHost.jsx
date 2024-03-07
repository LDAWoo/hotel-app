import PropTypes from "prop-types";
import { memo, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHotelPropertyHost } from "../../../api/HostStaying/HotelPropertyHost";
import { UserContext } from "../../../components/Contexts/AppUserProvider";
import useRegisterDataHotelProperty from "../../../hooks/JoinStaying/HotelPropertyHost/useRegisterDataHotelProperty";
import ItemHost from "../ItemHost";
import PropertyHostSkeleton from "./PropertyHostSkeleton";

function ComponentPropertyHost({ onClick, active }) {
  const { properties, setProperties } = useRegisterDataHotelProperty();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { user, token } = useContext(UserContext);

  useEffect(() => {
    const fetch = async () => {
      if (Object.keys(user).length > 0 && properties.length === 0) {
        try {
          const results = await getHotelPropertyHost(token);
          const data = await results.data;
          setLoading(false);
          setProperties(data);
        } catch (error) {
          setLoading(true);
        }
      } else {
        setLoading(false);
      }
    };

    fetch();
  }, [user, properties, setProperties, navigate, token]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5  dark:bg-primary-700">
      {loading ? Array.from({ length: 4 }).map((_, index) => <PropertyHostSkeleton key={index} />) : <>{properties.length > 0 && properties.map((item, index) => <ItemHost key={index} name={item?.name} description={item?.description} active={item?.id === active} onClick={() => onClick(item?.id)} />)}</>}
    </div>
  );
}

ComponentPropertyHost.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default memo(ComponentPropertyHost);
