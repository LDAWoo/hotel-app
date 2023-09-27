import CarouselCustom from "../../../../components/Carousel/CarouselCustom";
import Title from "../../../../components/Title/Title";
import CardReview from "./CardReview";

const data = [
  {
    id: 1,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.”",
  },
  {
    id: 2,
    description:
      "“We loved the location - it's perfect for walking to all main attractions of Rome, and 25-30 min walk to Vatican City too. If, by the end of the day we'd find ourselves wandered out too far to walk back - it's 5 min walk away from Metro station and bus stop is right behind the building too. We used both and were very happy. Room was tidied up every morning for us and ladies at hotel couldn't have been more friendly and welcoming.”",
  },
  {
    id: 3,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.3”",
  },
  {
    id: 4,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.4”",
  },
  {
    id: 5,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.5”",
  },
  {
    id: 6,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.6”",
  },
  {
    id: 7,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.7”",
  },
  {
    id: 8,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.8”",
  },
  {
    id: 9,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.9”",
  },
  {
    id: 10,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.10”",
  },
];
const ListReview = () => {
  return (
    <div className='flex flex-col mt-5 w-full gap-2'>
      <div className='flex flex-row items-center'>
        <Title
          title='See what guests loved the most:'
          fontBold
          xl
          colorTitle='dark:text-white'
        />
      </div>
      <CarouselCustom
        data={data?.map((item, index) => (
          <CardReview description={item?.description} key={index} />
        ))}
      />
    </div>
  );
};

export default ListReview;
