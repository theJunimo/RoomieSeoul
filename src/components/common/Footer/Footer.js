import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Footer = () => (
    <footer className = {cx('footer')}>
        <div className = {cx('footer-content')}>
            <Link to = "/" className={cx('logo')}>ROOMIE SEOUL</Link>
            <div className = {cx('clientService')}>
                <p>고객센터</p>
                <p>평일 9:00~18:20 (점심시간 13:20~14:30 / 주말&공휴일도 괜찮아요!)</p>
            </div>
            <div className = {cx('detail')}>
                <p>개발자: Junimo</p>
                <a href = 'mailto:hyein.ju92@gmail.com'>이메일: hyein.ju92@gmail.com</a><br/>
                <p>블로그: <span role="img" aria-label='point'>👉</span><a href = 'https://sustainable-dev.tistory.com/' target='_blank' rel='noopener noreferrer'>지속가능한 개발 블로그로 가기</a></p>
                <p id="copyright">Copyright © 2019 by ROOMIESEOUL Inc All Rights Reserved</p>
            </div>
        </div>
    </footer>
);

export default Footer;
