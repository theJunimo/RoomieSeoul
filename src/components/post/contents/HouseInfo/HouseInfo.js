import React from 'react';
import styles from './HouseInfo.scss';
import classNames from 'classnames/bind';
import ContentWrapper from 'components/post/contents/ContentWrapper';

const cx = classNames.bind(styles);

export default function HouseInfo() {
    return(
        <ContentWrapper theme='line-top'>
            <div className = {cx('HouseInfo')}>
                <p>저희 집은 이런 집이에요!</p>
                <div>
                    가전 가구 다 완비되어 있구요. 정수기, 에어컨 두 대, 냉장고 두대 등 <br/>
                    집자체도 넓어 거실 2개, 베란다 3개, 창고, 단독 세탁실, 주방도 단독으로 분리되어 있어요.<br/>
                    주방만 왠만한 집 거실 크기는 되는 것 같아요~ㅎ<br/>
                    남향 집이라 환하고, 앞에 막힌 건물이 없고 옆동과 동간 거리가 있어 시야가 탁 트이고 통풍도 좋아요<br/>
                    역삼역에서 6~7분 정도 역세권이라 주변 먹자골목에 없는 거 없고, 골목길 전혀 안들어가요.<br/>
                    <br/>
                    거실에는 자유롭게 이용할 수 있는 책상 및 테이블, 화장대, 여분 수납장, 서랍장 있어요.<br/>
                    이상 더 궁금하신거 있으시면 연락처로 문의 주시고 집 부보러 오세요.<br/>
                    저희 쉐어 하우스는 다른 곳보다 공과금이 적게 나와요. 봄가을 평균 2~3만원대 나오신다고 생각하시면 돼요.<br/>
                    입주사무비 처음 5만원 있어요 ^^.<br/>
                    실내 조명 및 도배, 벽지, 바닥재, 싱크대 전부 다 새로 리모델링 했어요. 새 침대를 사용하실 수 있는 
                    좋은 기회랍니다 :) <br/>
                    아직 가구들이 몇몇개 안들어 왔을 때 찍은 사진 들인데 방 보러오시면 모두 갖추어진 상태로 보실 수 있어요.<br/>
                    실물로 보셔야 더 마음에 드실거에요. 강남역에서 5분 이내 초역세권 위치 대비 저렴한 실속있는 집이랍니다~<br/>
                    그래서 한 번 이 집으로 들어오시면 나가기 더 힘들어지 실 수도있어요ㅎㅎ<br/>
                    여기 사는 친구들 돈모아서 독립한 친구들도 많아요~~<br/>
                </div>
            </div>
        </ContentWrapper>
    )
}