import React from 'react';
import styles from './SelectButton.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const SelectButton = ({children, onClick, theme}) => {
    return (
        <div className={cx('selectButton', theme)}
            onClick = {onClick}>
            {children}
            <div className={cx('inner')}><div className={cx('arrow')}></div></div>
        </div>
    )
}

export default SelectButton;