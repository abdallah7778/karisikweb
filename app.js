// const a=[1,2,3,4,5];
// const f=a.filter(function(age){
//     if(age>=4){
//         return true;
//     }
// });

// console.log(f);

// const i=a.forEach(function(e){
//     console.log(e**2); //squaring the array elements
// });

// function calcAge(Birthdate){
//     return 2023-Birthdate;
// }

// function AgeUntillRetirement(){
//     const age=calcAge(1955);
//     const retirement=64-age;
//     const conditionRetirement=retirement>0?'still not retired':'you already retired';
//     console.log('my age is'+' '+age)
//     console.log(conditionRetirement);
// }
// AgeUntillRetirement();

const header=document.querySelector('h1');
const inp=document.querySelector('input');
const btn=document.querySelector('button');
const btnDel=document.querySelector('del');

btn.addEventListener('click',function(e){
    e.preventDefault();
    

    

    if(inp.value==''){
        alert('you have to add a header!!')
    }else{
        header.textContent=inp.value;
    }
    
    inp.value='';
});

btnDel.addEventListener('click', function(){
    header.parentElement.remove;
});