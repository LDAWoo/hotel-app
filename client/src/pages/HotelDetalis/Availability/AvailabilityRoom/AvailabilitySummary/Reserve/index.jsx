import Button from "../../../../../../components/Buttons/Button";
import ToolTipMoving from "../../../../../../components/ToolTip/ToolTipMoving";
import Content from "./Content";

const Reserve = () => {
  return (
    <div>
      <ToolTipMoving toolTip={<Content />}>
        <Button
          title='Reserve'
          fontMedium
          large
          className='pt-[6px] pb-[6px]'
          classTitle='text-white'
          background
        />
      </ToolTipMoving>
    </div>
  );
};

export default Reserve;
