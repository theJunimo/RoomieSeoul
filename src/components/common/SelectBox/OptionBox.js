import React from 'react';
import styles from './OptionBox.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const OptionBox = ({items}) => {
    const itemList = items.map((item, idx) => (
        <div key={idx}
            className={cx('item')}>{item}</div>
        )
    );

    return (
        <div className={cx('list-box')}>
        {itemList}
        </div>
    );
}

export default OptionBox;