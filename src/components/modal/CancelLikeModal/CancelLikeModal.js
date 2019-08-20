import React from 'react';
import styles from './CancelLikeModal.scss';
import className from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button';

const cx = className.bind(styles);

const CancelLikeModal = ({}) => (
    <ModalWrapper>
    <div className={cx('modalOuter')}>
        <div>
            정말로 찜 목록에서 삭제하실 건가요?
        </div>
        <div className={cx('options')}>
            <Button theme='yes'>네</Button>
            <Button theme='no'>아니오</Button>
        </div>
    </div>
    </ModalWrapper>
);

export default CancelLikeModal;