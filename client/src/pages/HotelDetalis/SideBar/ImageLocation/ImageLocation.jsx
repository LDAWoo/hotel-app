import { useTranslation } from "react-i18next";
import Button from "../../../../components/Buttons/Button";
import { getLocale } from "../../../../components/Locale/Locale";
import useRegisterHotelDetails from "../../../../hooks/HotelDetails/useRegisterHotelDetails";
import { MdLocationOn } from "react-icons/md";
import Icon from "../../../../components/Icon/Icon";

const apiKey = import.meta.env.VITE_APP_GOOGLE_MAP_KEY;

function buildImageUrl(location, locale) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(location)}&zoom=13&language=${locale.code}&size=264x200&key=${apiKey}&channel=hotel`;
}

function ImageLocation() {
    const {t} = useTranslation()
    const { hotels } = useRegisterHotelDetails();
    const locale = getLocale();

    let imageUrl = null;
    if (hotels) {
        const location = `${hotels.streetAddress}, ${hotels.districtAddress}, ${hotels.city}, ${hotels.country}`;
        imageUrl = buildImageUrl(location, locale);
    }
    
    return ( 
        <div className='relative w-full mb-2'>
            <div className={`relative rounded-0 h-[72px] min-h-[130px] bg-gray-200`} style={{background: `url(${imageUrl})`}}>
                <div className='pt-[30px] flex justify-center'>
                    <div className='text-hotel-100'>
                        <Icon icon={MdLocationOn}size={40} />
                    </div>
                </div>
                <div className="w-auto left-[32%] absolute top-[60%]">
                    <Button
                        background
                        className='p-[6px] rounded-[2px] w-auto'
                        title={t("SearchResults.showOnMap")}
                        xl
                        fontMedium
                        classButton="justify-center items-center w-full"
                    />
                </div>
            </div>
        </div>
     );
}

export default ImageLocation;
