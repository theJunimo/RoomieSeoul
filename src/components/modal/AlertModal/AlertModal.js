import React, {Component} from 'react';
import styles from './AlertModal.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

class AlertModal extends Component {
    render(){
        const{ children, onAnimationEnd } = this.props;

        return(
            <div className = {cx('alertDiv')} onAnimationEnd = { onAnimationEnd }>
                <div className = {cx('alertDiv-inner')}>
                    {children}
                </div>
            </div>
        )
    }
}

export default AlertModal;