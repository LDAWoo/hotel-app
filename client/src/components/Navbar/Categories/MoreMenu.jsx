import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useRegisterToolTipCategoriesMore from "../../../hooks/useRegisterToolTipCategoriesMore";
import Button from "../../Buttons/Button";

function MoreMenu({ data }) {
  const { onClose } = useRegisterToolTipCategoriesMore();

  return (
    <>
      {data?.map((item) => (
        <Link to={item.to} key={item.id}>
          <div className='w-full'>
            <Button
              className='w-full h-full hover:bg-gray-200/50 dark:hover:bg-primary-500 p-[7px] translate duration-300'
              icon={item.icon}
              title={item.translationKey}
              classTitle='dark:text-primary-50'
              classIcon='dark:text-primary-50'
              large
              size={18}
              onClick={() => onClose()}
            />
          </div>
        </Link>
      ))}
    </>
  );
}

MoreMenu.propTypes = {
  data: PropTypes.array,
};

export default MoreMenu;
