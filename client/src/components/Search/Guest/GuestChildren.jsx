import { useTranslation } from "react-i18next";
import useRegisterGuestStore from "../../../hooks/useRegisterGuestStore";
import GuestItem from "./GuestItem";
import SelectInput from "../../../components/SelectInput/SelectInput";
import { GuestChildrenData } from "../../Constants/Search/GuestChildrenData";
import Title from "../../Title/Title";

function GuestChildren() {
  const { t } = useTranslation();
  const { child, setChildren } = useRegisterGuestStore();

  const handleMinusChild = () => {
    setChildren(child - 1);
  };

  const handlePlusChild = () => {
    setChildren(child + 1);
  };
  return (
    <GuestItem
      title={t("Search.Guest.Children.title")}
      value={child}
      minValue={0}
      maxValue={10}
      handleMinus={handleMinusChild}
      handlePlus={handlePlusChild}
    >
      {/* {child > 0 && (
        <>
          <div className='grid grid-cols-2 gap-2'>
            {Array.from({ length: child }).map((x, index) => (
              <div key={index} className=''>
                <SelectInput className='w-full mb-0'>
                  {GuestChildrenData.map((x, index) => (
                    <option key={index} value={x?.value}>
                      {x?.name}
                    </option>
                  ))}
                </SelectInput>
              </div>
            ))}
          </div>
          <Title
            title='To find you a place to stay that fits your entire group along with correct prices, we need to know how old your children will be at check-out'
            nowrap={false}
            xl
            className='dark:text-white'
          />
        </>
      )} */}
    </GuestItem>
  );
}

export default GuestChildren;
