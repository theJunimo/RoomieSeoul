import React from 'react';
import styles from './OthersField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const genders = ['여성', '남성', '성별무관']
const options = ['반려동물', '주차가능', '단기임대', 
                    '풀옵션', '빌트인', '엘리베이터', 
                    '생필품 지원', '공과금 포함', '흡연자가능'];

const OthersField = ({onPrevButton, onNextButton}) => {
    const genderList = genders.map((item, index) => (
        <Button theme='gender' key={index} value={item}>{item}</Button>
    ))
    const optionList = options.map((item, index) => (
        <Button theme='option' key={index} value={item}>{item}</Button>
    ))

    return (
        <div className = {cx('othersFieldDiv')}>
            <div className = {cx('subTitleDiv')}>
                <h2>
                    세부사항을 입력해주세요.
                </h2>
            </div>
            <div className = {cx('innerDiv')}>
                <div className = {cx('flexColumn')}>
                    <div className = {cx('genderDiv')}>
                        <div className= {cx('title')}>
                            룸메/하메의 성별
                        </div>
                        <div className={cx('optionList')}>
                            {genderList}
                        </div>
                    </div>
                    <div className={cx('dividerLine')}/>
                    <div className={cx('optionDiv')}>
                        <div className= {cx('title')}>
                            기타 옵션
                        </div>
                        <div className={cx('optionList')}>
                            {optionList}
                        </div>
                        <div className={cx('msg')}>
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
                            <p>풀옵션은 항목은 세탁기, 냉장고, 에어컨, 가스레인지 또는 인덕션입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {cx('buttonDiv')}>
                <Button theme='prev' onClick={onPrevButton}>이전으로</Button> 
                <Button theme='next' onClick={onNextButton}>다음으로</Button>
            </div>
        </div>
    );
}

export default OthersField;
