import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Button = ({children, theme = 'submit', onClick}) => {
    return(
        <div className={cx('buttonOuter')} onClick={onClick}>
            <div className={cx('button', theme)}>
                <div className={cx('inner')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Button;