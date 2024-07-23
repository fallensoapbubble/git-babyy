let f=document.querySelector('form');





let i=document.querySelector('input');

f.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log("form submitted here");
    

    for(var num=0;num<6;num++){
        console.log(i.form[num].value)
    }
    

});

function check_uname(){
    console.log(i.form[0].value);

}
function check_mail(){
    console.log(i.form[1].value);
}
function check_phone(){
    let hd=document.getElementById("numErr")
    // console.log("Please enter Numeric value");

    if (isNaN(i.form[2].value)) {
        console.log("Please enter Numeric value");
        hd.classList.remove('hide');
        hd.classList.add('showing');
    }
    else{
        hd.classList.add('hide');
    }
}
function check_pw(){
    console.log(i.form[3].value);
}
function recheck_pw(){
    console.log(i.form[4].value);

}

i.form[0].addEventListener("input",check_uname);
i.form[1].addEventListener("input",check_mail);
i.form[2].addEventListener("input",check_phone);
i.form[3].addEventListener("input",check_pw);
i.form[4].addEventListener("input",recheck_pw);







let b=document.querySelector('button');
b.onclick=()=>{
    console.log('ok')
}
