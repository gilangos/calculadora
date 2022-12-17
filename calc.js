var space = document.querySelector('.space');


function OperIsRepeated(arg){
    let number = space.innerHTML;
    if(arg === '*' || arg === '/'){
        if(number[number.length - 1] === '*' || number[number.length - 1] === '/'){
            return true
        }
    }
    if(arg === '-' || arg === '+'){
        if(number[number.length - 1] === '-' || number[number.length - 1] === '+'){
            return true
        }
    }
    return false
}

function IsEmpty(){
    let hascontent = space.innerHTML ? true : false;
    return hascontent;
}

function insert(num){
    let number = space.innerHTML;

    if(OperIsRepeated(num)) return
    if(num === '*' || num === '/'){
        if(IsEmpty){
            return
        }
    }
    // #### inserir ###
    space.innerHTML = number + num;
}


function exclude(){
    let number = space.innerHTML;
    // space.innerHTML = temcoisa.substring(0, temcoisa.length - 1);
    space.innerHTML = number.slice(0,number.length - 1)
}


function clean(){
    space.innerHTML = "";
}

function calc(){
    let number = space.innerHTML;
    if(number){
        space.innerHTML = eval(number);
    }
    else{
        space.innerHTML = 'empty'
        setTimeout(()=>{
            space.innerHTML = ""
        },2000)
    }
}






