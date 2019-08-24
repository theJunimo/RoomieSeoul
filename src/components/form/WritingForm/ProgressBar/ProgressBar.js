import React from 'react';
import styles from './ProgressBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProgressBar = ({progress = 'complete1'})=> {
    return (
        <div className = {cx('barDiv')}>
            <div className = {cx('bar complete1')}> </div>
            <div className = {cx('bar complete2')}>
                
            </div>
            <div className = {cx('bar complete3')}>
                
            </div>
            <div className = {cx('bar complete4')}>
                
            </div>
            <div className = {cx('bar complete5')}>
                
            </div>
            <div className = {cx('bar uncomplete')}>
                
            </div>
        </div>
    )
}

export default ProgressBar;