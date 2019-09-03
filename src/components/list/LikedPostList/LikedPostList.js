import React from 'react';
import styles from './LikedPostList.scss';
import className from 'classnames/bind';
import PostBlock from 'components/block/PostBlock';

const cx = className.bind(styles);

const dummy = [
    { 
        postId: 1,
        userName: '쉐린',
        roomType: '쓰리룸+',
        deposit: 1000,
        monthlyFee: 50,
        address: '서울시 강남구 강남대로 238(도곡동, 스카이쏠라빌딩)',
        gender: '남성',
        info: '로망가득한 쉐어하우스를 찾고 계신다면 바로 여기!'
    },
    {
        postId: 2,
        userName: 'Junimo',
        roomType: '투룸',
        deposit: 0,
        monthlyFee: 50,
        address: '서울시 동대문구 서울시립대로3길 6(전농동)',
        gender: '상관없음',
        info: '작지만 갖출건 다 갖춘 곳입니다. 진심으로 몸만 오면 됩니다 :)'
    },
    {
        postId: 3,
        userName: '코코넛과자',
        roomType: '투룸',
        deposit: 200,
        monthlyFee: 20,
        address: '서울시 동대문구 서울시립대로3길 6(전농동)',
        gender: '여성',
        info: '카페같은 집입니다! 보태니컬 인테리어를 좋아하신다면 분명히 좋아하실거에요~!'
    }
    
];

const LikedPostList = ({showModal, goToPostPage, postList = dummy}) => {
    const list = postList.map((item, idx) => (
        <PostBlock key = {idx}
                    showModal = {showModal} 
                    post = {item}
                    goToPostPage = {()=>goToPostPage(item.postId)}
                    />
    ))
    return (
        <React.Fragment>
        <div className = {cx('notice')}>찜 목록은 최대 30개까지만 저장 됩니다.</div>
        <div className = {cx('listWrapper')}>{list}</div>
        </React.Fragment>
    );
}

export default LikedPostList;