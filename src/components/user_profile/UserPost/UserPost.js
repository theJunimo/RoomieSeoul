import React from 'react';
import styles from './UserPost.scss';
import classNames from 'classnames/bind';
import ProfileWrapper from 'components/user_profile/ProfileWrapper';

const cx = classNames.bind(styles);

export default function UserPost() {
    return(
        <ProfileWrapper>
            <div className = {cx('UserPost')}>
                <h2>내가 올린 집</h2>
            </div>
        </ProfileWrapper>
    )
}