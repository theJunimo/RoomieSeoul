import React from 'react';
import styles from './AlertModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const AlertModal = ({child}) => {
    return(
        <ModalWrapper>
            <div className={cx('modalOuter')}>
                <div>
                    {child}
                </div>
                <div className={cx('options')}>
                    <Button theme='support'>네, 알겠습니다</Button>
                </div>
            </div>
        </ModalWrapper>
    )
}

export default AlertModal;