import React from 'react';
import { BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin,startLogout} from '../actions/auth';

export const Header =({startLogout,displayName,photoURL})=>(
    <header className='header'> 
    <div className='content-container'>
   <div className= "header__content">
   <img alt="Profile Picture" src={photoURL} width="100" height="100" />

   <Link className='header__title' to='/dashboard'>
         <h1>Expensify</h1>
    </Link> 
    <button className=" button button--link" onClick={startLogout}>Logout</button>
    </div>
    <div className="header__para">
    <p >Hi, {displayName}</p>
    </div>
    </div>
    </header>
);

const mapDispatchToProps  =(dispatch)=>({
    startLogout : ()=> dispatch(startLogout())
});

const mapStateToProps =(state)=>{
    return{
        displayName:state.auth.displayName,
        photoURL:state.auth.photoURL,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);

// <NavLink to='/help'  activeClassName="is-active">Help</NavLink>