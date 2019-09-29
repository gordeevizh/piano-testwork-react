import { generatePath } from 'react-router-dom';
import { API_USER_QUESTIONS, API_QUESTIONS_BY_TAG, API_SEARCH, API_ANSWERS } from '../constants/api';
import { quickData, searchResult, answers } from './mock';

export const GET_ANSWERS = 'GET_ANSWERS';
export const GET_BY_AUTHOR = 'GET_BY_AUTHOR';
export const GET_BY_TAG = 'GET_BY_TAG';
export const GET_SEARCH = 'GET_SEARCH';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const SET_ERROR = 'SET_ERROR';

export function itemsIsLoading(bool) {
  return {
      type: 'ITEMS_IS_LOADING',
      isLoading: bool
  };
}

function loadData(url, dispatch) {
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, error });
    })
}

export function getAnswers(questionId) {
  return (dispatch) => {
    /* const url = generatePath(API_ANSWERS, { questionId });
    
    dispatch(itemsIsLoading(true));
    loadData(url, dispatch)
      .then((res) => {
        dispatch({ type: GET_ANSWERS, items: res.items });
        dispatch(itemsIsLoading(false));
      }) */
      dispatch({type: GET_ANSWERS, items: answers.items });
  };  
}

export function getSearchResults(query) {
  return (dispatch) => {
    /* const url = generatePath(API_SEARCH, { query: query });
    
    dispatch(itemsIsLoading(true));
    loadData(url, dispatch)
      .then((res) => {
        dispatch({ type: GET_SEARCH, items: res.items });
        dispatch(itemsIsLoading(false));
      }) */
      dispatch({type: GET_SEARCH, items: searchResult.items });
  };  
}

export function getResultsByAuthor(author) {
  return (dispatch) => {
    /* const url = generatePath(API_USER_QUESTIONS, { userName: author});
    
    dispatch(itemsIsLoading(true));
    loadData(url, dispatch)
      .then((res) => {
        dispatch({ type: GET_BY_AUTHOR, items: res.items });
        dispatch(itemsIsLoading(false));
      }) */
      dispatch({type: GET_BY_AUTHOR, items: quickData.items });
  };  
}

export function getResultsByTag(tag) {
  return (dispatch) => {
    /* const url = generatePath(API_QUESTIONS_BY_TAG, { tag});
    
    dispatch(itemsIsLoading(true));
    loadData(url, dispatch)
      .then((res) => {
        dispatch({ type: GET_BY_TAG, items: res.items });
        dispatch(itemsIsLoading(false));
      }) */
      dispatch({type: GET_BY_TAG, items: quickData.items });
  };
}