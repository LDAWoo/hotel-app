import { Link } from "react-router-dom";
import Image from "../../Image/Image";

function HeaderLeft() {
  return (
    <Link className='flex items-center gap-2' to='/'>
      <Image
        className='w-10 h-10 object-cover'
        src='/images/logo-light.png'
        srcDark='/images/logo-dark.png'
        alt='Logo'
      />
      <div>
        <p className='text-[28px] font-bold text-white'>Staying.com</p>
      </div>
    </Link>
  );
}

export default HeaderLeft;
