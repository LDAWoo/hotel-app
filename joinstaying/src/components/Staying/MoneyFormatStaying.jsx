import CurrencyFormat from "react-currency-format";
import PropTypes from "prop-types";
const MoneyFormatStaying = ({
  className,
  price,
  prefix,
  decimalScale = 2,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-end sm:items-center ${
        className ? className : "gap-2"
      }`}
    >
      {!prefix && <span>VND</span>}
      <CurrencyFormat
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        fixedDecimalScale={true}
        decimalScale={decimalScale}
        prefix={prefix}
        {...props}
      />
    </div>
  );
};

MoneyFormatStaying.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  decimalScale: PropTypes.number,
  prefix: PropTypes.string,
};

export default MoneyFormatStaying;
