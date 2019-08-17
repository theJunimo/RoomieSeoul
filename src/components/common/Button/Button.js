import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({children, theme = 'submit', onClick}) => {
    return(
        <div className={cx('button', theme)}
        onClick={onClick? () => null : onClick}>
        {children}
        </div>
    );
}

export default Button;