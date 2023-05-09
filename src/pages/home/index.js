import React, { PureComponent } from "react";
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { connect } from 'react-redux';
import { actionCreators } from "./store";

import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
// import { matchPath } from "react-router-dom";

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img' alt="" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*pPDGinb8Z17nXMmifwIESw.png"></img>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
          {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Back to top</BackTop> : null}
        </HomeWrapper>
      </div>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 320){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})


export default connect(mapState, mapDispatch)(Home);