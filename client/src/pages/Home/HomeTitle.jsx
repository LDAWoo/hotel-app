import Title from "../../components/Title/Title";
import PropTypes from "prop-types";

function HomeTitle({ title, subTitle }) {
  return (
    <div className='flex flex-col gap-1'>
      <Title
        title={title}
        colorTitle='dark:text-white'
        fontBold
        xxxl
        nowrap={false}
      />
      {subTitle && (
        <Title
          title={subTitle}
          colorTitle='text-primary-100 dark:text-primary-50'
          xl
          nowrap={false}
        />
      )}
    </div>
  );
}

HomeTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default HomeTitle;
