import PropsTypes from "prop-types";
import { useCallback, useContext, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import Arrow from "../../../components/Arrow/Arrow";
import Carousel from "../../../components/Carousel/Carousel";
import { DeviceContext } from "../../../components/Contexts/AppDeviceProvider";
import Image from "../../../components/Image/Image";
import CardContent from "./CardContent";
import CardHeart from "./CardHeart";
import routesConfig from "../../../configs/routesConfig";

function Card({ data }) {
  const { isMobile } = useContext(DeviceContext);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleClickPrev = useCallback(() => {
    setCurrent((curr) => (curr === 0 ? 0 : curr - 1));
  }, []);

  const handleClickNext = useCallback(() => {
    setCurrent((curr) => (curr === data?.images?.length - 1 ? 0 : curr + 1));
  }, [data?.images?.length]);

  const numDisplayedItems = 5;
  const halfDisplayedItems = Math.floor(numDisplayedItems / 2);

  let startDisplayIndex = Math.max(0, current - halfDisplayedItems);
  let endDisplayIndex = Math.min(
    data?.images.length - 1,
    current + halfDisplayedItems,
  );

  if (startDisplayIndex === 0) {
    endDisplayIndex = Math.min(
      data?.images.length - 1,
      startDisplayIndex + numDisplayedItems - 1,
    );
  } else if (endDisplayIndex === data?.images.length - 1) {
    startDisplayIndex = Math.max(0, endDisplayIndex - numDisplayedItems + 1);
  }

  const displayedIndices = Array.from(
    { length: endDisplayIndex - startDisplayIndex + 1 },
    (_, index) => startDisplayIndex + index,
  );

  const handleMouseEnter = useCallback(() => {
    setVisible(!isMobile);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div
      className='box-border border rounded-lg border-gray-200 dark:bg-primary-600 dark:border-primary-500'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='grid grid-cols-[100%]'>
        <div className='flex flex-col m-0 p-0 duration-200'></div>
        <div className='box-border' style={{ gridArea: "1/1/2/2" }}>
          <div className='relative'>
            <Link
              to={routesConfig.hotelDetails}
              className='block absolute top-0 right-0 bottom-0 outline-none left-0 border-none bg-transparent w-full h-full'
            />
            <div className='flex flex-col '>
              {/* image */}
              <div className='relative mb-4' style={{ aspectRatio: "20/19" }}>
                <div className='relative bg-gray-200 rounded-tl-lg rounded-tr-lg overflow-clip'>
                  <div className='grid relative'>
                    <div className='absolute top-0 bottom-0 left-0 right-0 '>
                      <div className='relative w-full h-full p-2'>
                        {/* Heart */}
                        <div className='absolute top-[2%] right-[2%] z-[1]'>
                          <CardHeart isWishlist={false} />
                        </div>

                        {/* action */}
                        {visible && (
                          <>
                            {current > 0 && (
                              <Arrow
                                icon={MdKeyboardArrowLeft}
                                size={14}
                                width='w-[30px]'
                                height='h-[30px]'
                                left='left-2'
                                top='top-[45%]'
                                onClick={handleClickPrev}
                              />
                            )}
                            {current < data?.images?.length - 1 && (
                              <Arrow
                                icon={MdKeyboardArrowRight}
                                size={14}
                                width='w-[30px]'
                                height='h-[30px]'
                                right='right-2'
                                top='top-[45%]'
                                onClick={handleClickNext}
                              />
                            )}
                          </>
                        )}
                        <div className='absolute bottom-2 flex justify-center gap-1 w-[calc(100%-16px)] z-[1]'>
                          {displayedIndices.map((index) => (
                            <div
                              key={index}
                              className={`w-[6px] h-[6px] bg-white dark:bg-primary-700 rounded-full opacity-transition ${
                                current === index ? "opacity-100" : "opacity-50"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className='box-border'
                      style={{ aspectRatio: "20/19" }}
                    >
                      <div
                        className='min-w-0 h-full box-border'
                        style={{ position: "unset" }}
                      >
                        <div
                          className='grid justify-start m-0 h-full'
                          style={{
                            gridAutoFlow: "column",
                            gridAutoColumns: "100%",
                          }}
                        >
                          <Link to={routesConfig.hotelDetails}>
                            <div className='w-full h-full'>
                              <Carousel
                                current={current}
                                onSwipedLeft={handleClickNext}
                                onSwipedRight={handleClickPrev}
                              >
                                {data?.images?.map((img, index) => (
                                  <Image
                                    src={img}
                                    key={index}
                                    className={`min-w-full min-h-full rounded-tl-lg rounded-tr-lg object-cover`}
                                  />
                                ))}
                              </Carousel>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* content */}
              <CardContent data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropsTypes.object,
};
export default Card;
