import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

//action types
const INITIALIZE = 'writepost/INITIALIZE' //상태값 초기화
const SUBMIT_TITLE = 'writePost/SUBMIT_TITLE'; // title 정보 변경
const SUBMIT_ROOMTYPE = 'writePost/SUBMIT_ROOMTYPE'; // roomtype 정보 변경
const SUBMIT_PAYMENT = 'writePost/SUBMIT_PAYMENT'; // payment 정보 변경
const SUBMIT_ADDRESS = 'writePost/SUBMIT_ADDRESS'; // address 정보 변경
const SUBMIT_OTHERS = 'writePost/SUBMIT_OTHERS'; // others 정보 변경
const SUBMIT_DETAIL = 'writePost/SUBMIT_DETAIL'; // info 정보 변경
const SUBMIT_FINAL = 'writePost/SUBMIT_FINAL'; // api 제출하기

//action creators
export const initialize = createAction(INITIALIZE);
export const submitTitle = createAction(SUBMIT_TITLE);
export const submitRoomType = createAction(SUBMIT_ROOMTYPE);
export const submitPayment = createAction(SUBMIT_PAYMENT);
export const submitAddress = createAction(SUBMIT_ADDRESS);
export const submitOthers = createAction(SUBMIT_OTHERS);
export const submitDetail= createAction(SUBMIT_DETAIL);
export const submitFinal = createAction(SUBMIT_FINAL);

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
            deposit: 0,
            monthlyFee: 0,
            mngFee : 0
        }),
        address: Map({
            fullAddr: '',
            extraAddr: '',
            sido: '',
        }),
        others: Map({
            gender: '',
            options: [ ],
        }),
        detail: Map({
            contactType: '',
            contact: '',
            info: '',
            img: '',
        })
    })
});

export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [SUBMIT_TITLE]: (state, action) => {
        const {payload: data} = action;
        const currentStep = state.get('currentStep') + 1;
        return state.set('currentStep', currentStep)
                    .setIn(['postInfo', 'title'], data);
    },
    [SUBMIT_ROOMTYPE]: (state, action) => {
        const {data, goTo} = action.payload;
        let currentStep;
        if (goTo === "prev") {
            currentStep = state.get('currentStep') - 1;
        } else {
            currentStep = state.get('currentStep') + 1;
        }
        return state.set('currentStep', currentStep)
        .setIn(['postInfo', 'room'], data);
    },
    [SUBMIT_ADDRESS]: (state, action) => {
        const {data, goTo} = action.payload;
        let currentStep;
        if (goTo === "prev") {
            currentStep = state.get('currentStep') - 1;
        } else {
            currentStep = state.get('currentStep') + 1;
        }
        return state.set('currentStep', currentStep)
        .setIn(['postInfo', 'address'], data);
    },
    [SUBMIT_PAYMENT]: (state, action) => {
        const {data, goTo} = action.payload;
        let currentStep;
        if (goTo === "prev") {
            currentStep = state.get('currentStep') - 1;
        } else {
            currentStep = state.get('currentStep') + 1;
        }
        return state.set('currentStep', currentStep)
                    .setIn(['postInfo', 'payment'], data);
    },
    [SUBMIT_OTHERS]: (state, action) => {
        const {data, goTo} = action.payload;
        let currentStep;
        if (goTo === "prev") {
            currentStep = state.get('currentStep') - 1;
        } else {
            currentStep = state.get('currentStep') + 1;
        }
        return state.set('currentStep', currentStep)
                    .setIn(['postInfo', 'others'], data);
    },
    [SUBMIT_DETAIL]: (state, action) => {
        const {data} = action.payload;
        const currentStep = state.get('currentStep') - 1;
        return state.set('currentStep', currentStep)
                    .setIn(['postInfo', 'detail'], data);
    }
}, initialState)

