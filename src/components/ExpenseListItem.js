// export state les functn component
// desc. amount, createdAt
import React from 'react';
import {NavLink,Link} from 'react-router-dom';

const ExpenseListItem= ({id,description,amount,createdAt})=>(
<div>

<NavLink to={`/edit/${id}`}  activeClassName="is-active" >
 <h3>{description}</h3>
 </NavLink>
 <p>{amount}-{createdAt}</p>
 

</div>
);


export default ExpenseListItem;


