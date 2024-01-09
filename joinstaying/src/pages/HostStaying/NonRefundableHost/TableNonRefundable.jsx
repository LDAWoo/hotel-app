import MoneyFormatStaying from "../../../components/Staying/MoneyFormatStaying";


const TableNonRefundable = ({price,discount}) =>{
    return (
        <table className="text-[14px] mb-4">
            <tbody>
                <tr>
                    <td className="flex items-end justify-end p-2">
                        <MoneyFormatStaying price={price} className="font-bold"/>
                    </td>
                    <td className="p-2">Base price</td>
                </tr>
                <tr>
                    <td className="flex items-end justify-end p-2 font-bold">
                        {discount}%
                    </td>
                    <td className="p-2">Discount when guests book the non-refundable option</td>
                </tr>
                <tr className="bg-hotel-25 dark:bg-primary-500">
                    <td className="flex items-end justify-end p-2">
                        <MoneyFormatStaying price={price - price * discount / 100} className="font-bold"/>
                    </td>
                    <td className="p-2">Non-refundable price</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableNonRefundable;