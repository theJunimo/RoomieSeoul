import React from 'react';
import styles from './Contact.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';

const cx = classNames.bind(styles);

export default function Contact() {
    return(
        <ContentWrapper>
            <div className = {cx('Contact')}>
                <p>관심있으시다면, 여기로 연락 부탁드려요</p>
                <div className = {cx('contact-div')}>
                    <div className = {cx('border-right')}>전화번호</div>
                    <div className = {cx('padding-left')}>010-1234-1234</div>
                </div>
            </div>
        </ContentWrapper>
    )
}