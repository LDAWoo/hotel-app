
function Button({className,classIcon,icon,classTitle,title,size}) {
    const IconComponent = icon;
    return ( 
        <>
            <div
            className={className}
            >
                <div
                className={`${icon ? 'flex gap-1 items-center justify-center' : ''}`}
                >
                    {icon && (
                        <IconComponent
                        className={classIcon} 
                        size={size}
                        />
                    )}
                    { title && (
                        <div className={classTitle}>{title}</div>
                    )}
                </div>
            </div>
        </>
     );
}

export default Button;