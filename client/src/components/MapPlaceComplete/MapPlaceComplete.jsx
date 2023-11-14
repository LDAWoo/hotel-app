import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const key = import.meta.env.VITE_APP_GOOGLE_MAP_KEY;
const MapPlaceComplete = () => {
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);
    console.log("Selected Address:", value);
    console.log("LatLng:", latLng);
  };

  return (
    <PlacesAutocomplete
      apiKey={key}
      onChange={(value) => console.log("Search Value:", value)}
      onSelect={handleSelect}
      googleCallbackName='initGoogleCallback'
    />
  );
};

export default MapPlaceComplete;
