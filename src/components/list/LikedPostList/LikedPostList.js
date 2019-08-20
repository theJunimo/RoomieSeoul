import React from 'react';
import styles from './LikedPostList.scss';
import className from 'classnames/bind';
import PostBlock from 'components/block/PostBlock';

const cx = className.bind(styles);

const LikedPostList = ({postList}) => {
    return (
    <div className={cx('listWrapper')}>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
        <PostBlock></PostBlock>
    </div>
)}

export default LikedPostList;