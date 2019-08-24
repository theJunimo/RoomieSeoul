import React from 'react';
import styles from './Title.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const Title = ({children}) => {
    return (
        <div className = {cx('titleOuter')}>
            <div className = {cx('title')}>{children}</div>
        </div>
    )
}

export default Title;