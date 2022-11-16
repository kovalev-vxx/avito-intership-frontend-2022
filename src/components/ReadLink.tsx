import React, {FC, MouseEventHandler, ReactNode} from 'react';
import {BiLinkExternal} from "react-icons/bi"

type ReadLinkProps = {
    className?: string,
    href: string,
}


const ReadLink:FC<ReadLinkProps> = ({className, href}) => {
    return (
        <a target="_blank" href={href} className={`border border-lightBorder dark:border-darkBorder dark:border-darkBorder font-bold p-2 rounded flex items-center gap-1 ${className}`}>Read <BiLinkExternal/></a>
    );
};

export default ReadLink;