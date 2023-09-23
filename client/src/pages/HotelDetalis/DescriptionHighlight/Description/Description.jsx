import Description from "./Description/Description";
import Popular from "./Popular/Popular";

function DescriptionPopular() {
  return (
    <div className='w-[66.67%] max-w-[66.67%] basis-[66.67%]'>
      <div className='flex flex-col pt-3 '>
        {/* Description */}
        <Description />
        {/* Popular */}
        <Popular />
      </div>
    </div>
  );
}

export default DescriptionPopular;
