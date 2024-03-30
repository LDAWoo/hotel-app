import Description from "./Description/Description";
import Highlight from "./Highlight/Highlight";

function DescriptionHighlight() {
  return (
    <>
      <div className='flex flex-col 2md:flex-row'>
        {/* Description */}
        <Description />
        {/* Highlight */}
        {/* <Highlight /> */}
      </div>
    </>
  );
}

export default DescriptionHighlight;
