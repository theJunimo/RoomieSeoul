import React, {Component} from 'react';
import styles from './OthersField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import {Notice} from 'components/common/Icon';
import AlertModal from 'components/modal/AlertModal'

const cx = classNames.bind(styles);

const genderArr = ['여성', '남성', '성별무관']
const optionArr = ['반려동물', '주차가능', '단기거주', 
                    '풀옵션', '빌트인', '엘리베이터', 
                    '생필품 지원', '공과금 포함', '흡연자가능'];

class OthersField extends Component {
    state = {
        gender: this.props.savedData.gender,
        options: this.props.savedData.options,
        validate: true
    }

    handleValidate = () => {
        this.setState({
            validate: true
        })
    }

    selectGender = (item) => {
        this.setState({
            ...this.state,
            gender: item,
        })
    }

    selectOption = (item) => {
        const {options} = this.state;

        if(options.length > 0){
            if(options.includes(item)){
                const newOptions = options.filter((ele) => ele !== item);
                this.setState({
                    ...this.state,
                    options: newOptions
                });
            } else {
                this.setState({
                    ...this.state,
                    options: [...options, item]
                })
            }
        } else {
            this.setState({
                ...this.state,
                options: [...options, item]
            })
        }

    }

    submitData = (goTo) => {
        const{onHandleButton} = this.props;
        const{gender, options} = this.state;

        //성별 비었으면 못넘어감
        if(gender) {
            const data = {
                data: {
                    gender,
                    options
                },
                goTo
            }

            onHandleButton(data);
        } else {
            this.setState({
                validate: false
            })
        }
    }

    render(){
        const {gender, options, validate} = this.state;
        const {selectGender, selectOption, submitData, handleValidate} = this;

        const genderList = genderArr.map((item, index) => {
            return(gender === item)?
            (<Button theme = 'gender selected' 
                    key = {index} 
                    value = {item} 
                    onClick = {()=>selectGender(item)}>{item}</Button>)
            : (<Button theme = 'gender'
                    key = {index} 
                    value = {item} 
                    onClick = {()=>selectGender(item)}>{item}</Button>)
        });
        
        const optionList = optionArr.map((item, index) => {
            if(options.length > 0 && options.includes(item)) {
                return (
                    <Button theme = 'option selected' 
                    key = {index} 
                    value = {item}
                    onClick = {()=>selectOption(item)}>{item}</Button> 
                )
            }
            return(
            <Button theme = 'option' 
                    key = {index} 
                    value = {item}
                    onClick = {()=>selectOption(item)}>{item}</Button>)
        });

        return (
            <div className = {cx('othersFieldDiv')}>
                <div className = {cx('spotForModal')}>
                    {(!validate)? <AlertModal onAnimationEnd={handleValidate}>성별을 선택해주세요!</AlertModal> : null}
                </div> 
                <div className = {cx('subTitleDiv')}>
                    <h2>
                        세부사항을 입력해주세요.
                    </h2>
                </div>
                <div className = {cx('innerDiv')}>
                    <div className = {cx('flexColumn')}>
                        <div className = {cx('genderDiv')}>
                            <div className = {cx('title')}>
                                룸메/하메의 성별
                            </div>
                            <div className={cx('optionList')}>
                                {genderList}
                            </div>
                        </div>
                        <div className = {cx('dividerLine')}/>
                        <div className ={ cx('optionDiv')}>
                            <div className = {cx('title')}>
                                기타 옵션
                            </div>
                            <div className = {cx('optionList')}>
                                {optionList}
                            </div>
                            <div className = {cx('msg')}>
                                <div className = {cx('icon')}><Notice/></div>
                                <p>풀옵션은 항목은 세탁기, 냉장고, 에어컨, 가스레인지 또는 인덕션입니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {cx('buttonDiv')}>
                    <Button theme = 'prev' onClick = {()=>{submitData("prev")}}>이전으로</Button> 
                    <Button theme = 'next' onClick = {()=>{submitData("next")}}>다음으로</Button>
                </div>
            </div>
        );
    }
}

export default OthersField;
