import React from 'react';
import styles from './Address.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';

const cx = classNames.bind(styles);

export default function Address() {
    return(
        <ContentWrapper>
            <div className = {cx('Address')}>
                <p>주소</p>
                <span>서울시 동대문구 서울시립대로 3길 6(전농동)</span>
            </div>
        </ContentWrapper>
    )
}