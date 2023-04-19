import React from 'react'
import {connect} from 'react-redux'

import { CSSTransition } from 'react-transition-group';

import 
{ 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from './style';

const  Header = (props) => {
  return (
    <HeaderWrapper className='dell'>
      <Logo>
        <svg viewBox="0 0 1043.63 592.71" className="q r"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g>
        </svg>
      </Logo>
      <Nav>
        <NavItem className='left active'>Home</NavItem>
        <NavItem className='left'>Download App</NavItem>
        <NavItem className='right'>Sign In</NavItem>
        <NavItem className='right'>
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont' : 'iconfont'}>
            &#xe662;
          </span>
        </SearchWrapper>  
        
      </Nav>
      <Addition>
        <Button className='writting'>
          <span className="iconfont">&#xe600;</span>
          Write
        </Button>
        <Button className='reg'>
          Get started
        </Button>
      </Addition>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(){
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur(){
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);