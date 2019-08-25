import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as writePostActions from 'store/modules/writePost';
import WritingForm from 'components/form/WritingForm';

class WritingFormContainer extends Component {
    
    toPrevStep = () => {
        const {WritePostActions} = this.props;
        WritePostActions.toPrevStep();
    }

    toNextStep = () => {
        const {WritePostActions} = this.props;
        WritePostActions.toNextStep();
    }

    render() {
        const {currentStep} = this.props;
        const {toPrevStep, toNextStep} = this;
        
        return(
            <WritingForm currentStep = {currentStep} 
                            onPrevButton = {toPrevStep} 
                            onNextButton = {toNextStep}/>
        )
    }
}

export default connect(
    (state) => ({
        currentStep: state.writePost.get('currentStep')
    }),
    (dispatch) => ({
        WritePostActions: bindActionCreators(writePostActions, dispatch)
    })
)(WritingFormContainer);