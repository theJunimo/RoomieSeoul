import React from 'react';
import styles from './Title.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';

const cx = classNames.bind(styles);

export default function Title() {
    return(
        <ContentWrapper>
            <div className = {cx('Title')}>
                <h2>작지만 갖출건 다 갖춘 곳입니다.</h2>
            </div>
        </ContentWrapper>
    )
}