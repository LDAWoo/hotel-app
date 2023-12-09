import PropTypes from "prop-types";
import { BsArrowsMove } from "react-icons/bs";
import Icon from "../../../../../../../components/Icon/Icon";
import Switcher from "../../../../../../../components/Switcher";
import Title from "../../../../../../../components/Title/Title";

function Item({ items, id, handleChange }) {
  return (
    <div className="pt-2 pb-2 pr-0 pl-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mr-4">
          <Switcher value={items?.id} checked={items?.status} onChange={(e) => handleChange(id, e)} />
          <Title title={items?.name} xl />
        </div>
        <Icon classIcon="text-primary-100" icon={BsArrowsMove} />
      </div>
    </div>
  );
}

Item.propTypes = {
  items: PropTypes.shape({
    status: PropTypes.bool,
    name: PropTypes.string,
  }),
};

export default Item;
