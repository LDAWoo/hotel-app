

import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PiCamera } from "react-icons/pi";
import { getCountryCallingCode } from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom';
import { validUrl, validateName } from '../../../Regexs/Validate';
import { validateNumber, validatePhone } from '../../../Regexs/Validate/Phone';
import { updateUser } from '../../../api/User/Update';
import Button from '../../../components/Buttons/Button';
import { UserContext } from '../../../components/Contexts/AppUserProvider';
import Icon from '../../../components/Icon/Icon';
import InputStaying from '../../../components/Staying/Input';
import TextError from '../../../components/TextError/TextError';
import TextInput from '../../../components/TextInput/TextInput';
import Title from '../../../components/Title/Title';
import routesConfig from '../../../configs/routesConfig';
import useRegisterModalUploadAvatar from '../../../hooks/Profile/useRegisterModalUploadAvatar';
import SideBar from '../SideBar/SideBar';

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
    const [userError, setUserError] = useState({})

    useEffect(() => {
        refreshUser();
    }, [user,userLoading,navigate])

    const refreshUser = () => {
        if(!userLoading && !Object.keys(user).length > 0) {
            navigate(routesConfig.home)
            return;
        }
        setCurrentUser(user)
    }

    useEffect(() => {
        if (Object.keys(currentUser).length > 0) {
            setCurrentUser(prev => {
                if (prev.dob && prev.dob.length > 0) {
                    const [year, month, day] = prev.dob.split('-');
                    return { ...prev, dob: { year, month, day } };
                }
                if(!prev.dob && prev.dob.length === 0 ){
                    return { ...prev, dob: { year: "", month: "01", day: "" } };
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
                    value: currentUser?.firstName || "",
                    error: userError?.firstName || "",
                },
                {
                    title: t("Profile.information.lastName"),
                    name: "lastName",
                    type: "input",
                    typeof: "text",
                    value: currentUser?.lastName || "",
                    error: userError?.lastName || "",
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
                    value: currentUser?.phoneNumber || "",
                    error: userError?.phoneNumber || "",
                },
            ],
            active: "phoneNumber",
            cancel: t("Profile.information.cancel"), 
            action: t("Profile.information.edit"),
            submit: t("Profile.information.save"),
        },
        {
            Title: t("Profile.information.dateOfBirth"),
            current: currentUser?.dob && currentUser?.dob?.day && currentUser?.dob?.day.length > 0 && currentUser?.dob.month && currentUser?.dob.month.length > 0 && currentUser?.dob?.year &&currentUser?.dob?.year.length > 0 && formatDateOfBirth(currentUser?.dob || "")  || t("Profile.information.notDOB"),
            menu: [
                {
                    title: t("Profile.information.dateOfBirth"),
                    typeof: "group",
                    name: "dob",
                    error: userError?.date || "",
                    group: [
                        {
                            placeHolder: "DD",
                            type: "input",
                            typeof: "text",
                            name: "day",
                            value:  currentUser?.dob?.day || "",
                            error: userError?.day || "",
                        },
                        {
                            type: "select",
                            name: "month",
                            value:  currentUser?.dob?.month || "01",
                            error: userError?.month || "",
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
                            error: userError?.year || "",
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
            current: currentUser?.gender?.gender !== "Male" && currentUser?.gender?.gender !== "Female" && currentUser?.gender?.gender !== "Other" ?  t("Profile.information.notGender") : currentUser?.gender?.gender,
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
            current: currentUser?.address !== "No address!.." ? currentUser?.address : t("Profile.information.notAddress"),
            menu: [
                {
                    title: t("Profile.information.address"),
                    name: "address",
                    type: "input",
                    typeof: "textOrNumber",
                    value: currentUser?.address !== "No address!.." ? currentUser?.address : "",
                    error: userError?.address || "",
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
        refreshUser();
        setUserError({})
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

    const handleSave = async(ac) => {
        if(!validate(ac)) return;
        let dateOfBirth = "";

        if(currentUser?.dob?.day.length > 0 && currentUser?.dob?.month.length > 0 && currentUser?.dob?.year.length > 0) {
            dateOfBirth = formatDateOfBirth(currentUser?.dob);
        }

        const data = {
            firstName: currentUser?.firstName.trim(),
            lastName: currentUser?.lastName.trim(),
            dob: dateOfBirth,
            phoneNumber: currentUser?.phoneNumber.trim(),
            gender: currentUser?.gender?.gender,
            address: currentUser?.address.trim(),
        }

        try {
            setLoading(true);
            await updateUser(data,token);
            const updatedUser = {
                ...currentUser,
                dob: dateOfBirth,
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

    const handleKeyPress = (e,type,ac) => {
        if(type === "text") {
            if (!validateName(e.key)) {
                e.preventDefault();
            }
        } 

        if(type === "number") {
            if(!validateNumber(e.key)) {
                e.preventDefault();
            }
        }
        
        if (e.key === "Enter") {
            handleSave(ac);
        }
    };

    const handleShowModalUploadAvatar = () => {
        onOpen();
    }

    const validate = (ac) => {
        let isValid = true;
        switch (ac.active) {
            case "name": {
                if (!currentUser?.firstName || currentUser?.firstName.trim() === "") {
                    setUserError((prev) => ({
                        ...prev,
                        firstName: t("Error.Account.firstNameNotBlank")
                    }));
                    isValid = false;
                }else{
                    setUserError((prev) => ({
                       ...prev,
                        firstName: ""
                    }));
                }
        
                if (!currentUser?.lastName || currentUser?.lastName.trim() === "") {
                    setUserError((prev) => ({
                       ...prev,
                        lastName: t("Error.Account.lastNameNotBlank")
                    }));
                    isValid = false;
                }else{
                    setUserError((prev) => ({
                       ...prev,
                        lastName: ""
                    }));
                }
                return isValid;
            }
            
            case "phoneNumber":{
                if (!currentUser?.phoneNumber || currentUser?.phoneNumber.trim() === "") {
                    setUserError((prev) => ({
                       ...prev,
                        phoneNumber: t("Error.Account.phoneNumberNotBlank")
                    }));
                    isValid = false;
                }else{
                    if(!validatePhone(currentUser?.phoneNumber)){
                        setUserError((prev) => ({
                           ...prev,
                            phoneNumber: t("Error.Account.phoneNumberNotPhone")
                        }));
                        isValid = false;
                    }else{
                        setUserError((prev) => ({
                           ...prev,
                            phoneNumber: ""
                        }));
                    }
                }
                return isValid
            }

            case "dob":{
                if (currentUser?.dob.day === "") {
                    setUserError((prev) => ({
                        ...prev,
                        day: t("Error.Account.birthdayNotBlank"),
                        date: t("Error.Account.birthdayNotBlank"),
                    }));
                    isValid = false;
                } else {
                    if(currentUser?.dob.day.length > 2){
                        setUserError((prev) => ({
                           ...prev,
                            day: t("Error.Account.dayNotDay"),
                            date: t("Error.Account.dayNotDay"),
                        }));
                        isValid = false;
                    }else{
                        setUserError((prev) => ({
                            ...prev,
                             day: "",
                        }));
                        if(currentUser?.dob.year === ""){
                            setUserError((prev) => ({
                                ...prev,
                                year: t("Error.Account.birthdayNotBlank"),
                                date: t("Error.Account.birthdayNotBlank"),
                            }));
                            isValid = false;
                        }else{
                            setUserError((prev) => ({
                               ...prev,
                                year: "",
                            }));
            
                            let year = parseInt(currentUser?.dob?.year);
                            if(year < 100){
                                year = 1900 - year;
                            }
            
                            const dob = new Date(year, currentUser?.dob?.month - 1, currentUser?.dob?.day);
                            if (isNaN(dob.getTime())) {
                                setUserError((prev) => ({
                                    ...prev,
                                    date: t("Error.Account.dateNotDate"),
                                }));
                                isValid = false;
                            } else {
                                const currentDate = new Date();
                                const minValidDate = new Date(currentDate.getFullYear() - 16, currentDate.getMonth(), currentDate.getDate());
                                if (dob >= currentDate || dob >= minValidDate) {
                                    setUserError((prev) => ({
                                        ...prev,
                                        year: t("Error.Account.dateEnsureLeastSixteen"),
                                        date: t("Error.Account.dateEnsureLeastSixteen"),
                                    }));
                                    isValid = false;
                                } else {
                                    const minBirthDate = new Date(1900, 0, 1);
                                    if (dob < minBirthDate) {
                                        setUserError((prev) => ({
                                            ...prev,
                                            year: t("Error.Account.yearNotYear"),
                                            date: t("Error.Account.yearNotYear"),
                                        }));
                                        isValid = false;
                                    } else {
                                        const daysInMonth = new Date(currentUser?.dob?.year, currentUser?.dob?.month, 0).getDate();
                                        if (currentUser?.dob?.day > daysInMonth) {
                                            setUserError((prev) => ({
                                                ...prev,
                                                day: t("Error.Account.dayNotMonth"),
                                                date: t("Error.Account.dayNotMonth"),
                                            }));
                                            isValid = false;
                                        } else {
                                            setUserError((prev) => ({
                                                ...prev,
                                                day: "",
                                                month: "",
                                                year: "",
                                                date: "",
                                            }));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return isValid;
            }

            case "address": {
                if (!currentUser?.address || currentUser?.address.trim() === "") {
                    setUserError((prev) => ({
                       ...prev,
                        address: t("Error.Account.addressNotBlank")
                    }));
                    isValid = false;
                }else{
                    setUserError((prev) => ({
                       ...prev,
                        address: ""
                    }));
                }
                return isValid;
            }

            default:
            return isValid
        }
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
                                                                            onKeyPress={(e)=> handleKeyPress(e,menuItem?.typeof,item?.active)}
                                                                            />
                                                                            :
                                                                            <TextInput name={menuItem?.name} error={menuItem.error.length > 0} sizeIcon={24} type={menuItem?.typeof} value={menuItem?.value} onKeyPress={(e) => handleKeyPress(e,menuItem?.typeof,item?.active)} onChange={e => handleInputChange(e, menuItem?.name)}/>
                                                                        }
                                                                        
                                                                        <div className='min-h-[24px]'>
                                                                            <TextError error={menuItem.error || ""}/>
                                                                        </div>
                                                                    </div>
                                                            }
                                                            {
                                                                menuItem?.typeof === "group"
                                                                &&  <div>
                                                                    <Title title={menuItem?.title} fontMedium xl/>
                                                                    <div className='flex flex-row w-full gap-4'>
                                                                        {
                                                                            menuItem?.group.map((g,index) => (
                                                                                <div key={index} className='flex flex-col w-full'>
                                                                                        {g?.type === "input" && 
                                                                                         <TextInput error={g?.error && g?.error.length > 0} sizeIcon={24} name={g?.name} type={g?.typeof} value={g?.value} placeholder={g?.placeHolder} onKeyPress={(e) => handleKeyPress(e,"number",item?.active)} onChange={e => handleGroupChange(e, g?.name, item.menu[0].name)}
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
                                                                    <div className='min-h-[24px]'>
                                                                            <TextError error={menuItem?.error || ""}/>
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
                                                <Button title={item?.submit} disabled={loading} loading={loading} classLoading="h-[16px] w-[16px]" background className="p-1 rounded-sm" classButton="w-full justify-center" xl fontMedium onClick={() => handleSave(item,item?.active)}/>
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