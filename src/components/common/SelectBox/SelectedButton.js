import React from 'react';
import styles from './SelectedButton.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const SelectedButton = ({children, onClick}) => (
    <div className={cx('selectedButton')}>
    {children}
        <div className={cx('inner')} onClick = {onClick}>
            <div className={cx('close')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
            </div>
        </div>
    </div>
);

export default SelectedButton;