import PropTypes from "prop-types";
import Icon from "../Icon";
import Title from "../Title";

function Filter({ className, title, children, visible, onClick, onClose, onClickOutSide }) {
  return (
    <div className={`relative ${className ? className : ""}`}>
      <button className="p-[6px] rounded-lg border-[2px] dark:border-secondary-n4 hover:bg-primary-p1 hover:border-primary-p1 dark:hover:border-primary-p1 duration-300 hover:text-secondary-n1 dark:hover:text-secondary-n1 text-secondary-n4 dark:text-secondary-n4" onClick={onClick}>
        <Icon name="filter" size="24" />
      </button>

      <div className={` ${visible ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 left-0 bottom-0 right-0 w-auto overflow-auto lg:overflow-hidden lg:absolute lg:-top-[24px] lg:-translate-x-[358px] z-[1000] lg:w-[408px] p-[24px] lg:rounded-[16px] bg-secondary-n1 xl:shadow-[0px_0px_14px_-4px_rgba(0,0,0,0.05),0px_32px_48px_-8px_rgba(0,0,0,0.1)] transition-all dark:bg-secondary-n7`}>
        <div className={`flex items-center mb-[24px]`}>
          <div className="flex items-center flex-1">
            <Title title={title} fontMedium extraLarge4 />
          </div>
          <button className="flex-shrink-0 pl-2 w-[36px] h-[36px] rounded-full bg-secondary-n3 dark:bg-secondary-n6 ml-[24px] text-secondary-n7 dark:text-secondary-n1 transition-all hover:text-primary-p1" onClick={onClose}>
            <Icon name="close" size="20" className />
          </button>
        </div>
        {children}
      </div>
      <div className={`${visible ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 left-0 right-0 bottom-0 z-[999] bg-secondary-n1 dark:bg-secondary-n6 opacity-80`} onClick={onClickOutSide}></div>
    </div>
  );
}

Filter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickOutSide: PropTypes.func.isRequired,
};

export default Filter;
