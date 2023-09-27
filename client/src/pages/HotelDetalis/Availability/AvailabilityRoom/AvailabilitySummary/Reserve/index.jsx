import Button from "../../../../../../components/Buttons/Button";
import ToolTipMoving from "../../../../../../components/ToolTip/ToolTipMoving";
import Content from "./Content";
import PropTypes from "prop-types";

const Reserve = ({ toolTip }) => {
  const ButtonReserver = () => {
    return (
      <Button
        title='Reserve'
        fontMedium
        large
        className='pt-[6px] pb-[6px]'
        classTitle='text-white'
        background
      />
    );
  };

  return (
    <div>
      {toolTip ? (
        <ToolTipMoving toolTip={<Content />}>
          <ButtonReserver />
        </ToolTipMoving>
      ) : (
        <ButtonReserver />
      )}
    </div>
  );
};

Reserve.propTypes = {
  toolTip: PropTypes.bool,
};

export default Reserve;
