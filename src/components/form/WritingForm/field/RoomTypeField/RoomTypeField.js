import React from 'react';
import styles from './RoomTypeField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const roomType = ['원룸', '투룸', '쓰리룸+', '오피스텔', '아파트'];

const RoomTypeField = ({onPrevButton, onNextButton}) => {
    const roomTypeList = roomType.map((item, index) => {
        return(
            <li key={index}
                className={cx('roomTypeItem')}>{item}</li>
        )
    })
    return(
        <div className = {cx('roomtypeFieldDiv')}>
            <div className = {cx('subTitleDiv')}>
                <h2 className = {cx('subTitle')}>
                우리집은 어떤 타입인가요?
                </h2>
            </div>
            <div>
                <ul>
                   {roomTypeList}
                </ul>
            </div>
            <div className= {cx('dividerLine')}/>
            <div className = {cx('floor')}>
                <div>
                    <input type='text' placeholder='해당층'/>
                </div>
                <div className = {cx('slash')}>
                /
                </div>
                <div>
                    <input type='text' placeholder='전체층' />
                </div>
            </div>
            <div className = {cx('roomCnt')}>
                <div>
                    <input type='text' placeholder='방 개수'/>
                </div>
                <div className = {cx('plus')}>
                +
                </div>
                <div>
                    <input type='text' placeholder='화장실 개수' />
                </div>
            </div>
            <div className = {cx('buttonDiv')}>
                <Button theme='prev' onClick={onPrevButton}>이전</Button>
                <Button theme='next' onClick={onNextButton}>다음</Button>
            </div>
        </div>
        );
}

export default RoomTypeField;