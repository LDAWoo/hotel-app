import AccommodationType from "./AccommodationType/AccommodationType";
import Col from "./Col";
import Person from "./Person";
import SelectAmount from "./SelectAmount";
import Price from "./Price";
import PropTypes from "prop-types";
const Body = ({ data }) => {
  return (
    <tbody>
      {data?.rooms &&
        data?.rooms.map((room, index) => (
          <tr
            key={index}
            className={`h-auto table-row border-collapse border-b  ${index === data?.rooms.length - 1 ? 'border-transparent': "border-hotel-500"}`}
          >
            <Col
              className='w-[30%]'
              render={<AccommodationType data={room} />}
            />
            <Col className='w-[10%]' render={<Person data={room} />} />
            <Col className='' render={<Price data={room} />} />
            <Col />
            <Col className='w-[10%]' render={<SelectAmount data={room} />} />
          </tr>
        ))}
    </tbody>
  );
};

Body.propTypes = {
  data: PropTypes.object,
};

export default Body;
