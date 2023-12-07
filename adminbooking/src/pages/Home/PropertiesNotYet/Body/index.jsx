import { memo } from "react";
import Title from "../../../../components/Title/Title";
import TBody from "./TBody";
import THead from "./THead";

function Body() {
  return (
    <div>
      <div className="mb-4">
        <Title title="Grow your business by adding these properties to the world's biggest online travel agency, Staying.com." xl nowrap={false} />
      </div>
      <table className="w-full table border-[1px] border-b-0 bg-white">
        <THead />
        <TBody />
      </table>
    </div>
  );
}

export default memo(Body);
