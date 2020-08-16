const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const todo = document.getElementById('todo');

function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`
    setTimeout(showTime, 1000) //1000분에 1초니깐 곱하기 1000을 하여 1초마다로 맞추기

}

function addZero(n){
    return (parseInt(n,10) < 10 ? '0' : '') + n ;

}

function setBackground(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        document.body.style.backgroundImage = `url(./images/morning.jpg)`
        greeting.textContent = "Good Morning";
    } else if(hour < 18){
        document.body.style.backgroundImage = `url(./images/afternoon.jpg)`
        greeting.textContent = "Good Afternoon";
    } else{
        document.body.style.backgroundImage = `url(./images/night.jpg)`
        greeting.textContent = "Good Night";
    }
} 

function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode ==13){ //||는 또는 
            localStorage.setItem('name',e.target.innerText);
            name.blur(); //focus 잃어버리게 하기
        } 
    } else {
        localStorage.setItem('name',e.target.innerText)
    }

}


function getName(){
    if(localStorage.getItem('name') === null) {
        name.textContent = "Enter your Name"
    } else {
        name.textContent = localStorage.getItem('name')
    }
}
name.addEventListener('keypress',setName);

function setTodo(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode ==13){
            localStorage.setItem('todo',e.target.innerText);
            todo.blur(); //focus 잃어버리게 하기
        } 
    } else {
        localStorage.setItem('todo',e.target.innerText)
    }

}


function getTodo(){
    if(localStorage.getItem('todo') === null) {
        todo.textContent = "Enter What To do"
    } else {
        todo.textContent = localStorage.getItem('todo')
    }
}
todo.addEventListener('keypress',setTodo);


showTime();
setBackground();
getName();
getTodo();