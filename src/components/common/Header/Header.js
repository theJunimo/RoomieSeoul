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
                    <Navigation to ='/login' theme='main'>로그인/회원가입</Navigation>
                </li>
            </ul>
        </div>
    </div>
);

//로그인 후 메뉴
function MenuAfLogin({userInfo = {userName: 'Junimo', userId: 'dummyForUserId'}, handleMenu})  {

    return(
        <div className={cx('margin-left-auto')}>
            <div className={cx('menu-wrap')}>
                <ul className={cx('menu')}>
                    <li>
                        <Navigation to = {`/likedpost/${userInfo.userId}`} theme = 'main'>찜한 집</Navigation>
                    </li>
                    <li>
                        <Navigation to = '/write' theme = 'main'>방 올리기</Navigation>
                    </li>
                    <li onClick = {handleMenu}>
                        <Navigation theme = 'main'>
                            <span className = {cx('profile-img')}></span><span className ={cx('span-margin-right')}>{userInfo.userName}님</span>
                        </Navigation>
                    </li>
                </ul>
            </div>
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
                {loginState? (<MenuAfLogin handleMenu = {handleMenu}/>) : (<MenuBfLogin />)}
            </div>
        </header>
        {visible? <MyAcntSelectBox/> : null}
        </React.Fragment>
    );
}

export default Header;