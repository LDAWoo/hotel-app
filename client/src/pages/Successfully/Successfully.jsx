import Title from "../../components/Title/Title";

const Successfully = () => {
  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full'>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-center">
              <Title title="We have created room for you, so you can find the room that suits you." fontMedium extraLarge5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Successfully.propTypes = {};

export default Successfully;
