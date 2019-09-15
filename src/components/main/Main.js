import React from 'react';
import styles from './Main.scss';
import classNames from 'classnames/bind';
import Search from './Search';
import GoToWritePost from './GoToWritePost';
import PopularPostList from './PopularPostList';

const cx = classNames.bind(styles);

export default function Main() {
    return(
        <React.Fragment>
            <Search/>
            <GoToWritePost/>
            <PopularPostList/>
        </React.Fragment>
    )
}