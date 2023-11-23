import GoogleMapReact from "google-map-react";
import { useContext, useEffect, useState } from "react";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import useRegisterPinMap from "../../hooks/Map/useRegisterPinMap";
import Marker from "../Marker/Marker";
import { mapStyles } from "./MapStyles";
import { ThemeContext } from "../Contexts/AppThemeProvider";
import PropType from "prop-types";
import SearchMap from "./SeachMap";
const key = import.meta.env.VITE_APP_GOOGLE_MAP_KEY;

const Map = ({ data }) => {
  const { value } = useRegisterPinMap();
  const zoom = 14;
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetch = async () => {
      const currentAddRess =
        data[0]?.streetAddress +
        ", " +
        data[0]?.districtAddress +
        ", " +
        data[0]?.city +
        ", " +
        data[0]?.country;

      if (currentAddRess.trim() != "") {
        const currentCoordinates = await getCoordinates(currentAddRess);
        console.log(currentCoordinates);
        if (currentAddRess) {
          setCoordinates({
            lat: currentCoordinates.lat,
            lng: currentCoordinates.lng,
          });
        }
      }
    };

    fetch();
  }, []);

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const markersArray = await Promise.all(
        data.map(async (item) => {
          const address =
            item.streetAddress +
            ", " +
            item.districtAddress +
            ", " +
            item.city +
            ", " +
            item.country;
          try {
            const coordinates = await getCoordinates(address);
            return coordinates ? (
              <Marker
                key={item?.hotelId}
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
          } catch (error) {
            console.error("Error fetching coordinates:", error);
            return null;
          }
        }),
      );
      setMarkers(markersArray);
    };

    fetchCoordinates();
  }, [data, value]);

  const getCoordinates = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      if (results && results.length > 0) {
        const latLng = await getLatLng(results[0]);
        return latLng;
      } else {
        console.error("No valid result found");
        return null;
      }
    } catch (error) {
      if (error.status === "OVER_QUERY_LIMIT") {
        console.warn("Geocoding API quota exceeded. Waiting and retrying...");
        // You can implement a retry mechanism or handle it as needed.
      } else {
        console.error("Error getting coordinates:", error);
      }
      return null;
    }
  };

  // const handleApiLoaded = (map, maps) => {
  //   // maps.visualRefresh = true;
  //   // maps.maxZoomService = true;
  // };

  return (
    <div className='w-full h-full relative'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key, language: "en" }}
        center={coordinates}
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        options={{
          fullscreenControl: false,
          styles: `${darkMode === "dark" ? mapStyles : ""}`,
          gestureHandling: "greedy",
        }}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      <SearchMap />
    </div>
  );
};

Map.propTypes = {
  data: PropType.array,
};

export default Map;
