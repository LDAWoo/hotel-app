import RecentSearch from "./RecentSearch/RecentSearch";
import TrendingDestination from "./TrendingDestinations/TrendingDestination";
import UniqueProperty from "./UniqueProperty/UniqueProperty";
import GuestLove from "./GuestLove/GuestLove";
import DestinationsWeLove from "./DestinationsWeLove/DestinationsWeLove";
import { useEffect, useState } from "react";
import { getDestinationWeLove } from "../../api/Hotel/DestinationWeLove";

function Home() {
  const [homeData, setHomeData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [state, setState] = useState({
    uniqueProperty: [],
    guestLove: [],
    destinationWeLove: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDestinationWeLove();
        setHomeData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full'>
          <RecentSearch />
          <TrendingDestination />

          <UniqueProperty data={currentData} isLoading={loading} />
          <GuestLove />
          <DestinationsWeLove data={currentData} isLoading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Home;
