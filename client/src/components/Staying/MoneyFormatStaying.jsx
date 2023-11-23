import CurrencyFormat from "react-currency-format";
import PropTypes from "prop-types";
const MoneyFormatStaying = ({ className, price, prefix }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-2 items-end sm:items-center ${className}`}
    >
      {!prefix && <span>VND</span>}
      <CurrencyFormat
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        fixedDecimalScale={true}
        decimalScale={2}
        prefix={prefix}
      />
    </div>
  );
};

MoneyFormatStaying.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  prefix: PropTypes.string,
};

export default MoneyFormatStaying;
