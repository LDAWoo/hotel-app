import Map from "../../Map/Map";

function GoogleMapCustom({ data }) {
  return (
    <div className='w-full h-full'>
      <Map data={data} />
    </div>
  );
}

export default GoogleMapCustom;
