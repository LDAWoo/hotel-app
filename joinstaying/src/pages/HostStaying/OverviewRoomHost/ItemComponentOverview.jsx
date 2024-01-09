import Icon from "../../../components/Icon/Icon";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Buttons/Button";

const ItemComponentOverview = ({
  index,
  step,
  title,
  subTitle,
  icon,
  nameButton,
  onClick,
}) => {
  return (
    <div className='w-full p-2'>
      <div className='w-full flex items-center'>
        <div className='flex flex-col sm:flex-row w-full items-center gap-2'>
          <div className='flex items-center gap-2 flex-1 w-full'>
            <Icon
              icon={icon}
              size={36}
              classIcon={`${index === 0 ? "text-hotel-50" : ""}`}
            />
            <div className='flex flex-col'>
              <Title title={step} nowrap={false} large />
              <Title title={title} nowrap={false} xxl fontBold />
              <Title title={subTitle} nowrap={false} large />
            </div>
          </div>
          <div className='w-full sm:w-auto'>
            <Button
              title={nameButton}
              border={index % 2 === 0}
              background={index % 2 !== 0}
              className='p-2 basis-auto justify-center'
              onClick={() => onClick(title)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemComponentOverview;
