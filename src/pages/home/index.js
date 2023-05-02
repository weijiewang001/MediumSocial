import React, { Component } from "react";
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'

import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style';

class Home extends Component {
  render(){
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img' src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*pPDGinb8Z17nXMmifwIESw.png"></img>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
      </div>
    )
  }
}

export default Home;