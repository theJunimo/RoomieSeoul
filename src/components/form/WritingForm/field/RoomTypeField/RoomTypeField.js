import React, { Component } from 'react';
import styles from './RoomTypeField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import AlertModal from 'components/modal/AlertModal'

const cx = classNames.bind(styles);

const roomType = ['원룸', '투룸', '쓰리룸+', '오피스텔', '아파트'];

class RoomTypeField extends Component {
    state = {
        selectedIdx: roomType.indexOf(this.props.savedData.type),
        alertModal: false, //alert 모달 보이기
        validate: true //빈 값 있는지 확인
    }
    
    selectType = (index, item) => {
        this.setState({
            selectedIdx: index
        })
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
        const type = roomType[this.state.selectedIdx];
        const floor = document.getElementById('floor').value;
        const totalFloor = document.getElementById('totalFloor').value;
        const roomCnt = document.getElementById('roomCnt').value;
        const toiletCnt = document.getElementById('toiletCnt').value;
        
        //필수 값 확인
        if(type && floor && totalFloor && roomCnt && toiletCnt) {
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
            return onHandleButton(data, goTo);
        } else {
            return this.setState({
                validate: false
            })
        }

    }

    render(){
        const {validate} = this.state;
        const {submitData, checkIfNum, handleValidate} = this;
        const {floor, totalFloor, roomCnt, toiletCnt} = this.props.savedData;



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
                <div className = {cx('spotForModal')}>
                    {(!validate)? <AlertModal onAnimationEnd={handleValidate}>선택하지 않은 값이나 빈 칸이 존재합니다!</AlertModal> : null}
                </div>   
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
                                placeholder='해당층'
                                onChange = {checkIfNum}/>
                    </div>
                    <div className = {cx('slash')}>
                    /
                    </div>
                    <div>
                        <input type='text' 
                                id='totalFloor' 
                                defaultValue = {totalFloor===0? null : totalFloor} 
                                placeholder='전체층' 
                                onChange = {checkIfNum}/>
                    </div>
                </div>
                <div className = {cx('roomCnt')}>
                    <div>
                        <input type='text' 
                                id='roomCnt' 
                                defaultValue = {roomCnt===0? null : roomCnt} 
                                placeholder='방 개수'
                                onChange = {checkIfNum}/>
                    </div>
                    <div className = {cx('plus')}>
                    +
                    </div>
                    <div>
                        <input type='text' 
                                id='toiletCnt' 
                                defaultValue = {toiletCnt===0? null: toiletCnt} 
                                placeholder='화장실 개수' 
                                onChange = {checkIfNum}/>
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