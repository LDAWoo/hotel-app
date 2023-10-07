import Title from "../../../components/Title/Title";
import ItemCategoryHost from "./ItemCategoryHost";
import { CategoriesHost } from "../../../components/Constants/CategoriesHost";
import { useNavigate } from "react-router-dom";
const CategoryHost = () => {
  const navigate = useNavigate();

  const handleChooseCategory = (keys) => {
    navigate("/join/become-a-host/" + keys);
  };

  return (
    <div>
      <div className='max-w-[500px] flex flex-col h-full justify-between'>
        <div className='relative'>
          <div className='flex flex-col p-4 gap-2'>
            <Title
              title='List your property on Booking.com and start welcoming guests in no time!'
              nowrap={false}
              extraLarge4
            />
            <Title
              title='To get started, choose the type of property you want to list on Booking.com'
              nowrap={false}
              xxl
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 p-4'>
        {CategoriesHost.map((item, index) => (
          <ItemCategoryHost
            key={index}
            name={item?.name}
            img={item?.image}
            description={item?.description}
            onClick={() => handleChooseCategory(item?.keys)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryHost;
