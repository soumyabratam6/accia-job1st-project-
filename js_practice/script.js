console.log('hiii');
let parent = document.getElementById('my-body');
parent.innerHTML += "<h1>Hello World</h1>"
parent.style.backgroundColor="black";
parent.style.color="white";
let clickbtn = document.getElementById('btn');
function changeBackground (){
    parent.style.backgroundColor="yellow";
    parent.style.color="red";
}
clickbtn.addEventListener('click',changeBackground);