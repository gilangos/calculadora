var space = document.querySelector('.space');

function insert(num){
    let temcoisa = space.innerHTML;
    space.innerHTML = temcoisa + num;
}

function exclude(){

    let temcoisa = space.innerHTML;
    // space.innerHTML = temcoisa.substring(0, temcoisa.length - 1);
    space.innerHTML = temcoisa.slice(0,temcoisa.length - 1)
}

function limpar(){
    space.innerHTML = "";
}

function calcular(){
    let temcoisa = space.innerHTML;
    if(temcoisa){
        space.innerHTML = eval(temcoisa);
    }
    else{
        space.innerHTML = 'empty'

        setTimeout(()=>{
            space.innerHTML = ""
        },2000)
    }
}






