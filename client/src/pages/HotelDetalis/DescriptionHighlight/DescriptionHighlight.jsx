import Description from "./Description/Description";
import Highlight from "./Highlight/Highlight";

function DescriptionHighlight() {
  return (
    <>
      <div className='flex'>
        {/* Description */}
        <Description />
        {/* Highlight */}
        <Highlight />
      </div>
    </>
  );
}

export default DescriptionHighlight;
