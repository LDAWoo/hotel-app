import PropTypes from "prop-types";

function Spin({width, height, borderWidth}) {
    return ( 
        <div className='relative'>
            <div className={`animate-loading ${width ? width : "w-4"} ${height ? height : 'h-4'}`}>
                        <div
                            className={`${borderWidth ? borderWidth : "before:border-2 after:border-2"}  before:rounded-full before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 border-[#e7e7e7] after:border-r-hotel-75 after:border-t-hotel-75 after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:-rotate-45 after:rounded-full`}
                            role='status'
                        />
                        <div className="before:absolute before:bg-hotel-75 before:w-[2px] before:h-[2px] before:top-[50%] before:right-0 before:rounded-full after:absolute after:bg-hotel-75 after:w-[2px] after:h-[2px] after:top-[50%] after:right-0 after:rounded-full"/>
            </div>
        </div>
     );
}

Spin.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    borderWidth: PropTypes.string
}

export default Spin;