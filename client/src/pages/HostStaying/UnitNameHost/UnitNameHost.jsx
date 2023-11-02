import ComponentHost from "../ComponentHost";
import ComponentUnitName from "./ComponentUnitName";
import FooterHost from "../FooterHost";

function UnitNameHost() {
  return (
    <ComponentHost
      title='What’s the name of this room?'
      componentLeft={<ComponentUnitName />}
      componentRight={<div></div>}
      footer={<FooterHost />}
    />
  );
}

export default UnitNameHost;
