export default (expenses)=>{
    var sum = 0;
   if(expenses.length>0){
   expenses.forEach((expense)=>{
        const amount = expense.amount;
        sum= sum+amount;
    });
   
   }
   return sum;
}



// expenses.map((expense)=>expense.amount).reduce((sum,value)=>sum+value,0)