import React from 'react';
import styles from './PopularPostBlock.scss';
import classNames from 'classnames/bind';
import {Heart} from 'components/common/Icon';
const cx = classNames.bind(styles);

export default function PopularPostBlock() {
    return(
        <div className = {cx('PopularPostBlock')}>
            <div className = {cx('img-div')}>
                <div className = {cx('img')}>
                </div>
            </div>
            <div className = {cx('info')}>
                <div className = {cx('section')}>
                    <span>서울시 동대문구 서울시립대로 3길 6(전농동)</span>
                </div>
                <div className = {cx('section')}>
                    <span>100 / 50 만원</span>
                </div>
                <div className = {cx('section')}>
                    <div className = {cx('icon-div')}>
                    <Heart width = '20' height = '20' />
                    </div>
                    <span>50개</span>
                </div>
            </div>
        </div>
    )
}