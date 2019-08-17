import React from 'react';
import styles from './LoginForm.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import Navigation from 'components/common/Navigation';
import SnsLogin from 'components/common/SnsLogin';

const cx = classNames.bind(styles);

const LoginForm = () => {
    return (
        <div className={cx('container')}>
            <h2>로그인</h2>
            <div className={cx('login-form')}>
                <div className={cx('field')}>
                    <label htmlFor='local-login-email'>이메일</label>
                    <input type='email' id='local-login-email' name='email' placeholder='이메일 ex)roomie@email.com' />
                </div>
                <div className={cx('field')}>
                    <label htmlFor='local-login-pw'>비밀번호</label>
                    <input type='password' id='local-login-pw' name='password' placeholder='비밀번호'/>
                    <Button theme='support'>비밀번호 찾기</Button>
                </div>
                <Button theme='submit'>확인</Button>
            </div>
            <div className={cx('field-row')}>
                <span>아직 회원이 아니신가요?</span>
                <Navigation theme='sub' to='/signup'>회원가입</Navigation>
            </div>
            <SnsLogin />
        </div>
    );
}

export default LoginForm;