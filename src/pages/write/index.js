import React, { PureComponent, useEffect,useRef } from "react";
import { Navigate  } from "react-router-dom";
import { connect } from 'react-redux';

// import { actionCreators } from "./store";
import { useParams } from 'react-router-dom';
function Write (props) {
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

    if(loginStatus){
      return (
        <div>Write article</div>
      )
    }else {
      return <Navigate to='/login'></Navigate>
    }
    

  
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
})



export default connect(mapState, null)(Write);
