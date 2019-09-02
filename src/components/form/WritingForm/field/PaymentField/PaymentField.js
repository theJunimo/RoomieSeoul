import React, { Component } from 'react';
import styles from './PaymentField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import {Notice} from 'components/common/Icon';
import AlertModal from 'components/modal/AlertModal'

const cx = classNames.bind(styles);

class PaymentField extends Component {

    state = {
        validate: true //빈 값 있는지 확인
    }   

    componentDidMount = () => {
        window.scrollTo(0,130);
    }

    checkIfNum = (e) => {
        if(!Number(e.target.value)){
            e.target.value = null;
        }
    }

    handleValidate = () => {
        this.setState({
            validate: true
        })
    }

    submitData = (goTo) => {
        const {onHandleButton} = this.props;
        const deposit = document.getElementById('deposit').value;
        const monthlyFee = document.getElementById('monthlyFee').value;
        const mngFee = document.getElementById('mngFee').value;

        //필수 값 확인(월세)
        if(!monthlyFee) {
            return this.setState({
                validate: false
            })
        } else {
            const data = {
                data:{
                    deposit,
                    monthlyFee,
                    mngFee
                },
                goTo
            }

            return onHandleButton(data);
        }
    }

    render(){
        const {mngFeeCheckBox, validate} = this.state;
        const {checkIfNum, submitData, handleValidate} = this;
        const {deposit, monthlyFee, mngFee} = this.props.savedData;

        return(
            <div className = {cx('paymentFieldDiv')}>
                <div className = {cx('spotForModal')}>
                    {(!validate)? <AlertModal onAnimationEnd={handleValidate}>월세는 필수로 입력해주세요!</AlertModal> : null}
                </div> 
                <div className = {cx('subTitleDiv')}>
                    <h2 className = {cx('subTitle')}>
                        지불 금액을 입력해주세요.
                    </h2>
                </div>
                <div className = {cx('innerDiv')}>
                <div className = {cx('flexRow')}>
                    <div>
                        <input type = 'text' 
                                id = 'deposit' 
                                defaultValue = {deposit === 0? null : deposit}
                                placeholder = '보증금'
                                autoComplete = 'off'
                                onChange = {checkIfNum}/>
                    </div>
                    <div className = {cx('slash')}>/</div>
                    <div>
                        <input type = 'text' 
                                id = 'monthlyFee'
                                autoFocus
                                defaultValue = {monthlyFee === 0? null : monthlyFee}
                                placeholder = '월세'
                                autoComplete = 'off'
                                onChange = {checkIfNum}/>
                    </div>
                    <div className = {cx('won')}>
                        만원
                    </div>
                </div>
                <div className = {cx('dividerLine')}></div>
                <div className = {cx('mngFeeDiv')}>
                    <div className= {cx('flexRow-margin')}>
                        <div>
                            <input type = 'text'
                                    className = {cx('mngFee')}
                                    id = 'mngFee'
                                    defaultValue = {mngFee === 0? null : mngFee}
                                    placeholder = '관리비'
                                    autoComplete = 'off'
                                    disabled = {mngFeeCheckBox === 'false' && mngFee === 0 ? true : false}
                                    onChange = {checkIfNum}
                                     />
                        </div>
                        <div className = {cx('won')}>
                            만원
                        </div>
                    </div>
                </div>
                <div className = {cx('message')}>
                    <div className = {cx('icon')}><Notice/></div>
                    <span>보증금이나 관리비가 없다면 빈칸으로 남겨주세요.</span></div>
                </div>
                <div className = {cx('buttonDiv')}>
                    <Button theme='prev' onClick = {()=>submitData("prev")}>이전</Button>
                    <Button theme='next' onClick = {()=>submitData("next")}>다음</Button>
                </div>
            </div>
        );
    }
};

export default PaymentField;