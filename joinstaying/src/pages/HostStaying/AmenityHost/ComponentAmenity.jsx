import Checkbox from "../../../components/Checkbox/Checkbox";
import Title from "../../../components/Title/Title";
import { AmenitiesData } from "../../../components/Constants/AmenitiesData";

function ComponentAmenity() {
  return (
    <div>
      {AmenitiesData.map((amenity, index) => (
        <div key={index}>
          {amenity?.title && (
            <div className={`${index < 1 ? "mt-0" : "mt-5"} mb-2`}>
              <Title title={amenity?.title} fontBold />
            </div>
          )}

          {amenity?.type === "checkbox" && (
            <div className='flex flex-col gap-2'>
              {amenity?.data.map((item, index) => (
                <Checkbox key={index} value={item?.id} title={item?.name} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ComponentAmenity;
