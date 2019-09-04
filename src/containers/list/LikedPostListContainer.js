import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as mngLikedPostActions from 'store/modules/mngLikedPost';
import LikedPostListWrapper from 'components/list/LikedPostList';



class LikedPostListComponent extends Component {
    showModal = () => {
        const { MngLikedPostActions } = this.props;
        MngLikedPostActions.showModal();
    }

    closeModal = () => {
        const { MngLikedPostActions } = this.props;
        MngLikedPostActions.closeModal();
    }

    cancelLike = (postId) => {
        console.log('좋아요 취소하기');
        //const { MngLikedPostActions } = this.props;
       // MngLikedPostActions.cancelLike(postId);
    }

    goToPostPage = (postId) => {
       this.props.history.push('/post');
    }

    render() {
        const { modalVisible } = this.props;
        const { showModal, closeModal, cancelLike, goToPostPage } = this;
        return(
            <LikedPostListWrapper
                modalVisible = { modalVisible }
                showModal = { showModal }
                closeModal = { closeModal }
                cancelLike = { cancelLike }
                goToPostPage = { goToPostPage }/>
        )
    }
}

export default withRouter(connect(
    (state) => ({
        modalVisible: state.mngLikedPost.get('modalVisible')
    }),
    (dispatch) => ({
        MngLikedPostActions: bindActionCreators(mngLikedPostActions, dispatch)
    })
)(LikedPostListComponent));