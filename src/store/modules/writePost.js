import { createAction, handleActions } from 'redux-actions';

import { Map, List } from 'immutable';

//action types
const TO_PREVSTEP = 'writePost/TO_PREVSTEP'; //이전 단계로가기
const TO_NEXTSTEP = 'writePost/TO_NEXTSTEP'; //다음 단계로 가기
const INSERT_TITLE = 'writePost/INSERT_TITLE'; // title 정보 변경
const INSERT_ROOMTYPE = 'writePost/INSERT_ROOMTYPE'; // roomtype 정보 변경
const INSERT_PAYMENT = 'writePost/INSERT_PAYMENT'; // payment 정보 변경
const INSERT_ADDRESS = 'writePost/INSERT_ADDRESS'; // address 정보 변경
const INSERT_OTHERS = 'writePost/INSERT_OTHERS'; // others 정보 변경
const INSERT_INFO = 'writePost/INSERT_INFO'; // info 정보 변경
const SUBMIT = 'writePost/SUBMIT'; // api 제출하기

//action creators
export const toPrevStep = createAction(TO_PREVSTEP);
export const toNextStep = createAction(TO_NEXTSTEP);
export const insertTitle = createAction(INSERT_TITLE);
export const insertRoomType = createAction(INSERT_ROOMTYPE);
export const insertPayment = createAction(INSERT_PAYMENT);
export const insertAddress = createAction(INSERT_ADDRESS);
export const insertOthers = createAction(INSERT_OTHERS);
export const insertInfo = createAction(INSERT_INFO);
export const submit = createAction(SUBMIT);

//초기값
const initialState = Map({
    currentStep: 1,
    postInfo: Map({
        title: '',
        room: Map({
            type: '',
            floor: 0,
            totalFloor: 0,
            roomCnt: 0,
            toiletCnt: 0
        }),
        payment: Map({
            type: '',
            deposit: 0,
            monthlyFee: 0,
            mngFee : 0
        }),
        address: Map({
            address: '',
            detail: ''
        }),
        others: Map({
            gender: '',
            options: '',
        }),
        info: Map({
            contactType: '',
            contact: '',
            info: '',
            img: '',
        })
    })
});

export default handleActions({
    [TO_PREVSTEP]: (state, action) => {
        const currentStep = state.get('currentStep') - 1;
        return state.set('currentStep', currentStep);
    },
    [TO_NEXTSTEP]: (state, action) => {
        const currentStep = state.get('currentStep') + 1;
        return state.set('currentStep', currentStep);
    }
}, initialState)

