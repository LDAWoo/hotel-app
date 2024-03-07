import ComponentHotelPolicy from "./ComponentHotelPolicy";
import ComponentHouseRules from "./ComponentHouseRules";

const ComponentPolicies = () => {
  return (
    <div className="flex flex-col gap-4">
      <ComponentHotelPolicy />
      <ComponentHouseRules />
    </div>
  );
};

ComponentPolicies.propTypes = {};

export default ComponentPolicies;
