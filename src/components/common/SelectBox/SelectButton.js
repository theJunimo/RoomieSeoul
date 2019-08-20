import React from 'react';
import styles from './SelectButton.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const SelectButton = ({children, onClick}) => {
    return (
        <div className={cx('selectButton')}
            onClick = {onClick}>
            {children}
            <div className={cx('inner')}><div className={cx('arrow')}></div></div>
        </div>
    )
}

export default SelectButton;