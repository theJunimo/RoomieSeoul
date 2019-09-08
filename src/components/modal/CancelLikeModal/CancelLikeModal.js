import React from 'react';
import styles from './CancelLikeModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const CancelLikeModal = ({modalVisible, cancelLike, closeModal}) => (
    <ModalWrapper type='cancelLike' visible = {modalVisible}>
    <div className={cx('modalOuter')}>
        <div>
            정말로 찜 목록에서 삭제하실 건가요?
        </div>
        <div className={cx('options')}>
            <Button theme='yes' onClick={cancelLike}>네</Button>
            <Button theme='no' onClick={closeModal}>아니오</Button>
        </div>
    </div>
    </ModalWrapper>
)

export default CancelLikeModal;