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
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
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