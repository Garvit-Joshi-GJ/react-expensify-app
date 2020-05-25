const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve('this is my resolved data');
       // reject('Error: something went worng');
    },1500)
console.log('before');
});

promise.then((data)=>{
    console.log(data);
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve('this is my returned promise');
        },1500)
    console.log('before');
    });
}).then((val)=>{
    console.log('does ths run..'+val);
}).catch((error)=>{
    console.log(error);
})

console.log('after');

/*
alterbative to the promise syntax:

1. then can take 2 args and we can use this in place of cathch
        promise.then((data)=>{
        console.log(data);
    },((error)=>{
        console.log(error);
    });




*/