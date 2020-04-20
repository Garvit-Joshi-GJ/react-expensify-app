class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state={
            count:this.props.count

            
        }
    }
    componentDidMount(){
      const count=parseInt(localStorage.getItem('count'));
      //const count = parseInt(json.count); 
            if(!isNan(count)){
                this.setState(()=>{
                   return{
                    count:count    // or write count only like ()=>({count})
                   } 
                })
            }
    }
    componentDidUpdate(prevProp,prevState){
       if(prevState.count!=this.state.count){
        localStorage.setItem('count',this.state.count)
       }
    }
    componentWillUnmount(){
       console.log('componentWillUnmount') 
    }
    
    handleAddOne(){
    this.setState((prevState)=>{
        return {
            count:prevState.count+1
        }
    })
    console.log(this.state);
    }
    handleMinusOne(){

       this.setState((prevState)=>{
           return{
           count:prevState.count-1
           }
       })
    }
    handleReset(){
        this.setState(()=>{
            return{
            count:0
            }
        })
        // this.setState((prevState)=>{    // works perfectly after first setState
        //     return{
        //     count:prevState.count+1
        //     }
        // })
        // this.setState({   //old style to change state , Not recommended
        //     count:0
        // })
        // this.setState({
        //     count:this.state.count+1    // this issue appears when we use above approach , becasue the this.state is not updated as REACT updates it async so we get weired results,

        // })
    }
    render(){
      return(
      <div>
      <h1>Count:{this.state.count} </h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>reset</button>
      </div> 
      ); 
    }
}
Counter.defaultProps={
    count:0
};

ReactDOM.render(<Counter />,document.getElementById('app'));


// let count=0;
// const addOne= ()=>{
//     count++;
//    renderCounterApp();
// };
// const minusOne=()=>{
//     count--;
//     renderCounterApp();
//     console.log('Minus One');
// }
// const reset=()=>{
//     count=0;
//     renderCounterApp();
//     console.log('Reset');
// }
// const template2 =(
//     <div>
//     <h1>Count : {count}</h1>
//     <button onClick={addOne}>+1</button>
//    <button onClick={minusOne}>-1</button>
//    <button onClick={reset}>Reset</button>
//     </div>
// );

// const appRoot2 = document.getElementById('app2');
 
// ReactDOM.render(template2, appRoot2);

// const renderCounterApp= ()=>{
//     const template2 =(
//         <div>
//         <h1>Count : {count}</h1>
//         <button onClick={addOne}>+1</button>
//        <button onClick={minusOne}>-1</button>
//        <button onClick={reset}>Reset</button>
//         </div>
//         );
//         ReactDOM.render(template2, appRoot2);

//     };





// function getLocation(location){
//     if(location){
//         return <p>Location:{location}</p>;
//     }
     
  
// }
// const user = {
// name:'Andrew',
// age:'40',
// location:'Atlanta'
// };
// const userName = 'Mike';
// const userAge =23; 
// const userLocation ='India';
// const template2 =(
//     <div>
//     <h1>{user.name ? user.name:'Anonymus' }</h1>
//      {(user.age && user.age>=18) && <p>Age: {user.age}</p> }
//     {getLocation(user.location)}
//     </div>
//     );
//     const approot2 = document.getElementById('app2');
//  ReactDOM.render(template2,approot2);