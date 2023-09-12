import { Link } from "react-router-dom";
import Image from "../../Image/Image";
import Title from "../../Title/Title";

function HeaderLeft() {
  return (
    <Link className='flex items-center gap-2' to='/'>
      <Image
        className='w-10 h-10 object-cover'
        src='/images/logo-light.png'
        srcDark='/images/logo-dark.png'
        alt='Logo'
      />
      <Title title='Staying.com' fontBold xxxl colorTitle='text-white' />
    </Link>
  );
}

export default HeaderLeft;
