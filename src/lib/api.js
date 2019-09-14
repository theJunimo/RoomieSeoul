import axios from 'axios';

//회원가입 관련 api
export const getIfEmailExistAPI = (email) => axios.get(`/api/auth/validate?email=${email}`); //이메일 중복확인
export const getIfNickExistAPI = (nick) => axios.get(`/api/auth/validate?nick=${nick}`); //닉네임 중복확인
export const postSignUpAPI = (data) => axios.post('/api/auth/signup', data); //회원가입

//로그인 관련 api


//유저 정보 관련 api


//글 올리기 관련 api


//메인 화면 인기 글 api


//집 검색 api