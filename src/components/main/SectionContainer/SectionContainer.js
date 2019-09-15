import React from 'react';
import styles from './SectionContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function SectionContainer({children, theme}) {
    return(
        <div className = {cx('SectionContainer', theme)}>
            {children}
        </div>
    )
}