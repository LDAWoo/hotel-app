import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbPhotoPlus } from "react-icons/tb";
import { MdOutlineFactCheck } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import routesConfig from "../../configs/routesConfig";

export const OverviewData = [
  {
    id: 1,
    step: "Step 1",
    title: "Property details",
    subTitle: "The basics. Add your property name, address, facilities and more",
    nameButton: "Edit",
    icon: BsFillCheckCircleFill,
    url: "",
  },
  {
    id: 2,
    step: "Step 2",
    title: "Room",
    subTitle: "Tell us about your first room. Once you've set one up you can add more",
    nameButton: "Add room",
    icon: BiBed,
    url: routesConfig.becomeAHostAddRoom,
  },
  {
    id: 3,
    step: "Step 3",
    title: "Photos",
    subTitle: "Share some photos of your property so guests know what to expect",
    nameButton: "Add photos",
    icon: TbPhotoPlus,
    url: routesConfig.becomeAHostPhoto,
  },
  {
    id: 4,
    step: "Step 4",
    title: "Final steps",
    subTitle: "Set up payments and invoicing before you open for booking",
    nameButton: "Complete registration",
    icon: MdOutlineFactCheck,
    url: routesConfig.becomeAHostHotelGroupDiscount,
  },
];
