import { useCallback, useEffect, useRef, useState } from "react";
import Title from "../Title/Title";
import { IoLocationOutline } from "react-icons/io5";
import Icon from "../Icon/Icon";
import { getLocale } from "../Locale/Locale";
import PropTypes from 'prop-types'

function AutoCompletePlace({className,isOpen,onClose,clickOutside=true, disabled, popular, address, children, width= 500, onClick}) {
    const [currentAddress, setCurrentAddress] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [places, setPlaces] = useState([]);
    const locale = getLocale();
    const modalRef = useRef();

    useEffect(() => {
        setCurrentAddress(address)
    },[address])

    useEffect(() => {
        if (!currentAddress) return;
        // eslint-disable-next-line no-undef
        const service = new google.maps.places.AutocompleteService();
        const request = {
            input: currentAddress,
            types: ['(cities)'],
            componentRestrictions: { country: locale.code },
        };
    
        service.getQueryPredictions(request, function(predictions, status) {
            // eslint-disable-next-line no-undef
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const promises = predictions.map(prediction => {
                    return new Promise((resolve, reject) => {
                        // eslint-disable-next-line no-undef
                        const placeService = new google.maps.places.PlacesService(document.createElement('div'));
                        const request = {
                            placeId: prediction.place_id,
                            language: locale.code
                        };
    
                        placeService.getDetails(request, function(place, status) {
                            // eslint-disable-next-line no-undef
                            if (status === google.maps.places.PlacesServiceStatus.OK) {
                                resolve(place);
                            } else {
                                reject(status);
                            }
                        });
                    });
                });
    
                Promise.all(promises)
                    .then(placesData => {
                        setPlaces(placesData);
                    })
                    .catch(error => {
                        console.error("Error fetching place details:", error);
                    });
            }
        });
    }, [currentAddress, locale]);

    useEffect(() => {
        if(popular && !currentAddress){
            setCurrentAddress("Ho Chi Minh");
        }
    },[popular, currentAddress])

    useEffect(() => {
        const handleMouseDown = (event) => {
          if (!modalRef.current) {
            return;
          }
    
          if (!modalRef.current.contains(event.target) && clickOutside) {
            handleClose();
          }
        };
    
        document.addEventListener("mousedown", handleMouseDown);
    
        return () => {
          document.removeEventListener("mousedown", handleMouseDown);
        };
      }, []);

      useEffect(() => {
        setShowModal(isOpen);
      }, [isOpen]);

      const handleClose = useCallback(() => {
        if (disabled) {
          return;
        }
    
        setShowModal(false);
        setTimeout(() => {
          onClose();
        }, 300);
      }, [disabled, onClose]);

    return ( 
        <div className="relative">
            {children}
            {places.length > 0 && showModal && <div 
            ref={modalRef} 
            className={`${className ? className : '2md:w-auto w-full z-10 absolute left-0 top-full translate-y-2 bg-white rounded-md shadow-[0_2px_8px_0_rgba(26,26,26,0.16)]'}`} style={{minWidth: `${width}px`}}>
                    {places.map(place => (
                        <div key={place.place_id} className="p-2 w-full hover:bg-gray-100 cursor-pointer" onClick={() => onClick(place)}>
                            <div className="min-h-[36px] flex flex-row items-center gap-2">
                                <div>
                                    <Icon icon={IoLocationOutline} size={24}/>
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <Title title={place.name} xl fontBold/>
                                    <Title title={place.formatted_address} large/>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>}
        </div>
     );
}

AutoCompletePlace.propTypes = {
    className: PropTypes.string,
    clickOutside: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    disabled: PropTypes.bool,
    popular: PropTypes.bool,
    address: PropTypes.string,
    children: PropTypes.node,
    width: PropTypes.number,
    onClick: PropTypes.func,
}

export default AutoCompletePlace;