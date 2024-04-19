import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiCalendar, CiCircleList } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoMdCloseCircle, IoMdEye } from "react-icons/io";
import { IoCheckmarkOutline, IoLocationOutline } from "react-icons/io5";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import { getBooking, getBookingDetails } from "../../../api/User/Booking";
import Border from "../../../components/Border/Border";
import Button from "../../../components/Buttons/Button";
import { UserContext } from "../../../components/Contexts/AppUserProvider";
import CopyText from "../../../components/CopyText/CopyText";
import Icon from "../../../components/Icon/Icon";
import { getLocale } from "../../../components/Locale/Locale";
import MoneyFormatStaying from "../../../components/Staying/MoneyFormatStaying";
import Title from "../../../components/Title/Title";
import routesConfig from "../../../configs/routesConfig";
import useRegisterBookingConfirmModal from "../../../hooks/Booking/useRegisterBookingConfirmModal";
import BookingConfirmSkeleton from "./BookingSkeleton";
import useRegisterBookingConfirm from "../../../hooks/Booking/useRegisterBookingConfirm";
import BookingAsideSkeleton from "./BookingAsideSkeleton";

function Body() {
  const { t } = useTranslation();
  const { onOpen, setBookingModal } = useRegisterBookingConfirmModal();
  const {bookings,booking, setBookings, setBooking} = useRegisterBookingConfirm()
  const locale = getLocale();
  const { token, userLoading, user } = useContext(UserContext);
  
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const bid = searchParams.get("bid") || "";
  const [totalRooms, setTotalRooms] = useState({});

  const currentDate = new Date();
  const nextDay = new Date(currentDate);
  nextDay.setDate(nextDay.getDate() + 1);

  useEffect(() => {
    if(bookings.length > 0) {
      return;
    }
    if (!userLoading && Object.keys(user).length > 0 && token) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const resultBookings = await getBooking(token);
          const resultBooking = await getBookingDetails(bid, token);
          setBookings(resultBookings.data);
          setBooking({ rooms: resultBooking.data });
          setLoading(false);
        } catch (error) {
          setBookings([]);
          setBooking([]);
          setLoading(true);
        }
      };
      fetchData();
    }
  }, [user, userLoading, token, bid]);

  useEffect(() => {
    if (bookings.length > 0) {
      const filterBookings = bookings.filter((b) => b?.bookingId === bid);

      if (Object.keys(bookings).length > 0) {
        setBooking({
          ...booking,
          ...filterBookings[0]
        });
      }
    }
  }, [bookings, bid]);

  useEffect(() => {
    if (booking.rooms && booking.rooms.length > 0) {
      const total = booking.rooms.reduce(
        (acc, room) => {
          const quantityRooms = acc.totalRoom + room.quantityRoom;
          const discount = acc.totalDiscount + (room.discount || 0);
          const totalPrice = acc.totalPrice + (room.totalPriceRoom || 0);
          const totalPriceOriginal =
            acc.totalPriceOriginal + (room.totalPriceRoomOrigin || 0);

          return {
            totalRoom: quantityRooms,
            totalDiscount: discount,
            totalPrice: totalPrice,
            totalPriceOriginal: totalPriceOriginal,
          };
        },
        {
          totalRoom: 0,
          totalDiscount: 0,
          totalPrice: 0,
          totalPriceOriginal: 0,
        },
      );

      setTotalRooms(total);
      setLoading(false);
    }
  }, [booking?.rooms]);

  const handleShowConfirm = () => {
    onOpen();
    setBookingModal(booking);
  };

  const ComponentItem = () => {
    const items = [
      {
        name: t("BookingConfirm.confirmationEmailTo"),
        strong: booking.email,
      },
      {
        name: t("BookingConfirm.paymentWill"),
        strong: booking?.hotel?.hotelName,
      },
      {
        name: t("BookingConfirm.youCanNowModify"),
        action: "cancel",
        link: t("BookingConfirm.button.cancel"),
      },
    ];

    return (
      <>
        {items.map((item, index) => (
          <div key={index} className='flex flex-row items-center gap-1'>
            <Icon
              icon={IoCheckmarkOutline}
              size={24}
              classIcon='text-success-50'
            />
            <div>
              <Title title={item?.name} xl nowrap={false} />
              {item?.strong && (
                <strong className='ml-1 text-[14px]'>{item?.strong}</strong>
              )}
              {item?.link && (
                <Link className='ml-1 text-[14px] text-hotel-50 hover:underline'>
                  {item?.link}
                </Link>
              )}
            </div>
          </div>
        ))}
      </>
    );
  };

  const ComponentRoomDetails = () => {
    const items = [
      {
        name: t("BookingConfirm.guestName"),
        value: booking?.fullName,
        type: "text",
      },
      {
        name: t("BookingConfirm.maximumCapacity"),
        value: `${booking?.rooms[0].quantityAdult} ${t(
          "BookingConfirm.adults",
        )}, ${
          booking?.rooms[0].quantityChild >= 0
            ? booking?.rooms[0].quantityChild +
              " " +
              t("BookingConfirm.children")
            : ""
        }`,
        type: "text",
      },
      {
        name: t("BookingConfirm.facilities"),
        value: booking?.rooms[0].serviceAmenityRooms,
        type: "array",
      },
      {
        name: t("BookingConfirm.beds"),
        value: booking?.rooms[0].bedType,
        type: "text",
      },
      {
        name: t("BookingConfirm.prepayment"),
        value: t("BookingConfirm.noPrepayment"),
        type: "text",
      },
    ];
    return (
      <div className='flex flex-col gap-3'>
        {items.map((item, index) => (
          <div key={index} className='flex flex-row gap-4'>
            <div className='min-w-[200px]'>
              <Title title={item?.name} fontBold xl nowrap={false}/>
            </div>

            {item?.type === "text" && (
              <div className='w-full'>
                <Title title={item?.value} xl  nowrap={false}/>
              </div>
            )}
            {item?.type === "array" && (
              <div className='w-full'>
                {item?.value.map((value, index) => (
                  <div key={index} className='text-[14px]'>
                    {value?.serviceAmenityRoomName}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  console.log(booking);

  return (
    <div className='w-full flex-col'>
      <div className='flex flex-row justify-between relative gap-0 2md:gap-4'>
        {loading ? (
            <BookingConfirmSkeleton/>
        ) : (
          <div className='flex flex-col gap-4 w-full'>
            <div className="flex flex-col">
                <Title
                  title={t("BookingConfirm.confirmed")}
                  xl
                  className='text-success-50'
                />
                <Title
                  title={`${t("BookingConfirm.yourBookingIn")} ${
                    booking?.hotel?.city
                  } ${t("BookingConfirm.isConfirm")}`}
                  extraLarge9
                  fontBold
                  nowrap={false}
                />
            </div>

            <div>
              <ComponentItem />
            </div>

            <div className='flex flex-row'>
              <div>
                <Button
                  title={t("BookingConfirm.button.saveConfirmation")}
                  background
                  className='p-[4px_12px] rounded-[4px]'
                  xl
                  fontMedium
                  onClick={handleShowConfirm}
                />
              </div>
            </div>

            <div className="flex 2md:hidden ">
                <div className="p-4 border border-black rounded-[2px] bg-[#f1fef6] w-full">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-1 items-center">
                        <Title title={t("BookingConfirm.confirmationNumber")} xl nowrap={false}/>
                        <strong className="text-[14px]">{booking?.bookingCode}</strong>
                        <CopyText text={booking?.bookingCode} icon />
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                        <Title title={t("BookingConfirm.pinCode")} xl nowrap={false}/>
                        <strong className="text-[14px]">{booking?.pinCode}</strong>
                        <CopyText text={booking?.pinCode} icon />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
              <div>
                <Link
                  to={`${routesConfig.hotelDetails}?id=${
                    booking?.hotel?.hotelId
                  }&location=${booking?.hotel?.city || "HCM"}&checkin=${format(
                    new Date(),
                    "yyyy-MM-dd",
                  )}&checkout=${format(
                    nextDay,
                    "yyyy-MM-dd",
                  )}&group_adults=1&group_children=0&group_rooms=1`}
                  className='text-hotel-50 hover:text-black duration-150'
                >
                  <Title
                    title={booking?.hotel?.hotelName}
                    extraLarge9
                    fontBold
                  />
                </Link>
              </div>

              <div className='flex flex-row justify-between gap-4'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-row items-start'>
                    <Icon icon={CiCalendar} size={28} />
                    <div className='flex flex-col sm:flex-row'>
                      <div className='flex flex-col p-[0_16px] sm:border-r border-r-0 border-r-gray-200'>
                        <Title title={t("BookingConfirm.checkIn")} xl />
                        <Title
                          title={`${format(
                            new Date(booking?.rooms[0]?.checkInDate),
                            "eee dd LLL yyyy",
                            { locale },
                          )}`}
                          fontBold
                          xxl
                        />
                      </div>

                      <div className='flex flex-col p-[0_16px] sm:border-l border-l-0 border-l-gray-200'>
                        <Title title={t("BookingConfirm.checkOut")} xl />
                        <Title
                          title={`${format(
                            new Date(booking?.rooms[0]?.checkOutDate),
                            "eee dd LLL yyyy",
                            { locale },
                          )}`}
                          fontBold
                          xxl
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row items-start'>
                    <Icon icon={CiCircleList} size={28} />
                    <div className='flex flex-row'>
                      <div className='flex flex-col p-[0_16px]'>
                        <Title
                          title={t("BookingConfirm.bookingDetails")}
                          xl
                          fontBold
                        />
                        <Title
                          title={`${booking.rooms[0]?.quantityAdult} ${t(
                            "BookingConfirm.adults",
                          )} - ${booking.rooms[0].totalDay} ${t(
                            "BookingConfirm.nights",
                          )}, ${booking.rooms.length} ${t(
                            "BookingConfirm.rooms",
                          )}`}
                          xl
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row items-start'>
                    <Icon icon={IoLocationOutline} size={28} />
                    <div className='flex flex-row'>
                      <div className='flex flex-col p-[0_16px]'>
                        <Title
                          title={t("BookingConfirm.address")}
                          xl
                          fontBold
                        />
                        <Title
                          title={`${booking?.address}`}
                          xl
                          nowrap={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='w-[120px] h-[120px] bg-white'>
                  <img
                    src={booking?.hotel?.hotelImage}
                    alt={booking?.hotel?.hotelName}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <div>
                <Title
                  title={t("BookingConfirm.yourRoomDetails")}
                  extraLarge9
                  fontBold
                />
              </div>

              <div className='flex flex-row gap-4 items-center'>
                <div className='p-2 bg-gray-300 rounded-md text-gray-500'>
                  <Icon icon={LuBedDouble} size={48} />
                </div>
                <Title title={booking?.rooms[0]?.roomName} fontBold xxl />
              </div>

              <ComponentRoomDetails />

              <div className='flex flex-col w-full border rounded-md border-gray-200'>
                <div className='p-4 flex flex-row justify-between gap-2 items-center'>
                  <div className='flex flex-col gap-1'>
                    <Title title={`${totalRooms?.totalRoom} ${t("BookingConfirm.rooms")}`} xl />
                    {totalRooms?.totalDiscount > 0 && (
                      <Title
                        title={`${
                          totalRooms?.totalDiscount / totalRooms?.totalRoom
                        }% ${t("BookingConfirm.sale")}`}
                        xl
                      />
                    )}
                  </div>
                  <div className='flex flex-col gap-1 text-right items-end'>
                    <MoneyFormatStaying
                      price={totalRooms?.totalPriceOriginal}
                      decimalScale={0}
                      className='text-[16px] gap-1'
                    />
                    {totalRooms?.totalDiscount > 0 && (
                      <MoneyFormatStaying
                        price={
                          totalRooms?.totalPriceOriginal -
                          totalRooms?.totalPrice
                        }
                        decimalScale={0}
                        className='text-[16px] gap-1'
                      />
                    )}
                  </div>
                </div>
                <div className='p-4 flex flex-row justify-between gap-2 items-start bg-hotel-25 border-t border-t-gray-200'>
                  <div className='flex flex-col gap-1'>
                    <Title
                      title={t("BookingConfirm.price")}
                      extraLarge4
                      className='text-hotel-500'
                    />
                    <Title title={`(${t("BookingConfirm.for")} ${booking.rooms[0].quantityAdult} ${t("BookingConfirm.guests")})`} xl />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <MoneyFormatStaying
                      price={booking?.totalPrice}
                      decimalScale={0}
                      className='text-[20px] text-hotel-500 gap-1'
                    />
                  </div>
                </div>
                <div className='p-4 flex flex-col gap-1'>
                <div className='flex flex-col'>
                    <Title
                    title={t("BookingConfirm.TheFinal.title")}
                    fontBold
                    xxl
                    nowrap={false}
                    />
                    <Title
                    title={t("BookingConfirm.TheFinal.items.item1")}
                    xl
                    nowrap={false}
                    />
                    <Title
                    title={t("BookingConfirm.TheFinal.items.item2")}
                    xl
                    nowrap={false}
                    />
                </div>
                <div className='flex flex-col border-t border-t-gray-200'>
                    <Title
                    title={t("BookingConfirm.PaymentInformation.title")}
                    fontBold
                    xxl
                    nowrap={false}
                    />
                    <Title
                    title={t("BookingConfirm.PaymentInformation.items.item1")}
                    xl
                    nowrap={false}
                    />
                    <Title
                    title={t("BookingConfirm.PaymentInformation.items.item2")}
                    xl
                    nowrap={false}
                    />
                </div>
                <div className='flex flex-col border-t border-t-gray-200'>
                    <Title
                    title={t("BookingConfirm.AdditionalInformation.title")}
                    fontBold
                    xxl
                    nowrap={false}
                    />
                    <Title
                    title={t("BookingConfirm.AdditionalInformation.items.item1")}
                    xl
                    nowrap={false}
                    />
                    <Title
                    title={t("BookingConfirm.AdditionalInformation.items.item2")}
                    xl
                    nowrap={false}
                    />
                    <Title
                    title={t("BookingConfirm.AdditionalInformation.items.item3")}
                    xl
                    nowrap={false}
                    />
                </div>
                </div>

              </div>

              <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                  <Title
                    title={t("BookingConfirm.contactProperty")}
                    extraLarge9
                    fontBold
                    nowrap={false}
                  />
                  <Title
                    title={t("BookingConfirm.forQuestions")}
                    xxl
                    nowrap={false}
                  />
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-row gap-4'>
                    <Icon icon={MdOutlineEmail} size={28} />
                    <div className='flex flex-col gap-1'>
                      <Title title={t("BookingConfirm.emailProperty")} xxxl fontBold />
                      <Title
                        title={t("BookingConfirm.sendAEmailProperty")}
                        xxl
                        nowrap={false}
                      />
                      <Link
                        to={`mailto:${booking.rooms[0].emailHotelOwner}`}
                        className='underline text-hotel-50 hover:text-black duration-300 font-bold text-[16px]'
                      >
                        {t("BookingConfirm.button.sendAnEmail")}
                      </Link>
                    </div>
                  </div>
                  <div className='flex flex-row gap-4'>
                    <Icon icon={FiPhone} size={28} />
                    <div className='flex flex-col gap-1'>
                      <Title title={t("BookingConfirm.callProperty")} xxxl fontBold />
                      <Link
                        to={`tel:${booking.rooms[0].hotelPhoneNumber}`}
                        className='font-bold text-[16px]'
                      >
                        {booking.rooms[0].hotelPhoneNumber}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-row items-end w-full justify-end mt-4'>
                <div className='flex flex-col items-end text-right italic font-[Georgia] justify-end'>
                  <Title title={t("BookingConfirm.greatTrip")} xxl nowrap={false} />
                  <Title title={t("BookingConfirm.TheTeam")} xxl nowrap={false} />
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
        {loading ? <div className="hidden 2md:flex w-[294px]"><BookingAsideSkeleton/></div> : <div className="hidden 2md:flex flex-col gap-4 sticky top-4 w-[294px] h-auto">
            {/* Sidebar content */}
            <div className="p-4 border border-black rounded-[2px] bg-[#f1fef6]">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center">
                <Title title={t("BookingConfirm.confirmationNumber")} xl nowrap={false}/>
                <strong className="text-[14px]">{booking?.bookingCode}</strong>
                <CopyText text={booking?.bookingCode} icon />
                </div>
                <div className="flex flex-row gap-1 items-center">
                <Title title={t("BookingConfirm.pinCode")} xl nowrap={false}/>
                <strong className="text-[14px]">{booking?.pinCode}</strong>
                <CopyText text={booking?.pinCode} icon />
                </div>
            </div>
            </div>

            <div className="p-4 border border-gray-300 rounded-[2px]">
            <div className="flex flex-col gap-2">
                <Title title={t("BookingConfirm.isEverythingCorrect")} fontBold xxl nowrap={false} />
                <Title title={t("BookingConfirm.yourBookingOnline")} large nowrap={false} />

                <div className="flex flex-col gap-1">
                <div>
                    <Button title={t("BookingConfirm.button.cancelBooking")} xl fontBold icon={IoMdCloseCircle} size={18} className="underline text-hotel-50 hover:text-black duration-300" classIcon="text-black translate-y-[2px]" />
                </div>
                <div>
                    <Button title={t("BookingConfirm.button.viewBooking")} xl fontBold icon={IoMdEye} size={18} className="underline text-hotel-50 hover:text-black duration-300" classIcon="text-black translate-y-[2px]" />
                </div>
                </div>

                <Border />

                <div className="flex flex-col gap-1">
                <Title title={t("BookingConfirm.contactProperty")} xxl fontBold />
                <Title title={`${t("BookingConfirm.phone")} ${booking.rooms[0].hotelPhoneNumber}`} xl fontMedium />
                <Link to={`mailto:${booking.rooms[0].emailHotelOwner}`} className="underline text-hotel-50 hover:text-black duration-300 font-bold text-[14px]">
                    {t("BookingConfirm.button.sendAnEmail")}
                </Link>
                </div>

                <Title title={t("BookingConfirm.tipChange")} large nowrap={false} />
            </div>
            </div>
        </div>}
        </div>
        </div>

      {!loading && Object.keys(booking).length > 0 && <div className='w-full p-4 bg-[#fafcff] flex items-center justify-center mt-4 text-[16px] text-center'>
        <div>
        {t("BookingConfirm.moreThan")}
          <span
            onClick={handleShowConfirm}
            className='m-[0_4px] cursor-pointer underline hover:text-secondary-200 duration-150'
          >
            {t("BookingConfirm.million")}
          </span>
          {t("BookingConfirm.recommendStaying")}
        </div>
      </div>}
    </div>
  );
}

export default Body;
