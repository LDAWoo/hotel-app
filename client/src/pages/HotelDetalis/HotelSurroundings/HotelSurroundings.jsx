import { useEffect, useState } from "react";
import useRegisterHotelDetails from "../../../hooks/HotelDetails/useRegisterHotelDetails";
import { getCoordinates } from "../../../components/Map/Map";
import Title from "../../../components/Title/Title";
import { googleMapPlaceTypes } from "../../../utils/PlaceTypes";
import Icon from "../../../components/Icon/Icon";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import { getLocale } from "../../../components/Locale/Locale";

function HotelSurroundings() {
    const {hotels} = useRegisterHotelDetails()
    const [nearbyPlaces, setNearbyPlaces] = useState([]);
    const {width} = useRegisterWindowSizeStore();
    const locale = getLocale();
    
    const findNearbyPlaces = (coordinate) => {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-undef
            const service = new google.maps.places.PlacesService(document.createElement('div'));
            service.nearbySearch({
                location: coordinate,
                radius: 10000,
                type: ['lodging', 'park', 'airport', 'cafe', 'restaurant'],
                language: locale.code
            }, (results, status) => {
                // eslint-disable-next-line no-undef
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const groupedPlaces = {};
                    results.forEach(place => {
                        const type = place.types[0];
                        if (!groupedPlaces[type]) {
                            groupedPlaces[type] = [];
                        }
                        // eslint-disable-next-line no-undef
                        const distance = google.maps.geometry.spherical.computeDistanceBetween(
                            // eslint-disable-next-line no-undef
                            new google.maps.LatLng(coordinate.lat, coordinate.lng),
                            // eslint-disable-next-line no-undef
                            new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng())
                        );
                        groupedPlaces[type].push({
                            ...place,
                            distance: distance
                        });
                });
                resolve(groupedPlaces);
                } else {
                    reject(status);
                }
            });
        });
    }

    useEffect(() => {
        const location = `${hotels.streetAddress}, ${hotels.districtAddress}, ${hotels.city}, ${hotels.country}`;
        
        const fetchData = async() => {
            const coordinate = await getCoordinates(location);

            findNearbyPlaces(coordinate)
            .then(response => {
                const places = response;
                setNearbyPlaces(places)
            })
            .catch(error => {
                console.error('Error finding nearby places:', error);
            });
        }
        fetchData();
    },[hotels])

    function formatDistance(distance) {
        if (distance >= 1000) {
            return (distance / 1000).toFixed(1) + ' km';
        } else {
            return distance.toFixed(1) + ' m';
        }
    }

    return ( 
        <div className="flex flex-col gap-4 mt-5">
            <Title title="Hotel surroundings" extraLarge4 fontBold/>
            <div style={{WebkitColumnCount: width > 768 ? 3 : width >= 640 ? 2 : 1}}>
                {Object.entries(nearbyPlaces).map(([placeType, places], index) => {
                    const ComponentPlaceType = () => {
                        const place = googleMapPlaceTypes.filter(type => type.type === placeType);
                        return (
                            <div className="mb-4">
                                {place && <div className="flex flex-row gap-2 items-center">
                                    <Icon icon={place[0]?.icon} size={20}/>
                                    <Title title={place[0]?.name} fontBold xxl/>
                                </div>}
                            </div>
                        )
                    }

                    return (
                        <div key={index} className={`flex flex-col mb-[40px] pe-[16px]`} style={{breakInside: 'avoid-column'}}>
                            <ComponentPlaceType />
                            <div className="flex flex-col">
                                {places.map((place, placeIndex) => (
                                    <div key={placeIndex} className="flex flex-row justify-between p-[8px_0] gap-2">
                                        <div>
                                            <Title title={place.name} xl nowrap={false} className="capitalize"/>
                                        </div>
                                        <div>
                                            <Title title={formatDistance(place.distance)} xl/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

export default HotelSurroundings;