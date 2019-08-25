import React from 'react';
import styles from './ProgressBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProgressBar = ({currentStep})=> {

    return (
        <div className = {cx('barDiv')}>
            <div className = {cx('bar ' + (currentStep > 0? 'complete1' : null))}/>
            <div className = {cx('bar ' + (currentStep > 1? 'complete2' : null))}/>
            <div className = {cx('bar ' + (currentStep > 2? 'complete3' : null))}/>
            <div className = {cx('bar ' + (currentStep > 3? 'complete4' : null))}/>
            <div className = {cx('bar ' + (currentStep > 4? 'complete5' : null))}/>
            <div className = {cx('bar ' + (currentStep > 5? 'complete6' : null))}/>
        </div>
    )
}

export default ProgressBar;