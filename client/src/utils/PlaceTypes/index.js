import { AiOutlineShop } from 'react-icons/ai';
import { BiBook, BiBookOpen, BiBuildings, BiLibrary, BiSolidTree } from 'react-icons/bi';
import { BsBriefcaseFill, BsFillCupFill, BsFillPersonFill } from 'react-icons/bs';
import { CgArrowTopRightR, CgGym } from 'react-icons/cg';
import { FaBath, FaBed, FaBeer, FaBicycle, FaBuilding, FaCampground, FaChurch, FaCity, FaCompass, FaCouch, FaCreditCard, FaCut, FaFire, FaFootballBall, FaGasPump, FaGavel, FaGlobe, FaHamburger, FaHippo, FaHome, FaHospital, FaKey, FaLandmark, FaMapMarkerAlt, FaMapPin, FaMoneyBill, FaMoneyBillWave, FaMosque, FaMountain, FaMusic, FaNeos, FaParking, FaPaw, FaPhotoVideo, FaPizzaSlice, FaPlaceOfWorship, FaRoad, FaRoute, FaRulerHorizontal, FaShoppingBasket, FaShoppingCart, FaSocks, FaStethoscope, FaSuitcaseRolling, FaSynagogue, FaTools, FaTooth, FaTree, FaUniversity, FaUtensils, FaWarehouse, FaWater, FaWrench } from 'react-icons/fa';
import { GiCastle, GiJewelCrown, GiLilyPads, GiMailbox, GiPoliceCar, GiRaven, GiTwoCoins, GiWineBottle } from 'react-icons/gi';
import { MdAirportShuttle, MdBakeryDining, MdCasino, MdMuseum } from 'react-icons/md';
import { RiBankLine, RiBuildingLine, RiBus2Line, RiCarLine, RiHospitalLine, RiMailLine, RiMedicineBottleLine, RiMovie2Line, RiSchoolLine, RiStarLine, RiStethoscopeLine, RiSubwayLine, RiTaxiWifiLine, RiTrainLine } from 'react-icons/ri';

export const googleMapPlaceTypes = [
    {
        type: 'accounting',
        icon: FaMoneyBill,
        name: 'Accounting',
    },
    {
        type: 'airport',
        icon: MdAirportShuttle,
        name: 'Airport',
    },
    {
        type: 'amusement_park',
        icon: RiBuildingLine,
        name: 'Amusement Park',
    },
    {
        type: 'aquarium',
        icon: GiTwoCoins,
        name: 'Aquarium',
    },
    {
        type: 'art_gallery',
        icon: BiLibrary,
        name: 'Art Gallery',
    },
    {
        type: 'atm',
        icon: FaCreditCard,
        name: 'ATM',
    },
    {
        type: 'bakery',
        icon: MdBakeryDining,
        name: 'Bakery',
    },
    {
        type: 'bank',
        icon: RiBankLine,
        name: 'Bank',
    },
    {
        type: 'bar',
        icon: FaBeer,
        name: 'Bar',
    },
    {
        type: 'beauty_salon',
        icon: BsFillPersonFill,
        name: 'Beauty Salon',
    },
    {
        type: 'bicycle_store',
        icon: FaBicycle,
        name: 'Bicycle Store',
    },
    {
        type: 'book_store',
        icon: BiBookOpen,
        name: 'Book Store',
    },
    {
        type: 'bowling_alley',
        icon: GiCastle,
        name: 'Bowling Alley',
    },
    {
        type: 'bus_station',
        icon: RiBus2Line,
        name: 'Bus Station',
    },
    {
        type: 'cafe',
        icon: BsFillCupFill,
        name: 'Cafe',
    },
    {
        type: 'campground',
        icon: BiSolidTree,
        name: 'Campground',
    },
    {
        type: 'car_dealer',
        icon: AiOutlineShop,
        name: 'Car Dealer',
    },
    {
        type: 'car_rental',
        icon: RiCarLine,
        name: 'Car Rental',
    },
    {
        type: 'car_repair',
        icon: FaTools,
        name: 'Car Repair',
    },
    {
        type: 'car_wash',
        icon: FaWater,
        name: 'Car Wash',
    },
    {
        type: 'casino',
        icon: MdCasino,
        name: 'Casino',
    },
    {
        type: 'cemetery',
        icon: GiRaven,
        name: 'Cemetery',
    },
    {
        type: 'church',
        icon: FaChurch,
        name: 'Church',
    },
    {
        type: 'city_hall',
        icon: FaCity,
        name: 'City Hall',
    },
    {
        type: 'clothing_store',
        icon: AiOutlineShop,
        name: 'Clothing Store',
    },
    {
        type: 'convenience_store',
        icon: AiOutlineShop,
        name: 'Convenience Store',
    },
    {
        type: 'courthouse',
        icon: BiBuildings,
        name: 'Courthouse',
    },
    {
        type: 'dentist',
        icon: FaTooth,
        name: 'Dentist',
    },
    {
        type: 'department_store',
        icon: AiOutlineShop,
        name: 'Department Store',
    },
    {
        type: 'doctor',
        icon: RiStethoscopeLine,
        name: 'Doctor',
    },
    {
        type: 'drugstore',
        icon: RiMedicineBottleLine,
        name: 'Drugstore',
    },
    {
        type: 'electrician',
        icon: FaTools,
        name: 'Electrician',
    },
    {
        type: 'electronics_store',
        icon: AiOutlineShop,
        name: 'Electronics Store',
    },
    {
        type: 'embassy',
        icon: FaBuilding,
        name: 'Embassy',
    },
    {
        type: 'fire_station',
        icon: FaFire,
        name: 'Fire Station',
    },
    {
        type: 'florist',
        icon: GiLilyPads,
        name: 'Florist',
    },
    {
        type: 'funeral_home',
        icon: FaChurch,
        name: 'Funeral Home',
    },
    {
        type: 'furniture_store',
        icon: FaCouch,
        name: 'Furniture Store',
    },
    {
        type: 'gas_station',
        icon: FaGasPump,
        name: 'Gas Station',
    },
    {
        type: 'gym',
        icon: CgGym,
        name: 'Gym',
    },
    {
        type: 'hair_care',
        icon: FaCut,
        name: 'Hair Care',
    },
    {
        type: 'hardware_store',
        icon: FaTools,
        name: 'Hardware Store',
    },
    {
        type: 'hindu_temple',
        icon: FaPlaceOfWorship,
        name: 'Hindu Temple',
    },
    {
        type: 'home_goods_store',
        icon: FaHome,
        name: 'Home Goods Store',
    },
    {
        type: 'hospital',
        icon: RiHospitalLine,
        name: 'Hospital',
    },
    {
        type: 'insurance_agency',
        icon: BsFillPersonFill,
        name: 'Insurance Agency',
    },
    {
        type: 'jewelry_store',
        icon: GiJewelCrown,
        name: 'Jewelry Store',
    },
    {
        type: 'laundry',
        icon: FaSocks,
        name: 'Laundry',
    },
    {
        type: 'lawyer',
        icon: FaGavel,
        name: 'Lawyer',
    },
    {
        type: 'library',
        icon: BiBook,
        name: 'Library',
    },
    {
        type: 'liquor_store',
        icon: GiWineBottle,
        name: 'Liquor Store',
    },
    {
        type: 'local_government_office',
        icon: FaCity,
        name: 'Local Government Office',
    },
    {
        type: 'locksmith',
        icon: FaKey,
        name: 'Locksmith',
    },
    {
        type: 'lodging',
        icon: FaBed,
        name: 'Lodging',
    },
    {
        type: 'meal_delivery',
        icon: FaPizzaSlice,
        name: 'Meal Delivery',
    },
    {
        type: 'meal_takeaway',
        icon: FaHamburger,
        name: 'Meal Takeaway',
    },
    {
        type: 'mosque',
        icon: FaMosque,
        name: 'Mosque',
    },
    {
        type: 'movie_rental',
        icon: RiMovie2Line,
        name: 'Movie Rental',
    },
    {
        type: 'movie_theater',
        icon: RiMovie2Line,
        name: 'Movie Theater',
    },
    {
        type: 'moving_company',
        icon: BsBriefcaseFill,
        name: 'Moving Company',
    },
    {
        type: 'museum',
        icon: MdMuseum,
        name: 'Museum',
    },
    {
        type: 'night_club',
        icon: FaMusic,
        name: 'Night Club',
    },
    {
        type: 'painter',
        icon: CgArrowTopRightR,
        name: 'Painter',
    },
    {
        type: 'park',
        icon: FaTree,
        name: 'Park',
    },
    {
        type: 'parking',
        icon: FaParking,
        name: 'Parking',
    },
    {
        type: 'pet_store',
        icon: FaPaw,
        name: 'Pet Store',
    },
    {
        type: 'pharmacy',
        icon: RiMedicineBottleLine,
        name: 'Pharmacy',
    },
    {
        type: 'physiotherapist',
        icon: FaStethoscope,
        name: 'Physiotherapist',
    },
    {
        type: 'plumber',
        icon: FaWrench,
        name: 'Plumber',
    },
    {
        type: 'police',
        icon: GiPoliceCar,
        name: 'Police',
    },
    {
        type: 'post_office',
        icon: RiMailLine,
        name: 'Post Office',
    },
    {
        type: 'primary_school',
        icon: RiSchoolLine,
        name: 'Primary School',
    },
    {
        type: 'real_estate_agency',
        icon: FaBuilding,
        name: 'Real Estate Agency',
    },
    {
        type: 'restaurant',
        icon: FaUtensils,
        name: 'Restaurant',
    },
    {
        type: 'roofing_contractor',
        icon: FaTools,
        name: 'Roofing Contractor',
    },
    {
        type: 'rv_park',
        icon: FaCampground,
        name: 'RV Park',
    },
    {
        type: 'school',
        icon: RiSchoolLine,
        name: 'School',
    },
    {
        type: 'secondary_school',
        icon: RiSchoolLine,
        name: 'Secondary School',
    },
    {
        type: 'shoe_store',
        icon: AiOutlineShop,
        name: 'Shoe Store',
    },
    {
        type: 'shopping_mall',
        icon: FaShoppingCart,
        name: 'Shopping Mall',
    },
    {
        type: 'spa',
        icon: FaBath,
        name: 'Spa',
    },
    {
        type: 'stadium',
        icon: FaFootballBall,
        name: 'Stadium',
    },
    {
        type: 'storage',
        icon: FaWarehouse,
        name: 'Storage',
    },
    {
        type: 'store',
        icon: AiOutlineShop,
        name: 'Store',
    },
    {
        type: 'subway_station',
        icon: RiSubwayLine,
        name: 'Subway Station',
    },
    {
        type: 'supermarket',
        icon: FaShoppingBasket,
        name: 'Supermarket',
    },
    {
        type: 'synagogue',
        icon: FaSynagogue,
        name: 'Synagogue',
    },
    {
        type: 'taxi_stand',
        icon: RiTaxiWifiLine,
        name: 'Taxi Stand',
    },
    {
        type: 'tourist_attraction',
        icon: RiStarLine,
        name: 'Tourist Attraction',
    },
    {
        type: 'train_station',
        icon: RiTrainLine,
        name: 'Train Station',
    },
    {
        type: 'transit_station',
        icon: RiTrainLine,
        name: 'Transit Station',
    },
    {
        type: 'travel_agency',
        icon: FaSuitcaseRolling,
        name: 'Travel Agency',
    },
    {
        type: 'university',
        icon: FaUniversity,
        name: 'University',
    },
    {
        type: 'veterinary_care',
        icon: FaPaw,
        name: 'Veterinary Care',
    },
    {
        type: 'zoo',
        icon: FaHippo,
        name: 'Zoo',
    },
    {
        type: 'administrative_area_level_1',
        icon: FaMapMarkerAlt,
        name: 'Administrative Area Level 1',
    },
    {
        type: 'administrative_area_level_2',
        icon: FaMapMarkerAlt,
        name: 'Administrative Area Level 2',
    },
    {
        type: 'administrative_area_level_3',
        icon: FaMapMarkerAlt,
        name: 'Administrative Area Level 3',
    },
    {
        type: 'administrative_area_level_4',
        icon: FaMapMarkerAlt,
        name: 'Administrative Area Level 4',
    },
    {
        type: 'administrative_area_level_5',
        icon: FaMapMarkerAlt,
        name: 'Administrative Area Level 5',
    },
    {
        type: 'administrative_area_level_6',
        icon: FaMapMarkerAlt,
        name: 'Administrative Area Level 6',
    },
    {
        type: 'administrative_area_level_7',
        icon: FaMapMarkerAlt,
        name: 'Administrative Area Level 7',
    },
    {
        type: 'archipelago',
        icon: FaGlobe,
        name: 'Archipelago',
    },
    {
        type: 'colloquial_area',
        icon: FaCity,
        name: 'Colloquial Area',
    },
    {
        type: 'continent',
        icon: FaGlobe,
        name: 'Continent',
    },
    {
        type: 'country',
        icon: FaGlobe,
        name: 'Country',
    },
    {
        type: 'establishment',
        icon: FaBuilding,
        name: 'Establishment',
    },
    {
        type: 'finance',
        icon: FaMoneyBillWave,
        name: 'Finance',
    },
    {
        type: 'floor',
        icon: FaRulerHorizontal,
        name: 'Floor',
    },
    {
        type: 'food',
        icon: FaUtensils,
        name: 'Food',
    },
    {
        type: 'general_contractor',
        icon: FaBuilding,
        name: 'General Contractor',
    },
    {
        type: 'geocode',
        icon: FaMapMarkerAlt,
        name: 'Geocode',
    },
    {
        type: 'health',
        icon: FaHospital,
        name: 'Health',
    },
    {
        type: 'intersection',
        icon: FaCompass,
        name: 'Intersection',
    },
    {
        type: 'landmark',
        icon: FaLandmark,
        name: 'Landmark',
    },
    {
        type: 'locality',
        icon: FaCity,
        name: 'Locality',
    },
    {
        type: 'natural_feature',
        icon: FaMountain,
        name: 'Natural Feature',
    },
    {
        type: 'neighborhood',
        icon: FaNeos,
        name: 'Neighborhood',
    },
    {
        type: 'place_of_worship',
        icon: FaChurch,
        name: 'Place of Worship',
    },
    {
        type: 'plus_code',
        icon: FaMapPin,
        name: 'Plus Code',
    },
    {
        type: 'point_of_interest',
        icon: FaPhotoVideo,
        name: 'Point of Interest',
    },
    {
        type: 'political',
        icon: FaLandmark,
        name: 'Political',
    },
    {
        type: 'post_box',
        icon: GiMailbox,
        name: 'Post Box',
    },
    {
        type: 'postal_code',
        icon: FaMapMarkerAlt,
        name: 'Postal Code',
    },
    {
        type: 'postal_code_prefix',
        icon: FaMapMarkerAlt,
        name: 'Postal Code Prefix',
    },
    {
        type: 'postal_code_suffix',
        icon: FaMapMarkerAlt,
        name: 'Postal Code Suffix',
    },
    {
        type: 'postal_town',
        icon: FaCity,
        name: 'Postal Town',
    },
    {
        type: 'premise',
        icon: FaHome,
        name: 'Premise',
    },
    {
        type: 'room',
        icon: FaHome,
        name: 'Room',
    },
    {
        type: 'route',
        icon: FaRoute,
        name: 'Route',
    },
    {
        type: 'street_address',
        icon: FaRoad,
        name: 'Street Address',
    },
    {
        type: 'street_number',
        icon: FaRoad,
        name: 'Street Number',
    },
    {
        type: 'sublocality',
        icon: FaCity,
        name: 'Sublocality',
    },
    {
        type: 'sublocality_level_1',
        icon: FaCity,
        name: 'Sublocality Level 1',
    },
    {
        type: 'sublocality_level_2',
        icon: FaCity,
        name: 'Sublocality Level 2',
    },
    {
        type: 'sublocality_level_3',
        icon: FaCity,
        name: 'Sublocality Level 3',
    },
    {
        type: 'sublocality_level_4',
        icon: FaCity,
        name: 'Sublocality Level 4',
    },
    {
        type: 'sublocality_level_5',
        icon: FaCity,
        name: 'Sublocality Level 5',
    },
    {
        type: 'subpremise',
        icon: FaHome,
        name: 'Subpremise',
    },
    {
        type: 'town_square',
        icon: FaCity,
        name: 'Town Square',
    },
];
