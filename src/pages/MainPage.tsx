import React, {FC} from 'react';
import PostsList from "../components/lists/PostsList";
import BasePage from "./BasePage";

const MainPage:FC = () => {
    return (
        <BasePage>
            <PostsList/>
        </BasePage>
    );
};

export default MainPage;