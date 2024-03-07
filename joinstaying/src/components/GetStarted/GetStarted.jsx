import { AiOutlineCheck } from "react-icons/ai";
import Button from "../Buttons/Button";
import Label from "../Label/Label";
import Title from "../Title/Title";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../configs/routesConfig";
import { useTranslation } from "react-i18next";
import { UserContext } from "../Contexts/AppUserProvider";
function GetStarted() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useContext(UserContext);

  const data = [
    {
      title: t("JoinBanner.getStarted.items.item1"),
    },
    {
      title: t("JoinBanner.getStarted.items.item2"),
    },
    {
      title: t("JoinBanner.getStarted.items.item3"),
    },
    {
      title: t("JoinBanner.getStarted.items.item4"),
    },
  ];

  const handleGetStartNow = () => {
    if (!Object.keys(user).length > 0) {
      navigate(routesConfig.login);
      return;
    }
    navigate(routesConfig.becomeAHostCategory);
  };

  return (
    <div className="w-full">
      <div className="bg-white w-full">
        <div className="flex flex-col gap-2 p-4">
          <Title title={t("JoinBanner.getStarted.title")} fontBold className="text-primary-700" xxxl nowrap={false} />

          <ul className="flex flex-col list-none gap-2">
            {data.map((item, index) => (
              <Label key={index} icon={AiOutlineCheck} classIcon="text-success-50" size={20} title={item.title} className="text-primary-100 text-[14px]" />
            ))}
          </ul>

          <Button title={t("JoinBanner.getStarted.getStartedNow")} background className="pt-3 pb-3 justify-center mt-4" titlePosition="before" icon={HiOutlineArrowNarrowRight} size={20} onClick={handleGetStartNow} />
        </div>
      </div>
    </div>
  );
}

export default memo(GetStarted);
