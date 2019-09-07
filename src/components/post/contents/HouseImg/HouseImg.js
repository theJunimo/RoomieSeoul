import React, {useState} from 'react';
import styles from './HouseImg.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';

const cx = classNames.bind(styles);

export default function HouseImg({imgArr = ['http://drive.google.com/uc?export=view&id=1_0YFYC8EGVqOE0kG4mH__pFtGQMA1P5u'
                                            ,'http://drive.google.com/uc?export=view&id=1NSTeHtD00SQrAqhfVKTtaDuGn_kkU_YV'
                                            ,'http://drive.google.com/uc?export=view&id=1y-MBeajg7iPc-f1VPkwbMDJaXBMDiHl_']})
    {
    
    const [slideIndex, setSlideIndex] = useState(0);
    
   
    const plusSlides = (n) => {
        let idx = slideIndex + n;
        if(idx >= imgArr.length) {
            idx = 0;
        } else if(idx < 0) {
            idx = imgArr.length-1;
        }
        setSlideIndex(idx);
    }

    const currentSlide = (n) => {
        setSlideIndex(n);
    }

    function Slides() {
        return imgArr.map((item, idx) => (
        <div key = {idx} style = {(slideIndex === idx? {display: 'block', backgroundImage: `url('${item}')`} : {backgroundImage: `url('${item}')`})} className = {cx('slides fade')}>
        </div>)
        )}

    function Dots() {
        const n = imgArr.length;
        let arr = [];
        for(let i = 0; i < n; i++){
            arr.push(<span className = 'dot' key = {i} onClick = {() => currentSlide(i)}></span>);
        }
        return arr;
    }

    return(
        <ContentWrapper>
            <div className = {cx('HouseImg')}>
                <div className = {cx('slideshow-container')}>
                    <Slides/>
                    <div className = {cx('prev')} onClick = {() => plusSlides(-1)}>&#10094;</div>
                    <div className = {cx('next')} onClick = {() => plusSlides(1)}>&#10095;</div>
                </div>
                <div className = {cx('dot-container')}>
                    <Dots/>
                </div>
            </div>
        </ContentWrapper>
    )
}