import React from 'react';
import { BrowserRouter, Route,Switch,Link,NavLink,Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
 //if we use BrowserRouter tag then we donot pass history it is automatically managed by React- rounter but as we need to implemet 
 // firebase authentication : we are passing histry object of our own
const AppRouter=()=>(
    <Router history={history}>
    <div>
    <Switch>
    <PublicRoute path='/' component={LoginPage} exact={true}/>
    <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} exact={true}/>
    <PrivateRoute path='/create' component={AddExpensePage} />
    <PrivateRoute path='/edit/:id' component={EditExpensePage} />
    <Route component={NotFoundPage} exact={true}/>
    
    </Switch>
    </div>
    
    
    </Router>
);


export default AppRouter;



//    <Route path='/help' component={HelpPage} />
