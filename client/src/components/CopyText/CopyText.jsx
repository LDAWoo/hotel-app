import { useState } from "react";
import Icon from "../Icon/Icon";
import { PiCopySimple } from "react-icons/pi";
import PropTypes from 'prop-types'

function CopyText({text, icon}) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyText = () => {
        if(isCopied) return;
        navigator.clipboard.writeText(text)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch((error) => {
                console.error('Failed to copy:', error);
            });
    }
    
    return ( 
        <div className="cursor-pointer text-[14px] text-hotel-75 font-medium" onClick={() => handleCopyText(text)}>
            {icon && !isCopied && <Icon icon={PiCopySimple} size={18} classIcon="text-black"/>}
            {isCopied && <span>Copied!</span>}
        </div>
     );
}

CopyText.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.bool
}

export default CopyText;