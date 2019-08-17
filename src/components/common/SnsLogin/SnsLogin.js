import React from 'react';
import styles from './SnsLogin.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const SnsItem = ({backgroundImg, children}) => (
    <div className={cx('sns-icon-div')}>
        <div className={cx('sns-icon')}></div>
    </div>
);

const SnsLogin = ()=> {
    return(
        <div className={cx('login-sns-container')}>
            <div className={cx('login-sns-title')}>SNS 계정으로 간편 로그인/회원가입</div>
            <div className={cx('login-sns-list')}>
                <SnsItem></SnsItem>
                <SnsItem></SnsItem>
                <SnsItem></SnsItem>
            </div>
        </div>
    )
}

export default SnsLogin;