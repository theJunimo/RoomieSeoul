import React from 'react';
import styles from './Payment.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';

const cx = classNames.bind(styles);

export default function Payment() {
    return(
        <ContentWrapper>
            <div className = {cx('Payment')}>
                <ul>
                    <li>
                        <p>보증금/월세</p>
                    </li>
                    <li>
                        <span>1000</span>
                        <span>/</span>
                        <span>50</span>
                        <span className={cx('won')}> 만원</span>
                    </li>
                </ul>
            </div>
        </ContentWrapper>
    )
}