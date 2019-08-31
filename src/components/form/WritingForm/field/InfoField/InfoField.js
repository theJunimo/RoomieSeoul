import React, {Component} from 'react';
import styles from './InfoField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import {SelectButton, OptionBox} from 'components/common/SelectBox';
import {Notice} from 'components/common/Icon';

const cx = classNames.bind(styles);

class InfoField extends Component {

    state = {
        contactType: this.props.savedData.contactType,
        contact: this.props.savedData.contact,
        info: this.props.savedData.info,
        img: this.props.savedData.img,
        visible: false, //optionBox에 대한 visble
        numOfCha: 0
    }

    handleSelectButton = () => {
        this.setState({
            ...this.state,
            visible: !this.state.visible
        })
    }

    handleOptionBox = (e) => {
        this.setState({
            ...this.state,
            contactType: e.target.textContent,
            contact: '',
            visible: !this.state.visible
        })
    }

    handleContactInput = (e) => {
        this.setState({
            ...this.state,
            contact: e.target.value
        })
    }

    handleInfoInput = (e) => {
        const info = e.target.value;
        this.setState({
            ...this.state,
            info: e.target.value
        })

        //infoInput 1000자 제한
        const cnt = info.length;
        
        if(cnt <= 1000) { //50자 이하인 경우만 표시
            this.setState({
                numOfCha: cnt
            })
        } else { //50자 넘는 경우 input 내용 50자 이하로 잘라줌
            this.setState({
                numOfCha: 1000
            })
            const sliced = info.slice(0, 1000);
            document.getElementById('infoTextArea').value = sliced;
        }
    }

    submitData = () => {
        const {handleButton} = this.props;
        const {contactType, contact, info, img} = this.state;
        const data = {
            data: {
            contactType,
            contact,
            info,
            img
            }
        }

        handleButton(data);
    }


    render(){
        const {contactType, contact, info, visible} = this.state;
        const {handleOptionBox, handleSelectButton, submitData, handleContactInput, handleInfoInput} = this;
        const {onNextButton} = this.props;

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
                        <SelectButton theme = 'width6' onClick = {handleSelectButton}>연락처</SelectButton>
                        <OptionBox visible = {visible} 
                                    theme = 'width6' 
                                    items = {['핸드폰', '카카오톡', '이메일']}
                                    selected = {contactType}
                                    onClick = {handleOptionBox}/>
                        </div>
                        {(contactType === '핸드폰')?
                            (<div className={cx('contactDiv')}> 
                                <div className = {cx('contactIcon')}>핸드폰</div>
                                <div className = {cx('contactInput')}>
                                    <input type ='text' 
                                            id ='phone' 
                                            placeholder = '예시) 000-0000-0000'
                                            defaultValue = {(contact==='')? null : contact}
                                            onChange = {handleContactInput}/>
                                </div>
                            </div>) : 
                            (contactType === '카카오톡')? 
                                (<div className={cx('contactDiv')}>
                                    <div className = {cx('contactIcon')} >카카오</div>
                                    <div className = {cx('contactInput')}>
                                    <input type = 'text' 
                                            id = 'kakao' 
                                            placeholder = '예시) roomieseoul1112'
                                            defaultValue = {(contact==='')? null : contact}
                                            onChange = {handleContactInput}/>
                                    </div>
                                </div>) :
                                (contactType === '이메일')?
                                    (<div className={cx('contactDiv')}>
                                        <div className = {cx('contactIcon')} >이메일</div>
                                        <div className = {cx('contactInput')}>
                                        <input type = 'email' 
                                                id = 'email' 
                                                placeholder = '예시) roomie@seoul.com'
                                                defaultValue = {(contact==='')? null : contact}
                                                onChange = {handleContactInput}></input>
                                        </div>
                                    </div>)
                                : 
                                (<div className = {cx('contactDiv')} >연락받으실 연락처를 선택해주세요.</div>)}
                    </div>

                    <div className = {cx('detailInfoDiv')}>
                        <div className = {cx('detailInfo')}>
                            <textarea id = 'infoTextArea' 
                                        placeholder = '우리집에 대해서 자세히 소개해보세요!' 
                                        onChange = {handleInfoInput}
                                        defaultValue = {info}></textarea>
                            <div className={cx('limitChaCnt')}>
                            <span> {this.state.numOfCha === 0? null : this.state.numOfCha + '/'}</span>
                            <span>1,000자 제한</span>
                            </div>
                        </div>
                    </div>

                    <div className = {cx('attachImg')}>
                        <label className = {cx('fileContainer')}>
                            <input type='file' multiple/>
                        </label>
                        <div className = {cx('msg')}>
                            <Notice/>
                            <p>사진은 최소 1장 이상이 첨부되어야 합니다.</p>
                        </div>
                    </div>
                </div>
                <div className = {cx('buttonDiv')}>
                    <Button theme ='prev' onClick = {submitData}>이전으로</Button> 
                    <Button theme ='next' onClick = {onNextButton}>제출하기</Button>
                </div>
            </div>
        );
    };
};

export default InfoField;