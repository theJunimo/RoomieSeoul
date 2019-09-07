import React from 'react';
import styles from './Others.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

export default function Others({options = ['반려동물', '주차가능', '단기거주', 
'풀옵션', '빌트인', '엘리베이터', 
'생필품 지원', '공과금 포함', '흡연자가능']}) {

    function OptionList() {
        return options.map((item, idx) => (<Button key = {idx} theme = 'post-option selected no-pointer'>{item}</Button>))
    }

    return(
        <ContentWrapper>
            <div className = {cx('Others')}>
                {!options? '제공하는 옵션이 따로 없습니다' : <OptionList />}
            </div>
        </ContentWrapper>
    )
}