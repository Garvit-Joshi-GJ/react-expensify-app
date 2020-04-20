const add = (a,b)=> a+b;
const generateGreeting=(name='Annonymous')=>`Hello ${name}!`;
test('should add two numbers',()=>{
const result =add(3,4);

expect(result).toBe(7);


// if(result !=7){
//     throw new Error(`You added 3 and 4 .  The result was ${result}. Expected 7`);
// }
});

test('shoud add greeting',()=>{
    const res = generateGreeting('Garvit');

    expect(res).toBe('Hello Garvit!');
});

test('shoud get Annonymous',()=>{
    const res = generateGreeting();

    expect(res).toBe('Hello Annonymous!');
});