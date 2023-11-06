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
                  <div  key={index}>
                  <Label
                    title={item?.name}
                    className='list-item text-[14px] dark:text-primary-50'
                    n
                  />
                  {item?.data && (
                    <div className="pl-4">
                      {item?.data.map((i,index) =>(
                        <Label
                        key={index}
                        title={i?.name}
                        className='list-item text-[14px] dark:text-primary-50'
                        n
                      />
                      ))}
                    </div>
                  )}
                  </div>
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
