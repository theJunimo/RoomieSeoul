import React, {Component}from 'react';
import styles from './AddressField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

//다음 우편번호 검색 서비스
import DaumPostCode from 'react-daum-postcode';

const cx = classNames.bind(styles);

class AddressField extends Component {
    state = {
        addSearchVisible : false,
        fullAddr: this.props.savedData.fullAddr,
        extraAddr: this.props.savedData.extraAddr,
    }

    handleShowAddSearch = () => {
        this.setState({
            ...this.state,
            addSearchVisible: !this.state.addSearchVisible
        })
    }

    handleAddress = (data) => {
        let fullAddr = data.roadAddress;
        let extraAddr = '';
  
        if(data.bname !== ''){
            extraAddr += data.bname;
        }
        if(data.buildingName !== '') {
            extraAddr += (extraAddr !== ''? `, ${data.buildingName}` : data.buildlingName);
        }
        fullAddr += (extraAddr !== ''? `(${extraAddr})` : '');


        this.setState({
            addSearchVisible : false,
            fullAddr
        })
    }

    handleExtraAddr = (e) => {
        const extraAddr = e.target.value;
        this.setState({
            extraAddr
        })
    }

    submitData = (goTo) => {
        const {fullAddr, extraAddr} = this.state;
        const {onHandleButton} = this.props;
        const data = {
            data: {
                fullAddr: fullAddr,
                extraAddr: extraAddr
            },
            goTo
        }
        onHandleButton(data);
    }

    render(){
        const{addSearchVisible, fullAddr, extraAddr} = this.state;
        const{submitData, handleShowAddSearch, handleExtraAddr} = this;

    return (
        <div className = {cx('addressFieldDiv')}>
            <div className = {cx('subTitleDiv')}>
                <h2 className = {cx('subTitle')}>
                    주소를 입력해주세요.
                </h2>
            </div>
            <div className = {cx('innerDiv')}>
                <div className = {cx('flexColumn')}>
                    <div className = {cx('searchDiv')} onClick = {handleShowAddSearch}>
                        {(fullAddr === '')? (<span>주소 검색</span>) : (<span>{fullAddr}</span>)}
                    </div>
                    {addSearchVisible? (
                    <div className = {cx('daumSearch')} onClick = {handleShowAddSearch}>
                        <DaumPostCode
                        onComplete = {this.handleAddress}
                        autoClose = {true}
                        />
                    </div>
                    ) : null}

                    <div>
                        <input className= {cx('detailAdd')} 
                                type = 'text' 
                                placeholder='상세정보 입력'
                                onChange = {handleExtraAddr} 
                                defaultValue = {extraAddr === ''? null : extraAddr}/>
                    </div>
                </div>
            </div>
            <div className = {cx('buttonDiv')}>
                <Button theme='prev' onClick={()=>submitData("prev")}>이전으로</Button> 
                <Button theme='next' onClick={()=>submitData("next")}>다음으로</Button>
            </div>
        </div>
    )
    }
}

export default AddressField;