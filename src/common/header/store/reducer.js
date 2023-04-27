import * as constants from './constants';
// immutable库生成一个
// immutable 对象，让state不会被轻易改变
// 避免不小心改变state数据的情况
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SEARCH_FOCUS :
      return state.set('focused', true);
    case constants.SEARCH_BLUR :
      return state.set('focused', false);
    case constants.CHANGE_LIST :
      return state.set('list', action.data);
    default: 
      return state;
  }
}