import React from 'react';
import styles from './GoToWritePost.scss';
import classNames from 'classnames/bind';
import SectionContainer from 'components/main/SectionContainer';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

export default function GoToWritePost() {
    return(
        <SectionContainer theme = 'margin-bottom'>
            <div className = {cx('GoToWritePost')}>
                <h3>아주 간단한 몇 단계만 거치면 루미들에게 우리집을 알려줄 수 있습니다!</h3>
                <div className = {cx('buttion-div')}>
                <Button theme = 'white-blue'>집 올리기</Button>
                </div>
            </div>
        </SectionContainer>
    )
}
