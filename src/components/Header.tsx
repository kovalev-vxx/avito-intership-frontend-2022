import React, {FC} from 'react';
import ThemeSwitcher from "./buttons/ThemeSwitcher";

const Header:FC = () => {
    return (
        <div className="text-center flex flex-col items-center gap-1 dark:text-cyan">
            <h1 className="font-bold">Avito Intership 2022</h1>
            <h2>Fresh Hacker News for You</h2>
            <ThemeSwitcher/>
        </div>
    );
};

export default Header;