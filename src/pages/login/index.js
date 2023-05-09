import React, { PureComponent, useEffect,useRef } from "react";
import { Navigate  } from "react-router-dom";
import { connect } from 'react-redux';
import {
  LoginBox,
  LoginWrapper,
  Input,
  Button
} from './style';
import { actionCreators } from "./store";

// import { actionCreators } from "./store";
import { useParams } from 'react-router-dom';
function Login (props) {
  const account = useRef(null);
  const password = useRef(null);
  const { loginStatus } = props;
  useEffect(() => {
    // 在组件挂载后执行的操作
    // 相当于 componentDidMount
    return () => {
      // 在组件卸载前执行的清理操作
      // 相当于 componentWillUnmount
    };
  },[])

    if(!loginStatus){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="Account" type="" ref={(input) => {account.current=input}}></Input>
            <Input placeholder="Password" type="password" ref={(input) => {password.current=input}}></Input>
            <Button onClick={() => props.login(account,password)}>Log In</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Navigate to='/'></Navigate>
    }
    

  
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem){
    dispatch(actionCreators.login(accountElem.current.value,passwordElem.current.value))
  }
})

export default connect(mapState, mapDispatch)(Login);
