import HomeHeader from "./HomeHeader";
import PropertiesNotYet from "./PropertiesNotYet";

const Home = () => {
  return (
    <div>
      <div className="mt-0 mb-0 ml-auto mr-auto max-w-[var(--max-width)] p-4 relative">
        <HomeHeader />
        <PropertiesNotYet />
      </div>
    </div>
  );
};

export default Home;
