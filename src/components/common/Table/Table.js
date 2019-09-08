import React from 'react';
import styles from './Table.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const info = {
    column: 4,
    row: 2,
    data: [
        {
            postId: '123',
            postDate: '2019-09-2',
            title: 'dummy',
            payment: '100/20'
        },
        {
            postId: '123',
            postDate: '2019-09-2',
            title: 'dummy',
            payment: '100/20'
        }
    ]
}
export default function Table({info = info}) {
    const {column, row, data} = info
    

    return(

    )
}