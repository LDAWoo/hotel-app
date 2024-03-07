import Title from "../../../../components/Title/Title";
import ComponentHost from "../../ComponentHost";
import FooterHost from "../../FooterHost";
import ComponentAmenitiesAndServices from "./ComponentAmenitiesAndServices";
import ComponentNotificationAmenity from "./ComponentNotificationAmenity";

const AmenitiesAndServices = () => {
  return (
    <div className="flex flex-col">
      <div className="p-4 gap-4 flex flex-col">
        <div className="flex flex-col">
          <Title title="Service And Amenities" nowrap={false} fontBold extraLarge4 colorTitle="dark:text-white" />
          <Title title="Giờ Quý vị hãy cho chúng tôi biết một số thông tin chỗ nghĩ như tiện nghi, internet mà chỗ nghĩ sử dụng." nowrap={false} xl />
        </div>
      </div>

      <ComponentHost componentLeft={<ComponentAmenitiesAndServices />} componentRight={<ComponentNotificationAmenity />} footer={<FooterHost />} />
    </div>
  );
};

AmenitiesAndServices.propTypes = {};

export default AmenitiesAndServices;
