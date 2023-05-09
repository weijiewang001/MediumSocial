import React, { PureComponent } from "react";
import {
  WriterWrapper,
  WriterItem,
  WriterTitle,
  WirterSwitch,
  WriterItemRight
} from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
  render(){
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>Recommend Writer</WriterTitle>
        <WirterSwitch>Switch</WirterSwitch>
        {
          list.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <img className="pic" src={item.get('imgUrl')}></img>
                <WriterItemRight>
                  <h3>{item.get('title')}</h3>
                  <p>{item.get('desc')}</p>
                </WriterItemRight>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','writerList'])
})

export default connect(mapState, null)(Writer);

