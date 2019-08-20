import React from 'react';
import styles from './SelectedButton.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const SelectedButton = ({children, onClick}) => (
    <div className={cx('selectedButton')}>
    {children}
        <div className={cx('inner')} onClick = {onClick}>
            <div className={cx('close')}></div>
        </div>
    </div>
);

export default SelectedButton;