import React, {FC, ReactNode} from 'react';
import Header from "../components/Header";

type BasePageProps = {
    className?: string,
    children: ReactNode,
}

const BasePage:FC<BasePageProps> = ({className, children}) => {
    return (
        <div className="container mx-auto px-4 max-w-3xl flex flex-col gap-2 relative">
            <Header/>
            {children}
        </div>
    );
};

export default BasePage;