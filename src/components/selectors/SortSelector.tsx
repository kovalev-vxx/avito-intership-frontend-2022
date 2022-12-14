import React, {ChangeEvent, Dispatch, FC, SetStateAction} from 'react';
import {ESortBy} from "../../models/ESortBy";

type SortSelectorProps = {
    sortBy: ESortBy
    setSort : Dispatch<SetStateAction<ESortBy>>
}

const SortSelector:FC<SortSelectorProps> = ({setSort, sortBy}) => {
    const onOptionChangeHandler = (event: ChangeEvent<HTMLSelectElement>):void => {
        setSort(Number(event.target.value))
    }

    return (
        <select value={sortBy} className="block py-2.5 px-0 text-sm text-center text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" onChange={onOptionChangeHandler}>
            <option value={ESortBy.TIME_ASC}>Recent</option>
            <option value={ESortBy.TIME_DESC}>Old</option>
            <option value={ESortBy.SCORE_ASC}>Score ▲</option>
            <option value={ESortBy.SCORE_DESC}>Score ▼</option>
        </select>
    );
};

export default SortSelector;