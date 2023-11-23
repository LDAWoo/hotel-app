import PropType from "prop-types";
import { GoSearch } from "react-icons/go";
import Button from "../../../components/Buttons/Button";
import Icon from "../../../components/Icon/Icon";
import Title from "../../../components/Title/Title";

function NoResult({ searchResult }) {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center gap-4 w-full p-1'>
        <Icon icon={GoSearch} size={28} classIcon='dark:text-white' />
        <Title
          title={`Không tìm thấy chỗ nghỉ ở ${searchResult}`}
          fontBold
          extraLarge8
          className='dark:text-white w-full text-center'
          nowrap={false}
        />

        <Title
          className='dark:text-primary-50 w-full text-center'
          title='Không có chỗ nghỉ nào phù hợp với các tiêu chí tìm kiếm của bạn. Hãy thử cập nhật tiêu chí tìm kiếm của bạn.'
          xxl
          nowrap={false}
        />

        <div>
          <Button
            title='Cập nhật tìm kiếm'
            background
            className='justify-center p-2'
          />
        </div>
      </div>
    </div>
  );
}

NoResult.propTypes = {
  searchResult: PropType.string,
};

export default NoResult;
