import countryList from "country-list";
import i18next from "i18next";
import { Fragment, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { validateName } from "../../../../../Regexs/Validate";
import { validateEmail } from "../../../../../Regexs/Validate/Email";
import { validateNumber, validatePhone } from "../../../../../Regexs/Validate/Phone";
import { UserContext } from '../../../../../components/Contexts/AppUserProvider';
import Icon from "../../../../../components/Icon/Icon";
import SelectInput from "../../../../../components/SelectInput/SelectInput";
import InputStaying from "../../../../../components/Staying/Input";
import Title from "../../../../../components/Title/Title";
import useRegisterYourDetails from "../../../../../hooks/SecureBooking/useRegisterYourDetails";
import Control from "./Control";
import PropTypes from 'prop-types'

function YourDetails({data}) {
  const { user, userLoading } = useContext(UserContext);
  const {t} = useTranslation();
  const [currentUser, setCurrentUser] = useState({});
  const [userError , setUserError] = useState({});
  const {setField} = useRegisterYourDetails();

  useEffect(() => {
    if (data) {
      const keysToCheck = ["firstName", "lastName", "email", "phoneNumber","country"];
      const newData = { ...currentUser };

      Object.keys(data).forEach((key) => {
        if (keysToCheck.includes(key)) {
          newData[key] = data[key];
        }
      });

      setCurrentUser(newData);
    }

    if (!userLoading && Object.keys(user).length > 0 && !data?.firstName && !data?.lastName && !data?.email && !data?.phoneNumber && !data.country) {
      setCurrentUser(user);
    }
  }, [user, userLoading,data]);

  const getValueFromDataOrCurrentUser = (currentUserKey) => {
    const value = (currentUser && currentUser[currentUserKey]) || "";
    return value
  };

  const YourDetailsData = [
    {
      id: 1,
      type: "input",
      data: [
        {
          id: "firstName",
          name: t("Profile.information.firstName"),
          error: userError?.firstName || "",
          placeHolder: "",
          type: "text",
          value: getValueFromDataOrCurrentUser("firstName"),
        },
      ],
    },
    {
      id: 2,
      type: "input",
      data: [
        {
          id: "lastName",
          name: t("Profile.information.lastName"),
          error: userError?.lastName || "",
          placeHolder: "",
          type: "text",
          value: getValueFromDataOrCurrentUser("lastName"),
        },
      ],
    },
    {
      id: 3,
      type: "input",
      data: [
        {
          id: "email",
          name: t("Profile.information.email"),
          error: userError?.email || "",
          subName: t("Secure.Details.YourDetails.emailConfirm"),
          placeHolder: t("Secure.Details.YourDetails.emailPlaceholder"),
          type: "email",
          value: getValueFromDataOrCurrentUser("email"),
        },
      ],
    },
    {
      id: 4,
      type: "select",
      data: [
        {
          id: "country",
          error: userError?.country || "",
          name: t("Profile.information.country"),
          value: getValueFromDataOrCurrentUser("country"),
          data: countryList.getData(),
        },
      ],
    },
    {
      id: 5,
      type: "input",
      data: [
        {
          id: "phoneNumber",
          name: t("Profile.information.phoneNumber"),
          error: userError?.phoneNumber || "",
          subName: t("Secure.Details.YourDetails.needPhoneNumber"),
          type: "number",
          value: getValueFromDataOrCurrentUser("phoneNumber"),
        },
      ],
    },
  ];

  const handleChange = (id, value) => {
    setCurrentUser((prev) => ({
      ...prev,
      [id]: value,
    }))
  };

  const handleFocus = () => {
    setField("validation", false);
  }

  const handleBlur = () => {
    const valid = validate();
    setField("validation", valid);
  };

  const handleKeyPress = (e,type) => {
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
  };

  const validate = () => {
    let isValid = true;

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

      if(!currentUser.email || currentUser.email.trim() === ""){
        setUserError((prev) => ({
          ...prev,
          email: t("Error.Account.emailNotBlank")
        }))
        isValid = false;
      }else{
        if(!validateEmail(currentUser.email)){
          setUserError((prev) => ({
          ...prev,
            email: t("Error.Account.emailNotEmail")
          }))
          isValid = false;
        }else{
          setUserError((prev) => ({
            ...prev,
              email: ""
          }));
        }
      }

      if(!currentUser.country || currentUser?.country.trim() === ""){
        setUserError((prev) => ({
          ...prev,
          country: t("Error.Account.countryNotBlank")
        }))
        isValid = false;
      }else{
          setUserError((prev) => ({
          ...prev,
            country: ""
          }))
      }

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
      
    return isValid;
  }

  useEffect(() => {
    if(Object.keys(currentUser).length > 0){
      const valid = validate();
      setField("validation", valid);
    }
  },[i18next.language,currentUser])

  useEffect(() => {
    if(currentUser){
      Object.entries(currentUser).forEach(([field, value]) => {
        if (value) {
          setField(field, value);
        }
      });
    }
  },[currentUser])

  return (
    <div className='flex flex-col gap-4 w-full dark:text-white'>
      <Title title={t("Secure.Details.YourDetails.title")} fontBold extraLarge4 />
      <div className='grid grid-cols-1 2md:grid-cols-2 gap-4 w-full'>
        {YourDetailsData.map((item, index) => (
          <div key={index} className='flex flex-col w-full'>
            {item?.type == "input" && (
              <Fragment>
                {item?.data &&
                  item?.data.map((x, index) => {
                    const success = x?.error.length === 0
                    return (
                      <Fragment key={index}>
                        {success ? (
                          <div className='flex flex-row gap-1'>
                            <Title title={x?.name} fontBold xl nowrap={false} />
                            <abbr>*</abbr>
                          </div>
                        ) : (
                          <div className='flex flex-row gap-1'>
                            <Title
                              title={x?.error}
                              fontBold
                              xl
                              nowrap={false}
                              className='text-[#a30000] dark:text-error-100'
                            />
                            <abbr className='opacity-0'>*</abbr>
                          </div>
                        )}
                        <div className='relative w-full'>
                          <InputStaying
                            type={x?.type}
                            placeHolder={x?.placeHolder}
                            className={`rounded-md h-[36px] ${
                              success
                                  ? "focus:shadow-[0_0_0_1px_rgba(0,128,9,1)]"
                                  : "focus:shadow-[0_0_0_1px_rgba(204,0,0,1)]"
                            }`}
                            value={x?.value}
                            onFocus={() => handleFocus()}
                            onBlur={() => handleBlur()}
                            onChange={(e) =>
                              handleChange(x?.id, e.target.value, x?.country)
                            }
                            onKeyPress={(e) => handleKeyPress(e,x?.type)}
                          />
                            <Icon
                              classIcon={`absolute flex items-center justify-center top-0 right-0 rounded-tr-md rounded-br-md bottom-0 text-white ${
                                success ? "bg-success-50" : "bg-error-100"
                              }`}
                              icon={success ? BsCheck : IoIosClose}
                              size={24}
                            />
                          
                        </div>
                        {x?.subName && (
                          <Title
                            title={x?.subName}
                            xl
                            nowrap={false}
                            className='dark:text-primary-50'
                          />
                        )}
                      </Fragment>
                    );
                  })}
              </Fragment>
            )}
            {item?.type === "select" && (
              <>
                {item?.data &&
                  item?.data.map((x, index) => {
                    const success = x?.error.length === 0

                    return (
                      <Fragment key={index}>
                        {success ? (
                          <div className='flex flex-row gap-1'>
                            <Title title={x?.name} fontBold xl nowrap={false} />
                            <abbr>*</abbr>
                          </div>
                        ) : (
                          <div className='flex flex-row gap-1'>
                            <Title
                              title={x?.error}
                              fontBold
                              xl
                              nowrap={false}
                              className='text-[#a30000]'
                            />
                            <abbr className='opacity-0'>*</abbr>
                          </div>
                        )}
                        <SelectInput
                          onChange={(e) => handleChange(x?.id, e.target.value)}
                          onBlur={() => handleBlur(x?.id)}
                          value={x?.value}
                          className='h-[36px] rounded-md focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] mb-[0px]'
                        >
                          <option
                            className='text-[14px] text-primary-700 dark:text-white'
                            value=''
                          >
                            {t("Profile.information.countryRegion")}
                          </option>
                          {x?.data.map((country, index) => (
                            <option
                              key={index}
                              value={country.name}
                              className='text-[14px] text-primary-700 dark:text-white'
                            >
                              {country.name}
                            </option>
                          ))}
                        </SelectInput>
                      </Fragment>
                    );
                  })}
              </>
            )}
          </div>
        ))}
      </div>

      <Control data={data}/>
    </div>
  );
}

YourDetails.propTypes ={
  data: PropTypes.object,
}


export default YourDetails;
