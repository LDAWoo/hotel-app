import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import Marker from "../Marker/Marker";
import useRegisterPinMap from "../../hooks/Map/useRegisterPinMap";

const key = import.meta.env.VITE_APP_GOOGLE_MAP_KEY;

const Map = ({ data }) => {
  const { value } = useRegisterPinMap();

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const markersArray = await Promise.all(
        data.map(async (item) => {
          const addRess =
            item.streetAddress +
            ", " +
            item.districtAddress +
            ", " +
            item.city +
            ", " +
            item.country;
          const coordinates = await getCoordinates(addRess);
          return coordinates ? (
            <Marker
              key={item?.id}
              id={item?.hotelId}
              lat={coordinates.lat}
              lng={coordinates.lng}
              isActive={item?.hotelId === value}
              name={item?.name}
              rating={item?.rating}
              image={item?.images[0]?.picByte}
              days={item?.totalDay}
              adults={item?.adults}
              child={item?.children}
              reviews={item?.countView}
            />
          ) : null;
        }),
      );
      setMarkers(markersArray);
    };

    fetchCoordinates();
  }, [data, value]);

  const getCoordinates = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      return latLng;
    } catch (error) {
      console.error("Error getting coordinates:", error);
      return null;
    }
  };

  const handleApiLoaded = (map, maps) => {
    // Use the map and maps objects here
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: key, language: "en" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    >
      {markers}
    </GoogleMapReact>
  );
};

export default Map;
