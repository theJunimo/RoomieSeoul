import React from 'react';
import styles from './LikedPostFilter.scss';
import className from 'classnames/bind';
import { SelectButton, OptionBox } from 'components/common/SelectBox';
import { SelectedButton } from '../../common/SelectBox';

const cx = className.bind(styles);

const LikedPostFilter = () => {
    const items = ['최신순', '인기순', '보증금순', '월세순'];
    
    return (
    <div className={cx('outer')}>
        <div className={cx('filter')}>
            <SelectButton>정렬</SelectButton>
            <div className={cx('support')}>
                찜할 수 있는 방의 개수는 최대 30개 입니다.
            </div>
        </div>
        <div className={cx('selected')}>
            {/*<OptionBox items = {items}></OptionBox>*/}
            <SelectedButton>최신순</SelectedButton>
        </div>
    </div>
    );
};

export default LikedPostFilter;