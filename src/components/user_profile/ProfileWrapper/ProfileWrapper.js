import React from 'react';
import styles from './ProfileWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function ProfileWrapper({children}) {
    return(
        <div className = {cx('ProfileWrapper')}>
            <div className = {cx('inner-div')}>
                {children}
            </div>
        </div>
    );
}