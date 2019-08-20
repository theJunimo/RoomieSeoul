import React from 'react';
import styles from './PostBlock.scss';
import className from 'classnames/bind';
import Icon from 'components/common/Icon';
const cx = className.bind(styles);

const click = () => {
    console.log('하트야 클릭되니?');
}

const PostBlock = ({img, info, onClick}) => (
    <div className={cx('blockOuter')}>
        <div className={cx('imgWrapper')}>

        </div>
        <div className={cx('infoWrapper')}>
            <div className={cx('upper')}>
                <div className={cx('userInfo')}>
                    <div className={cx('userImg')}></div>
                    <div className={cx('userName')}>Junimo</div>
                </div>
                <div className={cx('likeIcon')} onClick={click}>
                    <Icon type="filledHeart" />
                </div>
            </div>
            <div className={cx('bottom')}>
                <p className={cx('roomType')}>투룸</p>
                <p className={cx('payment')}>월세 1500/30</p>
                <p className={cx('address')}>서울시 광진구 중곡동 천호대로 117길 78</p>
                <p className={cx('gender')}>여성 roomie</p>
                <p className={cx('title')}>하하호호 정다운 집</p>
            </div>

        </div>
    </div>
)

export default PostBlock;