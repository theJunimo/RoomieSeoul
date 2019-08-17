import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import MainContentWrapper from 'components/common/PageTemplate/MainContentWrapper';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <Header/>
        <main>
            <MainContentWrapper>
                {children}
            </MainContentWrapper>
        </main>
        <Footer/>
    </div>
);

export default PageTemplate;