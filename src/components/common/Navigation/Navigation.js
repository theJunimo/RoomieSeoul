import React from 'react';
import styles from './Navigation.scss';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

const Navigation = ({children, to, theme, onClick}) => {
    const Div = ({children, ...rest}) => <div {...rest}>{children}</div>
    const Element = to ? Link : Div;

    return (
        <Element  to = {to}
                className = {cx('nav', theme)}
                onClick = {onClick}>
            {children}
        </Element>
    )
}

export default Navigation;