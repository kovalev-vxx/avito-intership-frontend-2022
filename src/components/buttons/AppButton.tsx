import React, {FC, MouseEventHandler, ReactNode} from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>
}


const AppButton:FC<ButtonProps> = ({className, children, onClick}) => {
    return (
        <button onClick={onClick} className={`bg-cyan dark:hover:text-cyan600 dark:text-cyan dark:bg-transparent dark:border dark:border-darkBorder hover:bg-cyan600 text-light font-bold p-2 flex justify-center items-center rounded ${className}`}>
            {children}
        </button>
    );
};

export default AppButton;