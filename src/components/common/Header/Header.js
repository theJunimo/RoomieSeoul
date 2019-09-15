import React, { useState } from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Navigation from 'components/common/Navigation';
import MyAcntSelectBox from './MyAcntSelectBox';

const cx = classNames.bind(styles);

//로그인 전 메뉴
const MenuBfLogin = () => (
    <div className = {cx('margin-left-auto')}>
        <div className = {cx('menu-wrap')}>
            <ul className = {cx('menu')}>
                <li>
                    <Navigation to ='/login' theme='main'>집 검색하기</Navigation>
                </li>
                <li>
                    <Navigation to ='/login' theme='main'>로그인/회원가입</Navigation>
                </li>
            </ul>
        </div>
    </div>
);

//로그인 후 메뉴
function MenuAfLogin({userInfo = {userName: 'Junimo', userId: 'dummyForUserId'}, handleMenu, visible})  {

    return(
        <div className={cx('margin-left-auto')}>
            <ul>
                <li>
                    <Navigation to = '/search' theme = 'main'>집 검색하기</Navigation>
                </li>
                <li>
                    <Navigation to = {`/likedpost/${userInfo.userId}`} theme = 'main'>찜한 집</Navigation>
                </li>
                <li>
                    <Navigation to = '/write' theme = 'main'>집 올리기</Navigation>
                </li>
                <li onClick = {handleMenu}>
                    <div className = {cx('profile')}>
                        <div className = {cx('profile-img')}></div>
                        <div className = {cx('user-name')}>{userInfo.userName}님</div>
                    </div>
                    {visible? <MyAcntSelectBox/> : null}
                </li>
            </ul>
        </div>
    );
}

//헤더
function Header({loginState = true, userInfo}) {
    const [visible, setVisible] = useState(false);

    function handleMenu() {
        setVisible(!visible);
    }

    return (
        <React.Fragment>
        <header className = {cx('header')}>
            <div className = {cx('header-content')}>
                <div className = {cx('logo')}>
                    <Link to = "/">ROOMIE SEOUL</Link>
                </div>
                {loginState? (<MenuAfLogin handleMenu = {handleMenu} visible={visible}/>) : (<MenuBfLogin />)}
            </div>
        </header>
        </React.Fragment>
    );
}

export default Header;