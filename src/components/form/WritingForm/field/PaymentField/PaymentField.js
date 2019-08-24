import React, { Component } from 'react';
import styles from './PaymentField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

class PaymentField extends Component {

    state = {
        mngFeeCheckBox: 'false',
    }


    onCheckBox = (e) => {
        if(e.target.value === 'false') {
            document.getElementById('yes').checked = false;
        } else {
            document.getElementById('no').checked = false;
        }

        this.setState({
            mngFee: e.target.value
        })
    }

    render(){
        const MngFeeField = () => (
            <div className= {cx('flexRow-margin')}>
                <div>
                    <input type='text' placeholder='관리비' />
                </div>
                <div className = {cx('won')}>
                    만원
                </div>
            </div>
        );

        return(
            <div className = {cx('paymentFieldDiv')}>
                <div className = {cx('subTitleDiv')}>
                    <h2 className = {cx('subTitle')}>
                        지불 금액을 입력해주세요.
                    </h2>
                </div>
                <div className = {cx('innerDiv')}>
                <div className = {cx('flexRow')}>
                    <div>
                        <input type='text' placeholder='보증금'/>
                    </div>
                    <div className = {cx('slash')}>/</div>
                    <div>
                        <input type='text' placeholder='월세' />
                    </div>
                    <div className = {cx('won')}>
                        만원
                    </div>
                </div>
                <div className = {cx('message')}>* 보증금이 없다면 빈칸으로 남겨주세요.</div>
                <div className = {cx('dividerLine')}></div>
                <div className = {cx('mngFeeDiv')}>
                    <div className = {cx('mngFeeDiv-inner')}>
                        <div className = {cx('mngFeeTitle')}>관리비 여부</div>
                        <label htmlFor='yes' className = {cx('checkboxDiv')}>
                            <input className = {cx('mngFee-checkbox')} type='checkbox' id='yes' value='true' onClick={this.onCheckBox}/>
                            <span>네</span>
                        </label>
                        <label htmlFor='no' className = {cx('checkboxDiv')}>
                            <input className = {cx('mngFee-checkbox')} type='checkbox' id='no' value='false' onClick={this.onCheckBox}/>
                            <span>아니오</span>
                        </label>
                    </div>
                    {(this.state.mngFee === 'true')? MngFeeField(): null}
                </div>
                </div>
                <div className = {cx('buttonDiv')}>
                    <Button theme='prev'>이전</Button>
                    <Button theme='next'>다음</Button>
                </div>
            </div>
        );
    }
};

export default PaymentField;