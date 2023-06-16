import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  margin:0 auto;
  background: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 220px;
  margin: 80px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8 rgba(0,0,0,0.1)
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height:30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
`;

export const Button = styled.div`
  width: 220px;
  line-height:30px;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
`;