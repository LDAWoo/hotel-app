import ActiveProperties from "./ActiveProperties";
import FilterProperties from "./FilterProperties";
import HomeHeader from "./HomeHeader";
import PropertiesNotYet from "./PropertiesNotYet";
import TabProperties from "./TabProperties";

const Home = () => {
  return (
    <div>
      <div className="mt-0 mb-0 ml-auto mr-auto max-w-[var(--max-width)] p-4 relative">
        <HomeHeader />
        <PropertiesNotYet />
        <ActiveProperties />
        <FilterProperties />
        <TabProperties />
      </div>
    </div>
  );
};

export default Home;
