import React, {Component} from 'react';
import styles from './TitleField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import AlertModal from 'components/modal/AlertModal'
const cx = classNames.bind(styles);

class TitleField extends Component{

    state = {
        numOfCha : 0,//titleInput 글자 수
        validate: true
    }
    
    componentDidMount = () => {
        window.scrollTo(0,130);
    }
    //titleInput 50자 제한
    handleNumOfCha = (e) => {
        const s = e.target.value;
        const cnt = s.length;
        
        if(cnt <= 50) { //50자 이하인 경우만 표시
            this.setState({
                numOfCha: cnt
            })
        } else { //50자 넘는 경우 input 내용 50자 이하로 잘라줌
            this.setState({
                numOfCha: 50
            })
            const sliced = s.slice(0, 50);
            document.getElementsByName('titleInput')[0].value = sliced;
        }
    }
    
    handleValidate = () => {
        this.setState({
            validate: true
        })
    }

    submitData = () => {
        const s = document.getElementsByName('titleInput')[0].value;
        const {onHandleButton} = this.props;
        //필수 값 확인
        if(s === ''){
            return this.setState({
                validate: false
            })
        } else {
            return onHandleButton(s);
        }
    }

    render() {
        const {numOfCha, validate} = this.state;
        const {submitData, handleNumOfCha, handleValidate} = this;
        const {savedData} = this.props;

        return(
        <React.Fragment>
        <div className = {cx('titleFieldDiv')}>
            <div className = {cx('spotForModal')}>
                {(!validate)? <AlertModal onAnimationEnd={handleValidate}>제목을 입력해주세요!</AlertModal> : null}
            </div>
            <div className = {cx('subTitleDiv')}>
                <h2 className = {cx('subTitle')}>
                지금 살고 있는 집에 대해서 간략한 소개를 해보세요!
                </h2>
            </div>
            <div className = "flexColumn">
                <input className = {cx('titleInput')} 
                        type = 'text' 
                        name = 'titleInput' 
                        autoFocus
                        autoComplete = 'off'
                        onKeyUp = {handleNumOfCha} 
                        defaultValue = {savedData}></input>
                <div className = {cx('numOfChaLimit')}>
                    <span> {numOfCha === 0? null: numOfCha+'/'}</span>
                    <span>50자 제한</span>
                </div>
            </div>
            <div className = {cx('buttonDiv')}><Button theme='next' onClick={submitData}>다음으로</Button></div>
        </div>
        </React.Fragment>
        );
    }
}

export default TitleField;