import React from 'react';
import styles from './WritingForm.scss';
import classNames from 'classnames/bind';
import ProgressBar from './ProgressBar';
import InfoField from './field/InfoField';


const cx = classNames.bind(styles);

const title1 = '새로운 roomie를 만나볼 준비, 되셨나요?';
const title2 = '이제 거의 다 됐습니다!'
const title3 = '진짜 마지막입니다!'

const WritingForm = ({currentStep = 1}) => {
    const getTitle = () =>{
        if(currentStep === 1 || currentStep === 2 || currentStep === 3) {
            return title1;
        } else if(currentStep === 4 || currentStep === 5) {
            return title2;
        } else if(currentStep === 6) {
            return title3;
        }
    }

    return (
        <div className = {cx('container')}>
            <h1>{getTitle()}</h1>
            <ProgressBar currentStep = {currentStep}/>
            <div className = {cx('innerContainer')}>
                <InfoField />
            </div>   
        </div>
    );

};

export default WritingForm;