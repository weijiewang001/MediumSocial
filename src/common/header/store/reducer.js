import * as constants from './constants';
// immutable库生成一个
// immutable 对象，让state不会被轻易改变
// 避免不小心改变state数据的情况
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS){
    // immutable对象的set方法，会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focused', true);
  }
  if( action.type === constants.SEARCH_BLUR){
    return state.set('focused', false)
  }
  return state
}