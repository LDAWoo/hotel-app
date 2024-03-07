import ComponentPartner from "./ComponentPartner";
import ComponentPaymentMode from "./ComponentPaymentMode";

const ComponentGroup = () => {
  return (
    <div className="flex flex-col gap-4">
      <ComponentPaymentMode />
      <ComponentPartner />
    </div>
  );
};

ComponentGroup.propTypes = {};

export default ComponentGroup;
