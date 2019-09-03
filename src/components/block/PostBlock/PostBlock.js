import React from 'react';
import styles from './PostBlock.scss';
import className   from 'classnames/bind';
import { Heart }from 'components/common/Icon';
const cx = className.bind(styles);


const PostBlock = ({img, post, showModal, goToPostPage}) => {
    const handleIcon = (e) => {
        e.stopPropagation();
        showModal();
    }

    return (
        <div className = {cx('blockOuter')} onClick = {goToPostPage}>
            <div className = {cx('imgWrapper')}>

            </div>
            <div className = {cx('infoWrapper')}>
                <div className = {cx('upper')}>
                    <div className = {cx('userInfo')}>
                        <div className = {cx('userImg')}></div>
                        <div className = {cx('userName')}>{post.userName}</div>
                    </div>
                    <div className = {cx('likeIcon')} onClick = {handleIcon}>
                        <Heart type = "filledHeart" />
                    </div>
                </div>
                <div className = {cx('bottom')}>
                    <p className = {cx('roomType')}>{post.roomType}</p>
                    <p className = {cx('payment')}>보증금 {post.deposit} / 월세 {post.monthlyFee}</p>
                    <p className = {cx('address')}>{post.address}</p>
                    <p className = {cx('gender')}>{post.gender==='상관없음'? '여성 | 남성 roomie' : post.gender + ' roomie'}</p>
                    <p className = {cx('title')}>{post.info}</p>
                </div>

            </div>
        </div>
    )
}

export default PostBlock;