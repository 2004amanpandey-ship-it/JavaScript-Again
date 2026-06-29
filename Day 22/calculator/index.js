const button=document.querySelector('button');
button.addEventListener('click',()=>{
const input1= document.getElementById('first');
const input2= document.getElementById('second');
const number1=Number(input1.value);
const number2=Number(input2.value);
const result=number1+number2;
const parent= document.getElementById('result');

parent.textContent="result :"+ result;
})