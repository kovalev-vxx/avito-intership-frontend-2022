import React from 'react';
import PostsList from "../components/lists/PostsList";
import BasePage from "./BasePage";

const MainPage = () => {
    return (
        <BasePage>
            <PostsList/>
        </BasePage>
    );
};

export default MainPage;