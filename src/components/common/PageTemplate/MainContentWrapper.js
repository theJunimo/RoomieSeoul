import React from 'react';
import styles from './MainContentWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainContentWrapper = ({children}) => (
    <div className = {cx('mainContent-wrapper')}>
        {children}
    </div>
)

export default MainContentWrapper;