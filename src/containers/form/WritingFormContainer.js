import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as writePostActions from 'store/modules/writePost';
import WritingForm from 'components/form/WritingForm';


class WritingFormContainer extends Component {
    componentDidMount = () => {
        const{WritePostActions} = this.props;
        WritePostActions.initialize();
    }
    
    submitTitle = (data) => {
        const{WritePostActions} = this.props;
        WritePostActions.submitTitle(data);
    }

    submitRoomType = (data, goTo) => {
        const{WritePostActions} = this.props;
        WritePostActions.submitRoomType(data);
    }

    submitPayment = (data, goTo) => {
        const{WritePostActions} = this.props;
        WritePostActions.submitPayment(data);
    }

    submitAddress = (data, goTo) => {
        const{WritePostActions} = this.props;
        WritePostActions.submitAddress(data);
    }

    submitOthers = (data, goTo) => {
        const{WritePostActions} = this.props;
        WritePostActions.submitOthers(data);
    }

    submitDetail = (data) => {
        const{WritePostActions} = this.props;
        WritePostActions.submitDetail(data);
    }

    render() {
        const { currentStep, postInfo } = this.props;
        const { submitTitle, submitRoomType, submitPayment, submitAddress, submitOthers, submitDetail } = this;

        return(
            <WritingForm currentStep = {currentStep} 
                            savedData = {postInfo}
                            submitTitle = {submitTitle}
                            submitRoomType = {submitRoomType}
                            submitPayment = {submitPayment}
                            submitAddress = {submitAddress}
                            submitOthers = {submitOthers}
                            submitDetail = {submitDetail}/>
        )
    }
}

export default connect(
    (state) => ({
        currentStep: state.writePost.get('currentStep'),
        postInfo: state.writePost.get('postInfo')
    }),
    (dispatch) => ({
        WritePostActions: bindActionCreators(writePostActions, dispatch)
    })
)(WritingFormContainer);