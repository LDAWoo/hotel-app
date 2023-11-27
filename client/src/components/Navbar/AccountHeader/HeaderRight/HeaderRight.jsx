import Language from "../../Header/HeaderRight/Language/Language";
import Theme from "../../Header/HeaderRight/Theme/Theme";

function HeaderRight() {
  return (
    <div className='flex items-center justify-center'>
      <Theme visible />
      <Language visible />
    </div>
  );
}

export default HeaderRight;
