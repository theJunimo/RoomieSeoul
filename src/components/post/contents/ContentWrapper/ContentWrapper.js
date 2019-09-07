import React from 'react';
import styles from './ContentWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function ContentWrapper({children, theme}) {
    return(
        <div className = {cx('contentWrapper', theme)}>
            {children}
        </div>
    )
}