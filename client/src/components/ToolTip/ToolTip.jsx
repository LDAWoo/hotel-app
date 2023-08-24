import Tippy from '@tippyjs/react'

function ToolTip({delay,content,placement,className,children,...props}) {
    return ( 
        <Tippy
        delay={delay}
        content={content}
        className={className}
        placement={placement}
        {...props}
        >
            {children}
        </Tippy>
     );
}

export default ToolTip;