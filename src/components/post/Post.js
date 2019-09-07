import React, { useState } from 'react';
import styles from './Post.scss';
import classNames from 'classnames/bind';
import {Profile, Title, HouseImg, Address, RoomType, Payment, Others, HouseInfo, Contact, Map} from './contents';

const cx = classNames.bind(styles);

export default function Post({postInfo}) {
    return(
        <div>
            <Profile/>
            <Title/>
            <HouseImg/>
            <Address/>
            <RoomType/>
            <Payment/>
            <Others/>
            <HouseInfo/>
            <Contact/>
            <Map/>
        </div>
    )
}
