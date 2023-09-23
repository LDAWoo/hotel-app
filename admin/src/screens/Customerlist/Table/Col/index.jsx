import PropTypes from "prop-types";
import Title from "../../../../components/Title";

function Col({ title, className }) {
  return <div className={`relative table-cell pt-0 pr-[12px] pb-[16px] pl-[12px] align-middle text-secondary-n4 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-secondary-n3 dark:after:bg-secondary-n6 ${className}`}>{title && <Title large fontMedium title={title} className="text-secondary-n4 dark:text-secondary-n3" />}</div>;
}

Col.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Col;
