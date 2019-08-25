import React from 'react';
import styles from './OptionBox.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const OptionBox = ({items, theme, onClick, visible}) => {
    
    const itemList = items.map((item, idx) => (
        <div key={idx}
            className={cx('item')} onClick={onClick} >{item}</div>
        )
    );

    return (
        <div className={cx('list-box', theme)} style={{display: visible? 'inline-block' : 'none'}}>
        {itemList}
        </div>
    );
}

export default OptionBox;