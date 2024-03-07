import { useTranslation } from "react-i18next";
import Title from "../../../components/Title/Title";
import ItemWordMap from "./ItemWordMap";

function WordMap() {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: "2/3",
      subTitle: t("WordMap.items.item1"),
    },
    {
      id: 2,
      title: "48%",
      subTitle: t("WordMap.items.item2"),
    },
    {
      id: 3,
      title: "33%",
      subTitle: t("WordMap.items.item3"),
    },
  ];
  return (
    <div className="bg-[url(/images/world-map-gray.png)] overflow-hidden bg-no-repeat bg-cover">
      <div className="flex flex-col p-[10px] pt-[72px] pb-[112px] mx-auto max-w-[var(--max-width)] w-full relative">
        <Title title={t("WordMap.title")} fontBold extraLarge10 nowrap={false} className="dark:text-white" />
        <div className="flex flex-wrap">
          {data.map((item, index) => (
            <ItemWordMap key={index} title={item.title} subTitle={item.subTitle} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WordMap;
