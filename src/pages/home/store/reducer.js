import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: 'Popular',
    imagUrl: 'https://miro.medium.com/v2/resize:fit:720/0*8srPci0PJV4qXyZP'
  },{
    id: 2,
    title: 'Arch',
    imagUrl: 'https://miro.medium.com/v2/resize:fit:720/0*74QU6eDZgkjNVo_9'
  },{
    id: 3,
    title: 'Tech',
    imagUrl: 'https://miro.medium.com/v2/resize:fit:720/0*WOedyA3KokCEQvQ7'
  },]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}