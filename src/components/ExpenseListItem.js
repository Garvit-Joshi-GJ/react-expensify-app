// export state les functn component
// desc. amount, createdAt
import React from 'react';
import moment from 'moment';
import numeral from 'numeral'
import {NavLink,Link} from 'react-router-dom';

const ExpenseListItem= ({id,description,amount,createdAt})=>(
<div>

<NavLink to={`/edit/${id}`}  activeClassName="is-active" >
 <h3>{description}</h3>
 </NavLink>
    <p>
    {numeral(amount/100).format('$0,0.00')}
    -
    {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
 

</div>
);


export default ExpenseListItem;


