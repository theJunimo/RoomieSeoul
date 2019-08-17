import React from 'react';
import styles from './SignUpForm.scss';
import className from 'classnames/bind';
import SnsLogin from 'components/common/SnsLogin';

const cx = className.bind(styles);

const SignUpForm = () => {
    return (
        <div className={cx('container')}>
            <SnsLogin/>
        </div>
    );
};

export default SignUpForm;