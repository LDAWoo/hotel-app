import PropTypes from "prop-types";
import { CategoriesHost } from "../../../components/Constants/CategoriesHost";
import ItemCategoryHost from "./ItemCategoryHost";
function ComponentCategoryHost({ onClick }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 p-4'>
      {CategoriesHost.map((item, index) => (
        <ItemCategoryHost
          key={index}
          name={item?.name}
          img={item?.image}
          description={item?.description}
          keys={item?.keys}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

ComponentCategoryHost.propTypes = {
  onClick: PropTypes.func,
};

export default ComponentCategoryHost;
