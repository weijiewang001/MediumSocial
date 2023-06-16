import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow:hidden;
  width: 960px;
  margin: 0 auto;

`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px
  width: 625px;
  float: left;

  .banner-img{
    width:300px;
    height:300px;
  }
  `;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height:32px;
  line-height:32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  margin-left:18px;
  margin-bottom:18px;
  padding-right:10px;
  border-radius:4px;
  .topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right: 10px;
  }

`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display:block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    color: #999;
    font-size: 13px;
  }
`

export const RecommendList = styled.div`
  min-height: 184px;
  margin-top: -4px;
  padding-bottom: 4px;
`

export const RecommendItem = styled.div`
  cursor:pointer;
  color: #333;
  // width: 280px;
  // height:50px;
  // background: url(${(props) => props.imgUrl})
  // background-size: contain;

  .recommend-pic{
    height:50;
    width: 280px;
  }
`

export const WriterWrapper = styled.div`
  display:block;
  position:relative;

`
export const WriterTitle = styled.div`
  font-size: 13px;
  color: #333;
  text-align: left;
  float:left;
  margin-bottom: 10px;
`

export const WirterSwitch = styled.div`
  font-size: 13px;
  color: #333;
  float: right;
  cursor:pointer;
`


export const WriterItem = styled.div`
  cursor:pointer;
  overflow: hidden;
  float:left;
  margin-bottom: 16px;
  .pic{
    float:left;
    width: 20%;
    height: 20%;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
`

export const WriterItemRight = styled.div`
  float:left;
  margin-left:10px;
  margin-top: 8px;
  h3{
    padding-top: 0px;
    margin-right: 60px;
    margin-bottom:15px;
    font-size: 14px;
    display: block;
  }
  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border: radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 20px;
  bottom: 100px;
  width: 100px;
  height:60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size:14px;
  cursor: pointer;
`