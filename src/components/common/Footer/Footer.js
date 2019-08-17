import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Footer = () => (
    <footer className = {cx('footer')}>
        <div className = {cx('footer-content')}>
            <div className = {cx('clientService')}>
                <p>고객센터 ></p>
                <p>02-1111-1234</p>
                <p>평일 9:00~18:20 (점심시간 13:20~14:30 / 주말&공휴일도 괜찮아요!)</p>
            </div>
            <div className = {cx('detail')}>
                <Link to = "/">상호명: ROOMIE SEOUL</Link><br/>
                <a href = "mailto:hyein.ju92@gmail.com">이메일: hyein.ju92@gmail.com</a><br/>
                <p>개발자: 주혜인</p>
                <p>주소: 서울특별시 광진구 중곡동 천호대로 어딘가 루미서울</p>
                <p>Copyright © 2019 by ROOMIESEOUL Inc All Rights Reserved</p>
            </div>
        </div>
    </footer>
);

export default Footer;
