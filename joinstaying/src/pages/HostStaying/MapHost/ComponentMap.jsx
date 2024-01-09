// import Map from "../../../components/Map/Map";
import Title from "../../../components/Title/Title";

function ComponentMap() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Title title="This is the location we'll show to guests on our site. Drag the map so the pin matches the exact location of your place." nowrap={false} xl />
        {/* GoogleMap */}
        <div className="w-[50vh] h-[50vh]">{/* <Map /> */}</div>
        <div></div>
      </div>
    </div>
  );
}

export default ComponentMap;
