import Icon from "../../../../components/Icon/Icon";
import Title from "../../../../components/Title/Title";

function ItemProgress({ item, success, status, line }) {
  return (
    <div
      className={`flex items-center gap-2 ${
        line ? "flex-grow" : "flex-grow-0"
      }`}
    >
      <div className='item-center flex'>
        {success ? (
          <>
            <Icon
              icon={item?.icon}
              classIcon='w-6 h-6 bg-hotel-50 rounded-full text-white justify-center flex items-center'
            />
          </>
        ) : (
          <>
            <div
              className={`w-6 h-6 ${
                status
                  ? "bg-hotel-50 text-white"
                  : "bg-transparent text-primary-700 border-[2px] border-primary-100 "
              } rounded-full `}
            >
              <span className='items-center flex justify-center font-medium text-[14px]'>
                {item?.step}
              </span>
            </div>
          </>
        )}
      </div>
      <Title title={item?.name} nowrap={false} xl fontBold />
      {line && <span className='flex-1 bg-primary-500 h-[1px]' />}
    </div>
  );
}

export default ItemProgress;
