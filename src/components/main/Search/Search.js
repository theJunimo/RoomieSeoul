import React from 'react';
import styles from './Search.scss';
import classNames from 'classnames/bind';
import SectionContainer from 'components/main/SectionContainer';
import {Magnifier} from 'components/common/Icon';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

export default function Search() {
    
    return(
        <SectionContainer theme = 'margin-bottom'>
        <div className = {cx('Search')}>
            <div className = {cx('search-container')}>
                <div className= {cx('search-title')}>
                    <h1>루미 서울에 오신 것을 환영합니다.</h1>
                    <h2>미래의 루미와 함께 살고 싶은 집을 검색해보세요!</h2>
                </div>
                <div className = {cx('search-box')}>
                    <div className = {cx('icon-div')}>
                    <Magnifier/>
                    </div>
                    <div className = {cx('input-div')}>
                        <input
                            type = 'text'
                            placeholder = '예시) 강남구 쓰리룸 쉐어하우스'>
                        </input>
                    </div>
                    <Button theme='normal'>검색하기</Button>
                </div>
            </div>
            <div className = {cx('welcome-img')}>
            </div>
        </div>
        </SectionContainer>
    )
}