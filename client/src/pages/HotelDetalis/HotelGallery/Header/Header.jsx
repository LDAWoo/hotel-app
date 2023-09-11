import Star from "../../../../components/Star/Start";
import Title from "../../../../components/Title/Title";
import Location from "./Location/Location";

function Header() {
  const starCount = 2;
  return (
    <div className='w-full'>
      <div className='w-full flex flex-col'>
        <div></div>
        <div className='w-full'>
          <div className='flex items-center'>
            <Title
              title='Bon Ami Hotel - Thien Xuan Hotel'
              fontBold
              titleCustom='text-[28px]'
            />
            {starCount > 0 && <Star starCount={starCount} />}
          </div>
        </div>
        <Location />
      </div>
    </div>
  );
}

export default Header;
