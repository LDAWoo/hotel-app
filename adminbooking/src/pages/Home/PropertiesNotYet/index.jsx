import { useState } from "react";
import Body from "./Body";
import Header from "./Header";

function PropertiesNotYet() {
  const [show, setShow] = useState(true);
  return (
    <div className="mb-8 flex flex-col gap-3">
      <Header setShow={setShow} show={show} />
      {show && <Body />}
    </div>
  );
}

export default PropertiesNotYet;
