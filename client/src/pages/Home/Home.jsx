import RecentSearch from "./RecentSearch/RecentSearch";
import TrendingDestination from "./TrendingDestinations/TrendingDestination";
import UniqueProperty from "./UniqueProperty/UniqueProperty";
import GuestLove from "./GuestLove/GuestLove";
import DestinationsWeLove from "./DestinationsWeLove/DestinationsWeLove";
import { useEffect, useState } from "react";
import { getHotelIndex } from "../../api/Home";
import { useNavigate } from "react-router-dom";

function Home() {
  const [homeData, setHomeData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getHotelIndex();
        setHomeData(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    const convertData =
      typeof homeData === "object" &&
      homeData !== null &&
      Object.entries(homeData).map(([key, value]) => ({
        key,
        data: value || [],
      }));
    setCurrentData(convertData);
  }, [homeData]);

  useEffect(() => {}, [currentData]);

  console.log(currentData);
  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full'>
          {/* <RecentSearch /> */}
          <TrendingDestination isLoading={loading} />
          <UniqueProperty data={currentData} isLoading={loading} />
          <GuestLove data={currentData} isLoading={loading} />
          <DestinationsWeLove data={currentData} isLoading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Home;
