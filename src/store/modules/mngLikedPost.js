import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
//action types
const SHOW_MODAL = 'mngLikedPost/SHOW_MODAL'; //좋아요 취소 모달 보이기
const CLOSE_MODAL = 'mngLikedPost/CLOSE_MODAL'; //좋아요 취소 모달 숨기기
const CANCEL_LIKE = 'mngLikedPost/CANCEL_LIKE'; //좋아요 취소하기 api
const GOTO_POSTPAGE = 'mngLikedPost/GOTO_POSTPAGE'; //해당 페이지로 가기

//action creators
export const showModal = createAction(SHOW_MODAL);
export const closeModal = createAction(CLOSE_MODAL);
export const cancelLike = createAction(CANCEL_LIKE);
export const goToPostPage = createAction(GOTO_POSTPAGE);

//초기값
const initialState = Map({
    modalVisible: false
})

export default handleActions({
    [SHOW_MODAL]: (state, action) => {
        return state.set('modalVisible', true);
    },
    [CLOSE_MODAL]: (state, action) => {
        return state.set('modalVisible', false);
    },
    [CANCEL_LIKE]: (state, action) => {
        console.log('좋아요 취소');
    },
    [GOTO_POSTPAGE]: (state, action) => {
        console.log('상세페이지로 가기');
    }
}, initialState)

