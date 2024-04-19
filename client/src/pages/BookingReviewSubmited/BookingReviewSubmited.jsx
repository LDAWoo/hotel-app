import Body from "./Body/Body";


function BookingReviewSubmited() {
    return ( 
        <div className='w-full flex-1 flex '>
            <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 mb-10 p-[10px] bg-transparent'>
                <div className='flex flex-col w-full'>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-center">
                            <Body />
                        </div>
                    </div>
                </div>  
            </div>
        </div>
     );
}

export default BookingReviewSubmited;