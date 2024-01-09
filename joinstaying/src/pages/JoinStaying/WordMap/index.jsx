import Title from "../../../components/Title/Title";
import ItemWordMap from "./ItemWordMap";

function WordMap() {
  const data = [
    {
      id: 1,
      title: "2/3",
      subTitle: "of holiday rental guests return to book with us again",
    },
    {
      id: 2,
      title: "48%",
      subTitle: "of nights booked on Booking.com in 2022 were for international stays",
    },
    {
      id: 3,
      title: "33%",
      subTitle: "of holiday rental customers are Genius loyalty level 2 or 3 who tend to spend more per booking",
    },
  ];
  return (
    <div className="bg-[url(/images/world-map-gray.png)] overflow-hidden bg-no-repeat bg-cover">
      <div className="flex flex-col p-[10px] pt-[72px] pb-[112px] mx-auto max-w-[var(--max-width)] w-full relative">
        <Title title="Reach a unique global customer base" fontBold extraLarge10 nowrap={false} className="dark:text-white" />
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
