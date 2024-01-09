

const HeaderDiscount = () =>{
    return <div className="p-4">
        <div className="grid grid-cols-3 items-center font-bold">
            <div>
                <span>Occupancy</span>
            </div>
            <div>
                <span>Discount</span>
            </div>
            <div className="flex justify-end">
                <span>Guests pay</span>
            </div>
        </div>
    </div>
}

export default HeaderDiscount;