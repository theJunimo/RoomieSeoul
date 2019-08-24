import React from 'react';
import styles from './WritingForm.scss';
import classNames from 'classnames/bind';
import ProgressBar from './ProgressBar';
import OtherField from './field/OthersField';


const cx = classNames.bind(styles);

const title1 = '새로운 roomie를 만나볼 준비, 되셨나요?';
const title2 = '이제 거의 다 됐습니다!'

const WritingForm = ({currentStep}) => {

    return (
        <div className = {cx('container')}>
            <h1>{title2}</h1>
            <ProgressBar/>
            <div className = {cx('innerContainer')}>
                <OtherField />
            </div>   
        </div>
    );

};

export default WritingForm;