/*global daum*/
import React, {useEffect} from 'react';
import styles from './Map.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';

const cx = classNames.bind(styles);

export default function Map() {
    useEffect(()=>{
            const script = document.createElement("script");

            script.type = 'text/javascript';
            script.src  = '//dapi.kakao.com/v2/maps/sdk.js?appkey=3a4c7ef6f66958b54b15ab506bcf1111&autoload=false';
            script.async = true;

            document.head.appendChild(script);

            script.onload = () => {
                window.kakao.maps.load(()=> {
                    //파라미터로 autoload=false를 줘서 v3이 모두 로드된 후, 이 콜백함수가 실행된다.
                    let el = document.getElementById('map');
                    let markerPosition = new daum.maps.LatLng(33.450701, 126.570667);
                    let map = new daum.maps.Map(el, {
                      center: new daum.maps.LatLng(33.450701, 126.570667),
                      level: 3
                    });
                    let marker = new daum.maps.Marker({
                        position: markerPosition
                    });
                    marker.setMap(map);
                })
            }
        }
    );


    return(
        <ContentWrapper theme = 'line-top'>
            <div className = {cx('Map')}>
                <p>지도로 보기</p>
                <div id = 'map' className = {cx('map-block')}>
                </div> 
            </div>
        </ContentWrapper>
    );
}