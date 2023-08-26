import Button from "../../../../Buttons/Button";

function HeaderLogin() {
  return (
    <>
      <div className='flex items-center justify-center h-9 mt-2 mr-2 rounded-[3px] bg-white hover:bg-gray-200 '>
        <Button className='h-full text-[14px] pl-3 pr-3 font-medium text-hotel-50' title='Login' />
      </div>

      <div className='flex items-center justify-center h-9 mt-2 mr-2 rounded-[3px] bg-white hover:bg-gray-200 '>
        <Button
          title='Register'
          className='h-full text-[14px] pl-3 pr-3 font-medium text-hotel-50'
        />
      </div>
    </>
  );
}

export default HeaderLogin;
