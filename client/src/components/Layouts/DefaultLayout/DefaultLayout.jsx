import PropTypes from 'prop-types';
import Navbar from "../../Navbar/Navbar";

function DefaultLayout({children}) {
    return ( 
        <div className='h-screen bg-gray-100 dark:bg-primary-700 overflow-y-auto'>
            <div className='flex flex-col'>
                <Navbar/>
                {children}
            </div>
        </div>
     );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;