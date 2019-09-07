import React from 'react';
import styles from './SignUpForm.scss';
import className from 'classnames/bind';
import SnsLogin from 'components/common/SnsLogin';
import Button from 'components/common/Button';

const cx = className.bind(styles);

const SignUpForm = () => {
    return (
        <div className={cx('SignUpForm')}>
            <SnsLogin/>
            <div className={cx('dividerLine')}></div>
            <h2>회원가입</h2>
            <div className={cx('form')}>
                <div className={cx('field')}>
                    <label htmlFor='local-signUp-email'>이메일</label>
                    <input type='email' id='local-signUp-email' name='email' placeholder='이메일 ex)roomie@email.com' autoComplete='off'/>
                </div>
                <div className={cx('field')}>
                    <label htmlFor='local-signUp-pw'>비밀번호</label>
                    <input type='password' id='local-signUp-pw' name='password' placeholder='6자 이상 15자 이하로 입력해주세요.' />
                </div>
                <div className={cx('field')}>
                    <label htmlFor='local-signUp-pw'>비밀번호 확인</label>
                    <input type='password' id='pwCheck' name='pwCheck' placeholder='비밀번호 재확인' />
                </div>
                <div className={cx('field')}>
                    <label htmlFor='local-signUp-nickName'>닉네임</label>
                    <input type='text' id='local-signUp-nickname' name='nickName' placeholder='멋진 닉네임을 지어보세요!'/>
                </div>
                <div className={cx('margin-top-3')}>
                <Button theme='submit'>확인</Button>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;