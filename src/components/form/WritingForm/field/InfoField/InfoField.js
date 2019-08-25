import React, {Component} from 'react';
import styles from './InfoField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import {SelectButton, OptionBox} from 'components/common/SelectBox';

const cx = classNames.bind(styles);

const Msg = () => (
    <div className={cx('contactDiv')} >연락받으실 연락처를 선택해주세요.</div>
)
const Phone = () => (
    <div className={cx('contactDiv')}> 
        <div className={cx('contactIcon')}>핸드폰</div>
        <div className={cx('contactInput')}>
            <input type='text'placeholder= '예시) 000-0000-0000'></input>
        </div>
    </div>
);

const KakaoId = () => (
    <div className={cx('contactDiv')}>
        <div className={cx('contactIcon')} >카카오</div>
        <div className={cx('contactInput')}>
        <input type='text' placeholder= '예시) roomieseoul1112'></input>
        </div>
    </div>
)

const Email = () => (
    <div className={cx('contactDiv')}>
        <div className={cx('contactIcon')} >이메일</div>
        <div className={cx('contactInput')}>
        <input type='email' placeholder= '예시) roomie@seoul.com'></input>
        </div>
    </div>
)

class InfoField extends Component {

    state = {
        contactType: '',
        visible: false
    }

    onClickSelectButton = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    onClickOptionBox = (e) => {
        this.setState({
            contactType: e.target.textContent,
            visible: !this.state.visible
        })
    }

    render(){
        const {contactType, visible}= this.state;
        const {onClickOptionBox, onClickSelectButton} = this;
        const {onPrevButton} = this.props;

        return(
            <div className = {cx('infoFieldDiv')}>
                <div>
                    <h2>
                        더 자세한 정보를 입력해주세요.
                    </h2>
                </div>
                <div className = {cx('innerDiv')}>
                    <div className = {cx('contact')}>
                        <div className = {('selectBox')}>
                        <SelectButton theme='width6' onClick={onClickSelectButton}>연락처</SelectButton>
                        <OptionBox visible ={visible} 
                                    theme='width6' 
                                    items={['핸드폰', '카카오톡', '이메일']} 
                                    onClick={onClickOptionBox}/>
                        </div>
                        {(contactType === '핸드폰')? <Phone/> : 
                                (contactType === '카카오톡')? <KakaoId/> : 
                                (contactType === '이메일')? <Email/>: <Msg/>}
                    </div>

                    <div className = {cx('detailInfoDiv')}>
                        <div className = {cx('detailInfo')}>
                            <textarea placeholder = '우리집에 대해서 자세히 소개해보세요!'></textarea>
                            <div className={cx('limitChaCnt')}>1,000자 제한</div>
                        </div>
                    </div>

                    <div className = {cx('attachImg')}>
                        <label className = {cx('fileContainer')}>
                            <input type='file' multiple/>
                        </label>
                        <div className = {cx('msg')}>
                            <svg x="0" y="0" width="18" height="18" viewBox="0 0 27 27">
                                    <clipPath id="c1_1">
                                        <path d="M13.7,20.6c-.6,0,-1.1,-.5,-1.1,-1.1c0,-.7,.5,-1.2,1.1,-1.2c.7,0,1.2,.5,1.2,1.2c0,.6,-.5,1.1,-1.2,1.1Zm.1,-3.8c-1,0,-1.2,-8.3,-1.2,-9.2c0,-.8,.5,-1.5,1.2,-1.5c.6,0,1.1,.7,1.1,1.5c0,.9,-.2,9.2,-1.1,9.2Z">
                                        </path>
                                    </clipPath>
                                    <g>
                                        <circle cx="13.5" cy="13.5" r="13.5" fill="#E6E7EA"></circle>
                                        <path fill="#9C9EA3" d="M5,28.3H22.5V-1.4H5V28.3Z" clipPath="url(#c1_1)"></path>
                                    </g>
                            </svg>
                            <p>사진은 최소 1장 이상이 첨부되어야 합니다.</p>
                        </div>
                    </div>
                </div>
                <div className = {cx('buttonDiv')}>
                    <Button theme='prev' onClick={onPrevButton}>이전으로</Button> 
                    <Button theme='next'>제출하기</Button>
                </div>
            </div>
        );
    };
};

export default InfoField;