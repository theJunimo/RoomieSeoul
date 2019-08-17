import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Navigation from 'components/common/Navigation';

const cx = classNames.bind(styles);

const Header = () => (
    <header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('logo')}>
                <Link to="/">ROOMIE SEOUL</Link>
            </div>
            <div className={cx('margin-left-auto')}>
                <div className={cx('menu-wrap')}>
                    <ul className={cx('menu')}>
                        <li>
                            <Navigation to='/login' theme='main'>로그인/회원가입</Navigation>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
);

export default Header;