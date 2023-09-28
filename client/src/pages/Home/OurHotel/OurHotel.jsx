import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getHotels } from "../../../api/Hotel/index";
import HomeTitle from "../HomeTitle";
import Card from "./Card";
import CardContent from "./CardContent";

function OurHotel() {
  const { t } = useTranslation();
  const [ourHotels, setOurHotels] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchHotels = async () => {
      const hotels = await getHotels();
      setOurHotels(hotels);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    fetchHotels();
  }, []);

  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle
            title={t("OurHotel.title")}
            subTitle={t("OurHotel.subTitle")}
          />
        </div>

        <div className='grid gap-4 auto-cols-auto grid-cols-1 2vsm:grid-cols-2 2md:grid-cols-3 w-full '>
          {ourHotels?.products?.map((card) => (
            <Fragment key={card.id}>
              <Card data={card} isLoading={isLoading}>
                <CardContent data={card} />
              </Card>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurHotel;
