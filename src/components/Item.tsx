import React, {ClassType, FC, ReactNode} from 'react';

type ItemProps = {
    className?: string,
    children: ReactNode
}

const Item: FC<ItemProps> = ({className, children}) => {
    return (
        <li className={`p-2 
        border border-lightBorder dark:border-darkBorder dark:border-darkBorder
         rounded-md flex flex-col justify-between dark:bg-darkElement bg-lightElement ${className}`}>
            {children}
        </li>
    );
};

export default Item;