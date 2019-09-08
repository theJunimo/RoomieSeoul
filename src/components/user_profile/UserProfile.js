import React from 'react';
import styles from './UserProfile.scss';
import classNames from 'classnames/bind';
import SideBar from './Sidebar';
import UserInfo from './UserInfo';
import UserPost from './UserPost';
import UserLeave from './UserLeave';

const cx = classNames.bind(styles);

export default function UserProfile({current = 'user_profile', userInfo, userPost}) {
    return(
        <div className = {cx('UserProfile')}>
            <SideBar current = {current} />
            {(current === 'user_profile')? 
                <UserInfo userInfo = {userInfo} /> : 
                (current === 'user_post')? <UserPost userPost = {userPost} /> : <UserLeave />}
        </div>
    )
}