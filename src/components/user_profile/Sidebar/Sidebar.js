import React from 'react';
import styles from './Sidebar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Circle() {
    return(
        <span className = {cx('circle')}></span>
    )
}

export default function Sidebar({current}) {
    return (
        <div className = {cx('Sidebar')}>
            <ul>
                <li style = {(current === 'user_profile')? {'font-weight': 'bold', } : null}>
                    {(current === 'user_profile')? <Circle/> : null}개인정보 수정
                </li>
                <li style = {(current === 'user_post')? {'font-weight': 'bold'} : null}>
                    {(current === 'user_post')? <Circle/> : null}내가 올린 집
                </li>
                <li style = {(current === 'user_leave')? {'font-weight': 'bold'} : null}>
                    {(current === 'user_leave')? <Circle/> : null}계정 삭제
                </li>
            </ul>
        </div>
    )
}