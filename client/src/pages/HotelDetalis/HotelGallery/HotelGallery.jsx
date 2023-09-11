import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";

function HotelGallery() {
  return (
    <div className='w-full'>
      <div className='flex flex-col w-full'>
        <Header />
        <Gallery />
      </div>
    </div>
  );
}

export default HotelGallery;
