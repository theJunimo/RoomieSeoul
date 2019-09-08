import React from 'react';
import styles from './UserLeave.scss';
import classNames from 'classnames/bind';
import ProfileWrapper from 'components/user_profile/ProfileWrapper';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

export default function UserLeave() {
    return(
        <ProfileWrapper>
            <div className = {cx('UserLeave')}>
                <h2>회원탈퇴</h2>
                <div className = {cx('container')}>
                    <p>회원 탈퇴시 계정을 다시 복구하기 어려울 수 있으니 신중한 결정을 부탁드립니다(_ _)</p>
                    <div className = {cx('input-div')}>
                        <input type = 'password' placeholder = '비밀번호를 입력해주세요' />
                    </div>
                    <div className = {cx('button-div')}>
                        <Button theme = 'gray no-margin' >탈퇴하기</Button>
                    </div>
                </div>
            </div>
        </ProfileWrapper>
    )
}