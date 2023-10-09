import { PropertiesHost } from "../../../components/Constants/PropertiesHost";
import ItemHost from "../ItemHost";
import PropTypes from "prop-types";

function ComponentPropertyHost({ onClick, active }) {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 bg-white dark:bg-primary-700'>
        {PropertiesHost.map((item, index) => (
          <ItemHost
            key={index}
            name={item?.name}
            description={item?.description}
            active={item?.name === active}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

ComponentPropertyHost.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default ComponentPropertyHost;
