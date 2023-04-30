import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 55px;
  border-bottom: 1px solid rgb(240, 240, 240);

  
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top:15px;
  left:24px;
  display:block;
  width: 45px;
  height: 25px;

  .q{
    height: 25px;
  }
  .r {
    fill: rgba(41, 41, 41, 1); 
  }
  img, svg {
    vertical-align: middle;
  }
`

export const Nav = styled.div`
  width: 960px;
  padding-right:70px;
  box-sizing:border-box;
  margin:0 auto;
  height:100%;
`

export const NavItem = styled.div`
  height: 56px;
  line-height: 26px;
  padding: 15px;
  color: #333;

  &.left {
    float: left;
  }

  &.right{
    float: right;
    color: #969696;
  }

  &.active {
    color:#ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float:left;
  .zoom {
    position: absolute;
    right:5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;

    &.focused {
      background: #777;
      color:#fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
  margin-top:9px;
  margin-left:20px;
  box-sizing:border-box;
  padding: 0 33px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  line-height: inherit;
  color: #666;
  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 240px;
  }


  &.slide-enter{
    width:160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }

  &.slide-exit {
    transition: all .2s ease-out;
  }

  &.slide-exit-active{
    width: 160px;
  }

`

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`

export const Button = styled.div`
  float: right;
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin-top:9px;
  margin-right:20px;
  text-align:center;
  padding: 0 20px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;

  &.reg{
    color:#ea6f5a;
  }

  &.writting{
    color: #fff;
    background-color: #ea6f5a;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0, .2);
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size:13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    // 围绕中心点旋转
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.span`
  overflow:hidden;
`

export const SearchInfoItem = styled.a`
  display:block;
  float: left;
  padding: 0 5px;
  font-size: 12px;
  line-height: 20px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius:3px;
  margin-right: 10px;
  margin-bottom: 15px;


`