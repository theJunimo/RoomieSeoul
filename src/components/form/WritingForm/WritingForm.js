import React from 'react';
import styles from './WritingForm.scss';
import classNames from 'classnames/bind';
import ProgressBar from './ProgressBar';
import {TitleField, RoomTypeField, PaymentField, AddressField, OthersField, InfoField} from './field';


const cx = classNames.bind(styles);

const title1 = '새로운 roomie를 만나볼 준비, 되셨나요?';
const title2 = '이제 거의 다 됐습니다!'
const title3 = '진짜 마지막입니다!'

const WritingForm = ({currentStep, onPrevButton, onNextButton}) => {
    const getTitle = () => {
        if(currentStep === 1 || currentStep === 2 || currentStep === 3) {
            return title1;
        } else if(currentStep === 4 || currentStep === 5) {
            return title2;
        } else if(currentStep === 6) {
            return title3;
        }
    }

    const getField = () => {
        switch(currentStep) {
            case 1: {
                return <TitleField onNextButton={onNextButton}/>
            }
            case 2: {
                return <RoomTypeField onPrevButton={onPrevButton} onNextButton={onNextButton}/>
            }
            case 3: {
                return <PaymentField onPrevButton={onPrevButton} onNextButton={onNextButton}/>
            }
            case 4: {
                return <AddressField onPrevButton={onPrevButton} onNextButton={onNextButton}/>
            }
            case 5: {
                return <OthersField onPrevButton={onPrevButton} onNextButton={onNextButton}/>
            }
            case 6: {
                return <InfoField onPrevButton={onPrevButton}/>
            }
            default: return null;
        }
    }
    return (
        <div className = {cx('container')}>
            <h1>{getTitle()}</h1>
            <ProgressBar currentStep = {currentStep}/>
            <div className = {cx('innerContainer')}>
            {getField()}
            </div>   
        </div>
    );

};

export default WritingForm;