import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';

class Header extends PureComponent {

  getListArea() {
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave,handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 7; i < page * 7; i++) {
        // console.log(newList[i])
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            Top search
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
              Switch
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list  } = this.props;
    return (
      <HeaderWrapper className='dell'>
        <Link to="/">
          <Logo>
            <svg viewBox="0 0 1043.63 592.71" className="q r"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
          </Logo>
        </Link>
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download App</NavItem>
          <NavItem className='right'>Sign In</NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe662;
            </span>
            {this.getListArea()}
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
    )
  }
}



const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])
    // 等价于state.get('header').get('focused')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // console.log(list.size);
      (list.size === 0) && dispatch(actionCreators.getList())
      // 等价于
      // if (list.size > 0){
      //   dispatch(actionCreators.getList())
      // }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      // 如果transform里面的字符不是数字，那么都替换成空
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        // 将一个字符转化成一个十进制的数字
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      // console.log(originAngle)
      // 这里的写法将rotate中的数字变成一个变量
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      }else {
        dispatch(actionCreators.changePage(1));
      }
      // console.log(page, totalPage);
      // dispatch(actionCreators.changePage());
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);