import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signUpActions from 'store/modules/signUp';
import SignUpForm from 'components/form/SignUpForm';

function SignUpFormContainer(props) {
    const handleEmailExist = async(email) => {
        const { SignUpActions } = props;
        try {
            await SignUpActions.getIfEmailExist(email);
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleNickExist = async(nick) => {
        const { SignUpActions } = props;
        try {
            await SignUpActions.getIfNickExist(nick);
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleSignUp = async(data) => {
        const { SignUpActions } = props;
        try {
            await SignUpActions.postSignUp(data);
        } catch (error) {
            console.log(error);
        }
    }

    const { emailExist, nickExist } = props.data;

    return(
        <SignUpForm 
            emailExist = { emailExist } 
            nickExist = { nickExist }
            handleEmailExist = { handleEmailExist }
            handleNickExist = { handleNickExist }
            handleSignUp  = { handleSignUp }
            />
    )
}

export default connect(
    (state) => ({
        data: state.signUp.data
    }),
    (dispatch) => ({
        SignUpActions: bindActionCreators(signUpActions, dispatch)
    })
)(SignUpFormContainer);