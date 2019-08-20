import React, { Component } from 'react';
import styles from 'ModalWrapper.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

class ModalWrapper extends Component {
    render() {
        const { children } = this.props;
        return(
            <div>
                <div className={cx('gray-background')}>
                    <div className={cx('modal-wrapper')}>
                        <div className={cx('modal')}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWrapper;