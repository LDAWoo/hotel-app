import Label from "../../components/Label/Label";
import RegisterToolTipNotification from "../../components/ToolTip/RegisterToolTip/RegisterToolTipNotification";
import PropTypes from "prop-types";

function ComponentNotification({ data = [] }) {
  return (
    <>
      {data &&
        data.map((notification, index) => (
          <RegisterToolTipNotification
            key={index}
            icon={notification?.icon}
            useRegisterToolTip={notification?.useRegisterToolTip}
            header={
              <Label
                classTitle='font-bold'
                size={20}
                className='gap-5 pr-6 '
                title={notification?.title}
              />
            }
            render={
              <ul
                className={`${
                  notification?.data.length > 1 ? "pl-5 list-disc" : ""
                }`}
              >
                {notification?.data.map((item, index) => (
                  <Label
                    key={index}
                    title={item?.name}
                    className='list-item text-[14px] dark:text-primary-50'
                    n
                  />
                ))}
              </ul>
            }
          />
        ))}
    </>
  );
}

ComponentNotification.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ComponentNotification;
