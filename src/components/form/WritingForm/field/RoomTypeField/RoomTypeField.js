import React, { Component } from 'react';
import styles from './RoomTypeField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
const cx = classNames.bind(styles);

const roomType = ['원룸', '투룸', '쓰리룸+', '오피스텔', '아파트'];

class RoomTypeField extends Component {
    state = {
        selectedIdx: roomType.indexOf(this.props.savedData.type),
    }

    selectType = (index, item) => {
        this.setState({
            selectedIdx: index
        })
    }

    submitData = (goTo) => {
        const {onHandleButton} = this.props;
        const type = roomType[this.state.selectedIdx];
        const floor = document.getElementById('floor').value;
        const totalFloor = document.getElementById('totalFloor').value;
        const roomCnt = document.getElementById('roomCnt').value;
        const toiletCnt = document.getElementById('toiletCnt').value;

        const data = {
            data:{
                type,
                floor,
                totalFloor,
                roomCnt,
                toiletCnt
            },
            goTo
        }

        onHandleButton(data, goTo);
    }

    render(){
        const {floor, totalFloor, roomCnt, toiletCnt} = this.props.savedData;
        const {submitData} = this;

        const roomTypeList = roomType.map((item, index) => {
            return (this.state.selectedIdx === index)?
                (<li key={index}
                    className= {cx('roomTypeItem selected')}
                    onClick = {() => this.selectType(index, item)}>{item}</li>) :
                (<li key={index}
                    className= {cx('roomTypeItem')}
                    onClick = {() => this.selectType(index, item)}>{item}</li>)

        });

        return(
            <div className = {cx('roomtypeFieldDiv')}>
                <div className = {cx('subTitleDiv')}>
                    <h2 className = {cx('subTitle')}>
                    우리집은 어떤 타입인가요?
                    </h2>
                </div>
                <div>
                    <ul id = 'roomTypeUl'>
                    {roomTypeList}
                    </ul>
                </div>
                <div className= {cx('dividerLine')}/>
                <div className = {cx('floor')}>
                    <div>
                        <input type='text' 
                                id='floor' 
                                defaultValue = {floor===0? null : floor} 
                                placeholder='해당층'/>
                    </div>
                    <div className = {cx('slash')}>
                    /
                    </div>
                    <div>
                        <input type='text' 
                                id='totalFloor' 
                                defaultValue = {totalFloor===0? null : totalFloor} 
                                placeholder='전체층' />
                    </div>
                </div>
                <div className = {cx('roomCnt')}>
                    <div>
                        <input type='text' 
                                id='roomCnt' 
                                defaultValue = {roomCnt===0? null : roomCnt} 
                                placeholder='방 개수'/>
                    </div>
                    <div className = {cx('plus')}>
                    +
                    </div>
                    <div>
                        <input type='text' 
                                id='toiletCnt' 
                                defaultValue = {toiletCnt===0? null: toiletCnt} 
                                placeholder='화장실 개수' />
                    </div>
                </div>
                <div className = {cx('buttonDiv')}>
                    <Button theme='prev' onClick={()=>submitData("prev")}>이전</Button>
                    <Button theme='next' onClick={()=>submitData("next")}>다음</Button>
                </div>
            </div>
            );
    }
}

export default RoomTypeField;