import { NotificationNeedAddRessData } from "../../../components/Constants/NotificationNeedAddRessData";
import Label from "../../../components/Label/Label";
import RegisterToolTipNotification from "../../../components/ToolTip/RegisterToolTip/RegisterToolTipNotification";
function ComponentNotificationAddRess() {
  return (
    <>
      {NotificationNeedAddRessData.map((notification, index) => (
        <RegisterToolTipNotification
          key={index}
          icon={notification?.icon}
          header={
            <Label
              classTitle='font-bold'
              size={20}
              className='gap-5 pr-6'
              title={notification?.title}
            />
          }
          render={
            <ul className='pl-5 list-disc'>
              {notification?.data.map((item, index) => (
                <Label
                  key={index}
                  title={item?.name}
                  className='list-item text-[14px]'
                  n
                />
              ))}
            </ul>
          }
          useRegisterToolTip={notification?.useRegisterToolTip}
        />
      ))}
    </>
  );
}

export default ComponentNotificationAddRess;
