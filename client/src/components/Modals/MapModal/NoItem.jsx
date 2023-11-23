import Icon from "../../Icon/Icon";
import { SiMediamarkt } from "react-icons/si";
import Title from "../../Title/Title";
import Button from "../../Buttons/Button";
const NoItem = () => {
  return (
    <div className='flex flex-col gap-4 items-center mt-4 p-4'>
      <Icon
        icon={SiMediamarkt}
        size={34}
        classIcon='animate-spin text-hotel-50 '
      />
      <Title
        title='Rất tiếc, không có kết quả nào'
        fontBold
        extraLarge4
        nowrap={false}
        className='text-hotel-50 text-center'
      />

      <div>
        <Button title='Tải lại kết quả' background className='p-2 rounded-sm' />
      </div>
    </div>
  );
};

export default NoItem;
