import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import {
  RecommendList,
  RecommendItem,
} from '../style';

class Recommend extends PureComponent {
  render(){
    const { list } = this.props;
    return (
      <RecommendList>
        {
          list.map((item) => {
            return (
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
                <img className="recommend-pic" src={item.get('imgUrl')}></img>
              </RecommendItem>
            )
          })
        }
      </RecommendList>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','recommendList'])
})

export default connect(mapState, null)(Recommend);