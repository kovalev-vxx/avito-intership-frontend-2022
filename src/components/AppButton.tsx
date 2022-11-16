import React, {FC, MouseEventHandler, ReactNode} from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>
}


const AppButton:FC<ButtonProps> = ({className, children, onClick}) => {
    return (
        <button onClick={onClick} className={`bg-cyan hover:bg-cyan600 text-light font-bold p-2 rounded ${className}`}>
            {children}
        </button>
    );
};

export default AppButton;