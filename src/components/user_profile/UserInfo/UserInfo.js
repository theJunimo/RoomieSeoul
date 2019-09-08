import React, {useState} from 'react';
import styles from './UserInfo.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import ProfileWrapper from 'components/user_profile/ProfileWrapper';

const cx = classNames.bind(styles);

export default function UserInfo() {
    const {changedPw, setChangedPw} = useState('');
    const {validPw, setValidPw} = useState(false);

    const handlePw = (e) => {
        setChangedPw(e.target.value);
    }
    const validatePw = (e) => {
        (e.target.value === changedPw)? setValidPw(true) : setValidPw(false);
    }

    return(
        <ProfileWrapper>
            <div className = {cx('UserInfo')}>
                <h2>개인 정보 수정</h2>
                <div className = {cx('container')}>
                    <div className = {cx('profile')}>
                        <p>프로필 이미지</p>
                        <div className = {cx('img')}>
                        </div>
                        <div className = {cx('button-div')}>
                            <Button theme='normal size smallfont margin-auto'>이미지 변경</Button>
                        </div>
                    </div>
                    <div className = {cx('info')}>
                        <div className = {cx('section-nick')}>
                            <p>닉네임</p>
                            <div className = {cx('input-div')}>
                                <input type = 'text' autoComplete = 'off'/>
                            </div>
                        </div>
                        <div className = {cx('section-pw')}>
                            <div className = {cx('wrapper-pw')}>
                                <p>비밀번호</p>
                                <div className = {cx('input-div')}>
                                    <input type = 'password' onChange={handlePw}/>
                                </div>
                            </div>
                            <div className = {cx('wrapper-pw')}>
                                <p>비밀번호 재확인</p>
                                <div className = {cx('input-div')}>
                                    <input type = 'password' onChange={validatePw}/>
                                </div>
                            </div>
                        </div>
                        <div className = {cx('section-alert')}>
                            {validPw? '입력하신 비밀번호가 일치합니다.' : '입력하신 비밀번호가 일치하지 않습니다.'}
                        </div>
                        <div className = {cx('section-button')}>
                            <div className = {cx('wrapper-button')}>
                            <Button theme='gray'>수정하기</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileWrapper>
    )
}