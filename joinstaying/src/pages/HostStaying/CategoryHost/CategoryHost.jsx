import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ComponentHost from "../ComponentHost";
import ComponentCategoryHost from "./ComponentCategoryHost";
const CategoryHost = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChooseCategory = (keys) => {
    navigate("/become-a-host/" + keys);
  };

  return <ComponentHost title={t("HostStaying.Category.title")} subTitle={t("HostStaying.Category.subTitle")} classComponent classComponentLeft componentLeft={<ComponentCategoryHost onClick={handleChooseCategory} />} />;
};

export default CategoryHost;
