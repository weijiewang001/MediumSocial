import React, { PureComponent, useEffect } from "react";
import { connect } from 'react-redux';
import {
  DetailWrapper,
  Header,
  Content,
} from './style'
import { actionCreators } from "./store";
import { useParams } from 'react-router-dom';


function Detail (props) {
  const { id } = useParams();
  const { title, content, getDetail} = props;
  useEffect(() => {
    getDetail(id);
    console.log('你好',id)
    // 在组件挂载后执行的操作
    // 相当于 componentDidMount
    return () => {
      // 在组件卸载前执行的清理操作
      // 相当于 componentWillUnmount
    };
  },[])
    return (
      <DetailWrapper>
        <Header>
          {title}
        </Header>
        <Content dangerouslySetInnerHTML={{__html: content}}/>
      </DetailWrapper>
    )

  
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
})

export default connect(mapState, mapDispatch)(Detail);
