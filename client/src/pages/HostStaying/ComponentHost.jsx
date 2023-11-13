import PropTypes from "prop-types";
import Title from "../../components/Title/Title";
import LoadingFullScreen from "../../components/Loading/LoadingFullScreen";

const ComponentHost = ({
  className,
  classComponent,
  title,
  subTitle,
  componentLeft,
  classComponentLeft,
  componentRight,
  classComponentRight,
  footer,
  classFooter,
  loading,
}) => {
  const ComponentLeft = componentLeft;
  const ComponentRight = componentRight;

  const FooterComponent = ({ isVisible }) => {
    return (
      <div
        className={`${
          isVisible ? "hidden 2md:flex" : "flex 2md:hidden"
        } flex-row gap-2 m-0 p-0 w-full ${classFooter}`}
      >
        {footer}
      </div>
    );
  };

  return (
    <div className={`${className && className}`}>
      <div className='max-w-[500px] flex flex-col h-full justify-between'>
        <div className='relative'>
          <div className='flex flex-col p-4 gap-2'>
            <Title
              title={title}
              nowrap={false}
              fontBold
              extraLarge4
              colorTitle='dark:text-white'
            />
            <Title
              title={subTitle}
              nowrap={false}
              xxl
              colorTitle='dark:text-primary-50'
            />
          </div>
        </div>
      </div>
      <div
        className={`${ComponentRight ? "sm:mr-[30%]" : "w-full"} ${
          classComponent
            ? classComponent
            : "flex flex-col mr-0 2md:mr-0 2md:flex-row gap-5 p-4"
        }`}
      >
        {ComponentLeft && (
          <div
            className={`flex flex-col gap-5 ${
              ComponentRight ? "w-full 2md:w-[45%]" : "w-full"
            }`}
          >
            <div
              className={`bg-white dark:bg-primary-700 ${
                classComponentLeft
                  ? classComponentLeft
                  : "w-full gap-5 p-4 dark:border-primary-500 dark:text-white border rounded-sm"
              }`}
            >
              {ComponentLeft}
            </div>

            {footer && <FooterComponent isVisible />}
          </div>
        )}
        {ComponentRight && (
          <div
            className={`flex flex-col w-full 2md:w-[55%] gap-5 ${classComponentRight}`}
          >
            {ComponentRight}
          </div>
        )}

        {footer && <FooterComponent isVisible={false} />}
      </div>

      {loading && <LoadingFullScreen />}
    </div>
  );
};

ComponentHost.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  classComponent: PropTypes.string,
  componentLeft: PropTypes.node,
  classComponentLeft: PropTypes.string,
  componentRight: PropTypes.node,
  classComponentRight: PropTypes.string,
  footer: PropTypes.node,
  classFooter: PropTypes.string,
  isVisible: PropTypes.bool,
  loading: PropTypes.bool,
};

export default ComponentHost;
