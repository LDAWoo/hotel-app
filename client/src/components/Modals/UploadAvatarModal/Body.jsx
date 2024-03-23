

import { useContext, useEffect, useRef, useState } from 'react'
import { MdOutlineErrorOutline } from 'react-icons/md'
import Button from '../../Buttons/Button'
import { UserContext } from '../../Contexts/AppUserProvider'
import Icon from '../../Icon/Icon'
import TextError from '../../TextError/TextError'
import { useTranslation } from 'react-i18next'

const Body = () => {
    const {t} = useTranslation()
    const inputRef = useRef();
    const {user} = useContext(UserContext)
    const [currentFileName, setCurrentFileName] = useState("")
    const [error, setError] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.type.split("/")[0] !== "image"){
            setError(true);
            return;
        }
        setError(false); 
        const url = URL.createObjectURL(selectedFile);
        setCurrentFileName(url)
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(currentFileName)
        }
    },[currentFileName])

    return (
        <div>
            <div className='flex flex-row items-start gap-4 h-[128px]'>
                    <div className='relative flex bg-gray-700 min-w-[128px] max-w-[128px] h-[128px] rounded-full overflow-hidden border-[2px] border-secondary-50'>
                        <img src={currentFileName || user.avatar} className='w-full h-full object-cover'/>
                    </div>

                    <div className='flex flex-row justify-between w-full h-full relative'>
                        <div className='flex flex-col gap-2'>
                            <input ref={inputRef} type="file" onChange={handleChange} className='hidden'/>
                            <div><Button title={t("Profile.information.selectFile")} className="p-[6px_12px_6px_12px] hover:bg-gray-200 rounded-md duration-200" fontMedium xl onClick={handleClick}/></div>
                            {error && <div className='flex flex-row items-center gap-1'>
                                <Icon icon={MdOutlineErrorOutline} classIcon="text-red-500 translate-y-[2px]" size={20}/>
                                <TextError error={t("Profile.information.errorFile")}/>
                            </div>}
                        </div>
                        
                        <div className='absolute bottom-0 right-0'>
                            <Button title={t("Profile.information.save")} disabled={!currentFileName.length > 0} background className="p-[6px_12px_6px_12px] rounded-md" fontMedium xl/>
                        </div>
                    </div>
            </div>
        </div>  
    )
}

Body.propTypes = {

}

export default Body
