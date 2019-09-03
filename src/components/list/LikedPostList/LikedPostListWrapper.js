import React from 'react';
import styles from './LikedPostListWrapper.scss';
import className from 'classnames';
import CancelLikeModal from 'components/modal/CancelLikeModal';
import LikedPostList from './LikedPostList';

const cx = className.bind(styles);

const LikedPostListWrapper = ({modalVisible, showModal, closeModal, goToPostPage, cancelLike}) => {
    return(
        <div className = {cx('likedListwrapper')}>
            <CancelLikeModal modalVisible = { modalVisible }
                             closeModal = { closeModal }
                             cancelLike = { cancelLike }/>
            <LikedPostList showModal = { showModal }
                           closeModal = { closeModal }
                           goToPostPage= {goToPostPage}/>
        </div>   
    )
}

export default LikedPostListWrapper;