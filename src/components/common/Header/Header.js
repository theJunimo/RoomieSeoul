import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Navigation from 'components/common/Navigation';

const cx = classNames.bind(styles);

//로그인 전 메뉴
const MenuBfLogin = () => (
    <div className={cx('margin-left-auto')}>
        <div className={cx('menu-wrap')}>
            <ul className={cx('menu')}>
                <li>
                    <Navigation to='/login' theme='main'>로그인/회원가입</Navigation>
                </li>
            </ul>
        </div>
    </div>
);

//로그인 후 메뉴
const MenuAfLogin = ({userId, userName = 'Junimo'}) => {
    return(
        <div className={cx('margin-left-auto')}>
            <div className={cx('menu-wrap')}>
                <ul className={cx('menu')}>
                    <li>
                        <Navigation to={'/likedpost/'+userId} theme='main'>찜한 방</Navigation>
                    </li>
                    <li>
                        <Navigation to='/write' theme='main'>방 올리기</Navigation>
                    </li>
                    <li>
                        <Navigation to={'/mypage/'+userId} theme='main'>
                            <span className= {cx('profile-img')}></span>{userName}님
                        </Navigation>
                    </li>
                </ul>
            </div>
        </div>
    );
}

//헤더
const Header = ({loginStatus = true}) => {
    const Menu = loginStatus? MenuAfLogin : MenuBfLogin;

    return (
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <div className={cx('logo')}>
                    <Link to="/">ROOMIE SEOUL</Link>
                </div>
                <Menu />
            </div>
        </header>
    );
}

export default Header;