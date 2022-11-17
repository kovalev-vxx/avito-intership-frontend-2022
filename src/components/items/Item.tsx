import React, {ClassType, FC, ReactNode} from 'react';

type ItemProps = {
    className?: string,
    children: ReactNode
}

const Item: FC<ItemProps> = ({className, children}) => {
    return (
        <div className={`p-2 
        border border-lightBorder dark:border-darkBorder
         rounded-md flex flex-col justify-between dark:bg-darkElement bg-lightElement ${className}`}>
            {children}
        </div>
    );
};

export default Item;