

import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PiCamera } from "react-icons/pi";
import { getCountryCallingCode } from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../../api/User/Update';
import Button from '../../../components/Buttons/Button';
import { UserContext } from '../../../components/Contexts/AppUserProvider';
import Icon from '../../../components/Icon/Icon';
import InputStaying from '../../../components/Staying/Input';
import TextInput from '../../../components/TextInput/TextInput';
import Title from '../../../components/Title/Title';
import routesConfig from '../../../configs/routesConfig';
import useRegisterModalUploadAvatar from '../../../hooks/Profile/useRegisterModalUploadAvatar';
import SideBar from '../SideBar/SideBar';
import { validUrl } from '../../../Regexs/Validate';

const Information = () => {
    const {t} = useTranslation();
    const navigate = useNavigate()
    const {user,setUser,token, userLoading} = useContext(UserContext)
    const {onOpen} = useRegisterModalUploadAvatar();
    const [active, setActive] = useState("")
    const [countryCode, setCountryCode] = useState("VN");
    const [countryValue, setCountryValue] = useState("84");
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!userLoading && !Object.keys(user).length > 0) {
            navigate(routesConfig.home)
            return;
        }
        setCurrentUser(user)
    }, [user,userLoading,navigate])

    useEffect(() => {
        if (Object.keys(currentUser).length > 0) {
            setCurrentUser(prev => {
                if (prev.dob && prev.dob.length > 0) {
                    const [year, month, day] = prev.dob.split('-');
                    return { ...prev, dob: { year, month, day } };
                }
                if (prev.gender && prev.gender.length > 0) {
                    return { ...prev, gender: { gender: prev.gender } };
                }
                return prev;
            });
        }
    }, [currentUser]);

    const formatDateOfBirth = (dob) => {
        if(!dob) return;
        const { day, month, year } = dob;
        return `${year}-${month}-${day}`;
    };

    const items = [
        {
            Title: t("Profile.information.name"),
            current: currentUser?.firstName + " " + currentUser?.lastName || "" ,
            menu: [
                {
                    title: t("Profile.information.firstName"),
                    name: "firstName",
                    type: "input",
                    typeof: "text",
                    value: currentUser?.firstName || ""
                },
                {
                    title: t("Profile.information.lastName"),
                    name: "lastName",
                    type: "input",
                    typeof: "text",
                    value: currentUser?.lastName || ""
                },
            ],
            active: "name",
            cancel: t("Profile.information.cancel"), 
            action: t("Profile.information.edit"),
            submit: t("Profile.information.save"),
        },
        {
            Title: t("Profile.information.email"),
            current: currentUser?.email,
            menu: [
                {
                    title: t("Profile.information.email"),
                    name: "email",
                    type: "input",
                    typeof: "email",
                    value: currentUser?.email || ""
                },
            ],
            disabled: true,
            active: "emailAddress",
            cancel: t("Profile.information.cancel"), 
            action: t("Profile.information.edit"),
            submit: t("Profile.information.save"),
        },
        {
            Title: t("Profile.information.phoneNumber"),
            current: currentUser?.phoneNumber || t("Profile.information.notPhoneNumber"),
            menu: [
                {
                    title: t("Profile.information.phoneNumber"),
                    name: "phoneNumber",
                    type: "input",
                    typeof: "number",
                    value: currentUser?.phoneNumber || ""
                    
                },
            ],
            active: "phoneNumber",
            cancel: t("Profile.information.cancel"), 
            action: t("Profile.information.edit"),
            submit: t("Profile.information.save"),
        },
        {
            Title: t("Profile.information.dateOfBirth"),
            current: formatDateOfBirth(currentUser?.dob || "")  || t("Profile.information.notDOB"),
            menu: [
                {
                    title: t("Profile.information.dateOfBirth"),
                    typeof: "group",
                    name: "dob",
                    group: [
                        {
                            placeHolder: "DD",
                            type: "input",
                            typeof: "text",
                            name: "day",
                            value:  currentUser?.dob?.day || ""
                        },
                        {
                            type: "select",
                            name: "month",
                            value:  currentUser?.dob?.month || "01",
                            data: [
                                {
                                    value:  "01",
                                    name: t("months.January"),
                                },
                                {
                                    value:  "02",
                                    name: t("months.February"),
                                },
                                {
                                    value:  "03",
                                    name: t("months.March"),
                                },
                                {
                                    value:  "04",
                                    name: t("months.April"),
                                },
                                {
                                    value:  "05",
                                    name: t("months.May"),
                                },
                                {
                                    value:  "06",
                                    name: t("months.June"),
                                },
                                {
                                    value:  "07",
                                    name: t("months.July"),
                                },
                                {
                                    value:  "08",
                                    name: t("months.August"),
                                },
                                {
                                    value:  "09",
                                    name: t("months.September"),
                                },
                                {
                                    value:  "10",
                                    name: t("months.October"),
                                },
                                {
                                    value:  "11",
                                    name: t("months.November"),
                                },
                                {
                                    value:  "12",
                                    name: t("months.December"),
                                },
  
                            ]
                        },
                        {
                            placeHolder: "YYYY",
                            type: "input",
                            typeof: "text",
                            name: "year",
                            value:  currentUser?.dob?.year || "",
                        }
                    ]
                },
            ],
            active: "dob",
            cancel: t("Profile.information.cancel"), 
            action: t("Profile.information.edit"),
            submit: t("Profile.information.save"),
        },
        {
            Title: t("Profile.information.gender"),
            current: currentUser?.gender?.gender || t("Profile.information.notGender"),
            menu: [
                {
                    title: t("Profile.information.gender"),
                    typeof: "group",
                    name: "gender",
                    group: [
                        {
                            type: "select",
                            name: "gender",
                            value: currentUser?.gender?.gender || "Male",
                            data: [
                                {
                                    value: "Male",
                                    name: t("Profile.information.male"),
                                },
                                {
                                    value: "Female",
                                    name: t("Profile.information.female"),
                                },
                                {
                                    value: "Other",
                                    name: t("Profile.information.other"),
                                }
                            ]
                        }
                    ]
                },
               
            ],
            active: "gender",
            cancel: t("Profile.information.cancel"), 
            action: t("Profile.information.edit"),
            submit: t("Profile.information.save"),
        },
        {
            Title: t("Profile.information.address"),
            current: currentUser?.address || t("Profile.information.notAddress"),
            menu: [
                {
                    title: t("Profile.information.address"),
                    name: "address",
                    type: "input",
                    typeof: "text",
                    value: currentUser?.address || ""
                    
                },
            ],
            active: "address",
            cancel: t("Profile.information.cancel"), 
            action: t("Profile.information.edit"),
            submit: t("Profile.information.save"),
        },
    ]

    const handleActive = (ac) => {
        setActive(ac)
    }

    const handleCancel = () => {
        setActive("")
    }

    const handleInputChange = (e, name) => {
        const { value } = e.target;
        setCurrentUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleGroupChange = (e, name, key) => {
        const { value } = e.target;
        setCurrentUser(prevUser => ({
            ...prevUser,
            [key]: {
                ...prevUser[key],
                [name]: value
            }
        }));
    };

    const handleSave = async() => {
        const data = {
            firstName: currentUser?.firstName,
            lastName: currentUser?.lastName,
            dob: formatDateOfBirth(currentUser?.dob || "") || "",
            phoneNumber: currentUser?.phoneNumber,
            gender: currentUser?.gender?.gender,
            address: currentUser?.address,
        }

        try {
            setLoading(true);
            await updateUser(data,token);
            const updatedUser = {
                ...currentUser,
                dob: formatDateOfBirth(currentUser?.dob || "") || "",
                gender: currentUser?.gender?.gender || "",
            }
            setUser(updatedUser);
            setLoading(false);
            setActive("")
        } catch (error) {
            setLoading(true);
        }
    }

    const handleSelectCountry = (e) => {
        const selectedCountryCode = e.target.value;
        setCountryCode(selectedCountryCode);
        setCountryValue(getCountryCallingCode(selectedCountryCode));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSave();
        }
    };

    const handleShowModalUploadAvatar = () => {
        onOpen();
    }

    return (
        <div className='w-full'>
            <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
                <div className='flex flex-row w-full'>
                    <SideBar/>

                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col gap-2'>
                                <Title title={t("Profile.information.title")} fontBold extraLarge9 nowrap={false}/>
                                <Title title={t("Profile.information.subTitle")} xxl nowrap={false}/>
                            </div>

                            <div className='hover:bg-gray-100 p-[12px_6px_12px_6px] rounded-md cursor-pointer duration-200' onClick={handleShowModalUploadAvatar}>
                                <div className={`${!validUrl(currentUser?.avatar) ? 'bg-gray-700' : 'bg-transparent'} relative flex w-[64px] h-[64px] rounded-full overflow-hidden border-[2px] border-secondary-50`}>
                                    {validUrl(currentUser?.avatar) && <img src={currentUser?.avatar} className="w-full h-full object-cover"/>}
                                    <div className='absolute bottom-0 left-0 flex justify-center items-center w-full text-white'>
                                        <Icon icon={PiCamera} size={18} classIcon="text-white after:opacity-60 after:text-white after:h-[20px] after:bg-[#6b6b6b] after:absolute after:bottom-0 after:w-full after:left-0"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {items.map((item,index) => (
                                <div key={index} className={`flex flex-row justify-between p-[16px_0_16px_0] ${index === 0 ? 'border-t' : ''}  border-b`}>
                                    <div className='flex flex-row items-start w-full gap-4'>
                                        <div className="w-[146px]">
                                            <Title title={item?.Title} xxl nowrap={false}/>
                                        </div>
                                        {
                                            active === item?.active 
                                            ? 
                                            <div className='flex flex-row items-center gap-4 w-full mr-8'>
                                                {
                                                    item?.menu.map((menuItem,index) => (
                                                        <div key={index} className='flex flex-col gap-1 w-full'>
                                                            {
                                                                menuItem?.type === "input" 
                                                                &&  <div>
                                                                        <Title title={menuItem?.title} fontMedium xl nowrap={false}/>
                                                                        {
                                                                            menuItem?.typeof === "number" ?
                                                                            <InputStaying
                                                                            className="bg-transparent hover:bg-transparent rounded-[4px] w-full h-[35px] pt-1 pb-1 pr-[10px] outline-none text-primary-700 placeholder:text-primary-100 dark:placeholder:text-primary-50 dark:text-white font-normal text-[14px]"
                                                                            country="VN"
                                                                            type={menuItem?.typeof}
                                                                            countryCode={countryCode}
                                                                            sizeIcon={24}
                                                                            required
                                                                            value={menuItem?.value}
                                                                            countryValue={"+" + countryValue}
                                                                            handleSelectCountry={handleSelectCountry}
                                                                            onChange={e => handleInputChange(e, menuItem?.name)}
                                                                            onKeyDown={handleKeyDown}
                                                                            />
                                                                            :
                                                                            <TextInput name={menuItem?.name} type={menuItem?.typeof} value={menuItem?.value} onKeyDown={handleKeyDown} onChange={e => handleInputChange(e, menuItem?.name)}/>
                                                                        }
                                        
                                                                    </div>
                                                            }
                                                            {
                                                                menuItem?.typeof === "group"
                                                                &&  <div>
                                                                    <Title title={menuItem?.title} fontMedium xl/>
                                                                    <div className='flex flex-row w-full gap-4'>
                                                                        {
                                                                            menuItem?.group.map((g,index) => (
                                                                                <div key={index} className='flex flex-row w-full'>
                                                                                        {g?.type === "input" && 
                                                                                         <TextInput name={g?.name} type={g?.typeof} value={g?.value} placeholder={g?.placeHolder} onKeyDown={handleKeyDown} onChange={e => handleGroupChange(e, g?.name, item.menu[0].name)}
                                                                                         />   
                                                                                        }
                                                                                        {g?.type === "select" && 
                                                                                        <select 
                                                                                        value={g?.value}
                                                                                        onChange={e => handleGroupChange(e, g?.name, item.menu[0].name)}
                                                                                        className="w-full h-[36.6px] border border-gray-300 rounded-[4px] focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] focus:outline-none duration-200">
                                                                                            {
                                                                                                g?.data &&
                                                                                                g?.data.map((item, index) => (
                                                                                                    <option key={index} value={item?.value}>
                                                                                                        {item?.name}
                                                                                                    </option>
                                                                                                    ))
                                                                                            }
                                                                                        </select>
                                                                                        }
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                    </div> 
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            : 
                                            <div className='w-full'><Title title={item?.current} xxl /></div>
                                        }
                                    </div>

                                    <div className='flex flex-col items-ebd gap-8'>
                                        {
                                            active === item?.active
                                            ? 
                                            <>
                                                <Button title={item?.cancel} disabled={loading} className={` rounded-sm duration-200 p-1 ${loading ? 'cursor-not-allowed text-gray-500 bg-transparent' : "text-hotel-50 hover:bg-hotel-25"}`} xl fontMedium onClick={() => handleCancel(item?.active)}/>
                                                <Button title={item?.submit} disabled={loading} loading={loading} classLoading="h-[16px] w-[16px]" background className="p-1 rounded-sm" classButton="w-full justify-center" xl fontMedium onClick={() => handleSave(item)}/>
                                            </> 
                                            :
                                            <>{!item?.disabled && <Button title={item?.action} disabled={active.length > 0 && active != item?.active} className={`p-2 rounded-sm duration-200 ${active.length > 0 && active != item?.active ? 'cursor-not-allowed text-gray-500 bg-transparent' : 'text-hotel-50 hover:bg-hotel-25'}`} xl fontMedium onClick={() => handleActive(item?.active)}/>}</>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

Information.propTypes = {}

export default Information