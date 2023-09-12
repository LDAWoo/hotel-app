import { useContext } from "react";
import Button from "../../../../Buttons/Button";
import { User as Users } from "../../../../Constants/User";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../../../Contexts/AppUserProvider";
function UserMenu() {
  const { t } = useTranslation();

  const { handleLogout } = useContext(UserContext);

  const handleSelectOption = (opt) => {
    switch (opt) {
      case "profile":
        console.log("Profile");
        break;

      case "logout":
        handleLogout();
        break;
    }
  };

  return (
    <>
      {Users.map((u) => (
        <div key={u.id} className='w-full'>
          <Button
            className='w-full h-full hover:bg-gray-200/50 dark:hover:bg-primary-500 p-[7px] translate duration-300'
            icon={u.icon}
            classTitle='dark:text-primary-50 font-normal lg:p-0 p-2 whitespace-nowrap text-ellipsis overflow-hidden'
            title={t(u?.translationKey)}
            large
            classIcon='dark:text-primary-50 min-w-[24px]'
            size={24}
            onClick={() => handleSelectOption(u.type)}
            iconPosition='before'
          />
        </div>
      ))}
    </>
  );
}

export default UserMenu;
