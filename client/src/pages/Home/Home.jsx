import { useEffect } from "react";
import { getHotelIndex } from "../../api/Home";
import useRegisterHomeData from "../../hooks/Home/useRegisterHomeData";
import DestinationsWeLove from "./DestinationsWeLove/DestinationsWeLove";
import GuestLove from "./GuestLove/GuestLove";
import TrendingDestination from "./TrendingDestinations/TrendingDestination";
import UniqueProperty from "./UniqueProperty/UniqueProperty";
import RecentSearch from "./RecentSearch/RecentSearch";

function Home() {
  const {homeData, setHomeData,currentData,setCurrentData, loading, setLoading} = useRegisterHomeData()

  useEffect(() => {
      if(Object.keys(homeData).length > 0){
        return;
      }
      const fetchData = async () => {
        try {
          setLoading(true);
          const result = await getHotelIndex();
          setHomeData(result);
          setLoading(false);
        } catch (error) {
          setLoading(true);
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
