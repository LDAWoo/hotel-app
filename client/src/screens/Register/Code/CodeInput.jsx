
function CodeInput({...props}) {
    return ( 
        <div className="flex flex-grow mt-0 mb-0 -ml-[6px] -mr[6px]">
            <div className="flex flex-1 w-[calc(25%_-_12px)] mt-0 mb-0 ml-[6px] mr-[6px] border-[2px] rounded-[12px] dark:border-gray-800">
                <input className="flex bg-transparent pt-0 pb-0 pl-[6px] pr-[6px] outline-none text-[48px] dark:bg-primary-600 text-center font-bold dark:text-white w-full h-[102px] sm:h-[92px] md:h-[72px] duration-75 rounded-[12px] focus:dark:bg-primary-700 " {...props}/>
            </div>
        </div>
     );
}

export default CodeInput;