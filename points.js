const ni1=document.querySelector('#num1');
var ni2=document.querySelector('#num2');
var x,y;
var btn = document.querySelector('button');

ni1.addEventListener("change",()=>{
    x=Number( ni1.value );
});

ni2.addEventListener("change",()=>{
    y= Math.floor( ni2.value);
   
});



var h4= document.querySelector('h4');

btn.addEventListener('click',()=>{
    h4.innerText=`ans : ${x+y}`
});





const ni3=document.querySelector('#num3');
ni3.addEventListener("change",()=>{
    numz=Number( ni3.value );
});

var btndiv=document.querySelector('#divb');
var btnoe=document.querySelector('#oeb');


var ansdiv=document.querySelector('#diva');
btnoe.addEventListener('click',()=>{
    str='';
    if(numz%2==0){
        str='even';
    }
    else{
        str='odd';
    }
    ansdiv.innerText=`So, it is ${str}`
    console.log(str);
});


var ansoe=document.querySelector('#oea');
btndiv.addEventListener('click',()=>{
    str='';
    if(numz%2==0){
        str=' by 2 ';
    }
    if (numz%2==0){
        str+=' by 3 ';
    }
    if (numz%5==0){
        str+=' by 5 ';
    }
    console.log(str);
    ansoe.innerText=`So, it is div  ${str}`
});









const ipstr=document.querySelector('#ipstr');
var vowels = ["a", "e", "i", "o", "u"];
vo=[];
co=[];


function isVowel (ch){
    for(j in vowels){
        if (ch==vowels[j]){
            return true;
        }
    }
    return false;
}
ipstr.addEventListener("change",()=>{
    st=ipstr.value;
    st=st.toLowerCase();
    // console.log(st);
    for(i in st){
        if (isVowel(st[i])){
            vo.push(st[i]);
        }
        else{
            co.push(st[i]);
        }
        
    }
    console.log(vo);
    console.log(co);

});
