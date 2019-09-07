import React from 'react';
import styles from './Profile.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';

const cx = classNames.bind(styles);

export default function Profile() {
    return(
        <ContentWrapper>
            <div className = {cx('Profile')}>
                <div>
                    <img className = {cx('profile-img')} src = "http://drive.google.com/uc?export=view&id=1iKu7KlTjXEpOGBRNsFqFxZc8vBrJ_4D5" alt = "profileImg"></img>
                </div>
                <span>Junimo</span>
            </div>
        </ContentWrapper>
    )
}