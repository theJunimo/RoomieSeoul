import React from 'react';
import styles from './PopularPostList.scss';
import classNames from 'classnames/bind';
import SectionContainer from 'components/main/SectionContainer';
import PopularPostBlock from 'components/block/PopularPostBlock';

const cx = classNames.bind(styles);

export default function PopularPostList() {
    return(
        <SectionContainer>
            <div className = {cx('PopularPostList')}>
                <h2>지금 가장 인기 많은 쉐어하우스</h2>
                    <div className = {cx('listWrapper')}>
                        <PopularPostBlock/>
                        <PopularPostBlock/>
                        <PopularPostBlock/>
                        <PopularPostBlock/>
                        <PopularPostBlock/>
                        <PopularPostBlock/>
                    </div>
            </div>
        </SectionContainer>
    )
}