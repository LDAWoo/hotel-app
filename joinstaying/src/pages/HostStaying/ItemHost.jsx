import PropTypes from "prop-types";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import "./ItemHost.scss";
const ItemHost = ({ className, name, img, description, active, onClick }) => {
  return (
    <div className={`relative w-full border-[3px] ${active ? "border-hotel-200" : "border-transparent"}`}>
      <div
        className={`w-full border p-4 dark:border-primary-500 rounded-sm bg-white dark:bg-primary-700 cursor-pointer ${className ? className : "aspect-auto sm:aspect-[50/25] md:aspect-[50/30]"} ${active ? "checkmark before:absolute before:-top-[10px] before:-right-[10px] before:w-5 before:h-5 before:bg-hotel-200 before:rounded-full before:content-[''] before:z-[1]" : ""}`}
        onClick={() => onClick(name)}
      >
        <div className={`flex flex-col gap-2 w-full h-full text-left`}>
          {img && (
            <div className="w-[50px] h-[50px]">
              <Image src={img} className="w-full h-full object-cover" />
            </div>
          )}
          {name && <Title title={name} nowrap={false} fontBold xl colorTitle="dark:text-white" />}
          {description && <Title title={description} nowrap={false} xl colorTitle="dark:text-primary-50" />}
        </div>
      </div>
    </div>
  );
};

ItemHost.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ItemHost;
