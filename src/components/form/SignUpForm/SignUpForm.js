import React, {useState} from 'react';
import styles from './SignUpForm.scss';
import className   from 'classnames/bind';
import SnsLogin from 'components/common/SnsLogin';
import Button from 'components/common/Button';
import AlertModal from 'components/modal/AlertModal';

const cx = className.bind(styles);

const SignUpForm = ({emailExist, nickExist, handleEmailExist, handleNickExist, handleSignUp}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nick, setNick] = useState('');
    const [valEmail, setValEmail] = useState('');
    const [valPassword, setValPassword] = useState('');
    const [isPwCorrect, setIsPwCorrect] = useState('');
    const [valNick, setValNick] = useState('');
    const [valSubmit, setValSubmit] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === 'email') {
            setEmail(value);
        } else if (name === 'nick') {
            setNick(value);
        }
    }

    const handleEmail = async () => {
        const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!reEmail.test(email)) {
            return setValEmail('fail');
        } else if(reEmail.test(email)){
            try{
                setValEmail('success');
                await handleEmailExist(email);
                if(!emailExist) {
                    setEmail(email);
                }
            } catch(error) {
                console.log(error);
            }
        }
    }

    const handlePassword = (e) => {
        const pw = e.target.value;

        if(!pw) {
            document.getElementById('local-signUp-pwcheck').value = '';
            setValPassword('fail');
        } else if(6 <= pw.length && pw.length <= 15) {
            setValPassword('success');
        } else {
            setValPassword('fail');
        }
    }

    const handleRePassword = (e) => {
        const rePw = e.target.value;
        const pw = document.getElementById('local-signUp-pw').value;
        if(rePw === pw) {
            setIsPwCorrect('success');
            setPassword(pw);
        } else {
            setIsPwCorrect('fail');
        }
    }

    const handleNick = async() => {
        if(2 <= nick.length && nick.length <= 10) {
            try{
                setValNick('success');
                await handleNickExist(nick);
            } catch (error) {
                console.log(error)
            }
        } else {
            setValNick('fail');
        }
    }

    const handleSubmit = async () => {
        if(!emailExist 
            && !nickExist 
            && valEmail === 'success'
            && valPassword === 'success' 
            && isPwCorrect === 'success' 
            && valNick === 'success'
            && email
            && password
            && nick
        ){
            const data = {
                email,
                password,
                nick
            }

            console.log(data);
            
            try {
                await handleSignUp(data);
            } catch (error) {
                console.log(error);
            }
        } else {
            setValSubmit('fail');
        }
    }

    return (
        <div className = {cx('SignUpForm')}>
            <SnsLogin/>
            <div className = {cx('dividerLine')}></div>
            <h2>회원가입</h2>
            <div className = {cx('spotForModal')}>
                    {(valSubmit === 'fail')? <AlertModal onAnimationEnd={() => setValSubmit('')}>빈 값이 있거나 중복확인이 필요합니다.</AlertModal> : null}
            </div> 
            <div className = {cx('form')}>
                <div className = {cx('field')}>
                    <label htmlFor = 'local-signUp-email'>이메일</label>
                    <div className = {cx('input-checkButton')}>
                        <input type = 'email'
                                name = 'email'
                                id = 'local-signUp-email' 
                                onKeyUp = {handleChange}
                                placeholder = '이메일 ex)roomie@email.com' 
                                autoComplete = 'off'/>
                        <Button theme = 'gray validCheck' 
                                onClick = { handleEmail }>중복확인</Button>
                    </div>
                    <span className = {cx('validate ' + (valEmail? valEmail : ''))}>
                        { valEmail === 'fail'? '올바른 이메일 형식이 아닙니다.' : 
                            (valEmail === 'success' && emailExist)? '이미 존재하는 계정입니다.' : 
                            (valEmail === 'success' && !emailExist)? '사용가능한 이메일입니다.' : '중복 확인이 필요합니다.'}
                    </span>
                </div>
                <div className = {cx('field')}>
                    <label htmlFor = 'local-signUp-pw'>비밀번호</label>
                    <input type = 'password'
                            name = 'password'
                            id = 'local-signUp-pw' 
                            placeholder = '6자 이상 15자 이하로 입력해주세요.' 
                            onKeyUp = { handlePassword }/>
                    <span className = {cx('validate ' + (valPassword? valPassword : ''))}>
                        { valPassword === 'fail'?  '비밀번호는 6자이상 15자 이하만 가능합니다.' : '사용가능한 비밀번호입니다.' }
                    </span>
                </div>
                <div className = {cx('field')}>
                    <label htmlFor = 'pw-check'>비밀번호 확인</label>
                    <input type = 'password' 
                            id = 'local-signUp-pwcheck' 
                            placeholder = '비밀번호 재확인' 
                            onKeyUp = { handleRePassword }/>
                    <span className = {cx('validate ' + (isPwCorrect? isPwCorrect : ' '))}>
                        { isPwCorrect === 'fail'? '비밀번호가 일치하지 않습니다.' : '비밀번호가 일치합니다.'}
                    </span>
                </div>
                <div className = {cx('field')}>
                    <label htmlFor = 'local-signUp-nickName'>닉네임</label>
                    <div className = {cx('input-checkButton')}>
                        <input type = 'text'
                                name = 'nick'
                                id = 'local-signUp-nickName'
                                onKeyUp = { handleChange }
                                placeholder = '멋진 닉네임을 지어보세요!' />
                        <Button theme = 'gray validCheck' onClick = { handleNick }>중복확인</Button>
                    </div>
                    <span className = {cx('validate ' + (valNick? valNick: ''))}>
                        { valNick === 'fail'? '닉네임은 최소 2자이상 10자 이하입니다.' : 
                            (valNick === 'success' && nickExist)? '이미 존재하는 닉네임입니다.' : 
                            (valNick === 'success' && !nickExist)?'사용가능한 닉네임입니다.' : '중복 확인이 필요합니다.'}
                    </span>
                </div>
                <div>
                <Button theme = 'submit' onClick = { handleSubmit }>제출하기</Button>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;