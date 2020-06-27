import React from 'react';
import {connect } from 'react-redux';
import{startLogin,startLoginFB} from '../actions/auth';



export const LoginPage= ({startLogin,startLoginFB})=>{
    return(
        <div className='box-layout'>
        <div className= 'box-layout__box' >
        <h1 className='box-layout__title'>Expensify</h1>
        <p>Its time to get your expenses under Control.</p>
        <button className='button' onClick={startLogin}>Login with Google</button>
        <button className='button' onClick={startLoginFB}>Login with Facebook</button>

        </div>
        </div>
    )
}

const mapDispatchToProps =(dispatch)=>({
    startLogin:()=>dispatch(startLogin()),
    startLoginFB:()=>dispatch(startLoginFB())
});

export default connect(undefined,mapDispatchToProps)(LoginPage)