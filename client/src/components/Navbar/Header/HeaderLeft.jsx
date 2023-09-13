import { Link } from "react-router-dom";
import Title from "../../Title/Title";

function HeaderLeft() {
  return (
    <Link className='flex items-center' to='/'>
      <Title title='Staying.com' fontBold extraLarge5 colorTitle='text-white' />
    </Link>
  );
}

export default HeaderLeft;
