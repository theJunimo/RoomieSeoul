import React from 'react';
import styles from './RoomType.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';

const cx = classNames.bind(styles);

export default function RoomType() {
    return(
        <ContentWrapper>
            <div className = {cx('RoomType')}>
                <div>
                    <ul>
                        <li>
                            <p>타입</p>
                            <span>쓰리룸+</span>
                        </li>
                        <li>
                            <p>해당 층/건물 층</p>
                            <span>1층 / 4층</span>
                        </li>
                        <li>
                            <p>방 개수/화장실 개수</p>
                            <span>3개 / 2개</span>
                        </li>
                    </ul>
                </div>
            </div>
        </ContentWrapper>
    )
}