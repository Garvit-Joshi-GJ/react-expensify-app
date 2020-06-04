// export state les functn component
// desc. amount, createdAt
import React from 'react';
import moment from 'moment';
import numeral from 'numeral'
import {NavLink,Link} from 'react-router-dom';

const ExpenseListItem= ({id,description,amount,createdAt})=>(


<NavLink className='list-item' to={`/edit/${id}`}  activeClassName="is-active" >
<div>
<h3 className='list-item__title'>{description}</h3>
<span className='list-item__sub-title'> {moment(createdAt).format('MMMM Do, YYYY')}
</span>
</div> 

 <h3 className='list-item_data'>{numeral(amount/100).format('$0,0.00')}</h3>

 </NavLink>
  
 


);


export default ExpenseListItem;


