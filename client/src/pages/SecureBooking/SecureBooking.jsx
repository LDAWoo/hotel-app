import { useEffect, useState } from "react";
import MainBooking from "./MainBooking/MainBooking";
import ProgressBooking from "./ProgressBooking/ProgressBooking";
import { getBookingSessionPending } from "../../api/Booking";
import useRegisterSecureBooking from "../../hooks/SecureBooking/useRegisterSecureBooking";
import { useLocation } from "react-router-dom";

const SecureBooking = () => {
  const { data, setData } = useRegisterSecureBooking();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(false);
  const currentSource = searchParams.get('source');
  const sessionToken = searchParams.get("token") || "";

  useEffect(() => {
    const fetch = async () => {
      const token = sessionToken;
      const data = {
        receiveMarketingEmail: true,
      };

      try {
        setLoading(true);
        const results = await getBookingSessionPending(token, data);
        setData(results);
        setLoading(false);
      } catch (error) {
        setData([]);
        setLoading(false);
      }
    };

    fetch();
  }, [sessionToken]);

  return (
    <div className='w-full'>
      {loading ? (
        <div>Loading</div>
      ) : Object.keys(data).length > 0 ? (
        <>
          <>
            <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
              <div className='flex flex-col w-full gap-4'>
                <ProgressBooking currentSource={currentSource}/>
                <MainBooking currentSource={currentSource}/>
              </div>
            </div>
          </>
        </>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
};

export default SecureBooking;
