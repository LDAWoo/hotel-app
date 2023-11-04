import CurrencyFormat from "react-currency-format"

const MoneyFormatStaying = ({className,price}) =>{
    return <div className={`flex flex-col sm:flex-row gap-2 items-end sm:items-center ${className}`}>
        <span>VND</span>
        <CurrencyFormat 
                value={price} 
                displayType={'text'}
                thousandSeparator={true}
                fixedDecimalScale={true}
                decimalScale={2}
        />
    </div>
}

export default MoneyFormatStaying;