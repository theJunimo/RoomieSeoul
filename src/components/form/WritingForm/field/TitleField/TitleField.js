import React from 'react';
import styles from './TitleField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const TitleField = ({cntNumOfCha}) => {
    return(
    <div className = {cx('titleFieldDiv')}>
        <div className = {cx('subTitleDiv')}>
            <h2 className = {cx('subTitle')}>
            지금 살고 있는 집에 대해서 간략한 소개를 해보세요!
            </h2>
        </div>
        <div className = "flexColumn">
            <input className = {cx('blueInput')}type='text' onKeyUp = {cntNumOfCha}></input>
            <div className = {cx('numOfChaLimit')}>50자 제한</div>
        </div>
        <div className = {cx('buttonDiv')}><Button>다음으로</Button></div>
    </div>
    );
}

export default TitleField;