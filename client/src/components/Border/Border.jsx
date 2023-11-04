
const Border = ({className}) =>{
    return <hr className={`w-auto h-[1px] border-primary-50 dark:border-primary-400 mb-4 ${className ? className : ""}`}/>
}
export default Border;