import React from 'react';
import styles from './AddressField.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const AddressField = () => {
    return (
        <div className = {cx('addressFieldDiv')}>
            <div className = {cx('subTitleDiv')}>
                <h2 className = {cx('subTitle')}>
                    주소를 입력해주세요.
                </h2>
            </div>
            <div className = {cx('innerDiv')}>
                <div className = {cx('flexColumn')}>
                    <input className= {cx('searchAdd')} type = 'text' placeholder='주소 검색'></input>
                    <input className= {cx('detailAdd')}type = 'text' placeholder='상세정보 입력'></input>

                </div>
            </div>
            <div className = {cx('buttonDiv')}>
                <Button theme='prev'>이전으로</Button> 
                <Button theme='next'>다음으로</Button>
            </div>
        </div>
    )
}

export default AddressField;