import React from 'react';
import styles from './OptionBox.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const OptionBox = ({items, theme, onClick, visible, selected}) => {
    
    const itemList = items.map((item, idx) => {
        if(selected === item){
            return null;
        } else {
            return <div key={idx}
                        className={cx('item')} 
                        onClick={()=> onClick(item)} >{item}</div>
        }
    })
    
    return (
        <div className={cx('list-box', theme)} style={{display: visible? 'inline-block' : 'none'}}>
        {itemList}
        </div>
    );
}

export default OptionBox;