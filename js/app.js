`use strict `;



function render(){
var msgEl= document.getElementById('message');
var pEl =document.createElement('p');
pEl.textContent='your order is finsh';
msgEl.appendChild(pEl);


}


var ssform =document.querySelector('.ssform');

ssform.addEventListener('submit',function(e){
    e.preventDefault();

document.getElementById('message').style.display='flex';
render();

});

var busArrray=[
'bag.jpg',
'banana.jpg',
'bathroom.jpg',
'boots.jpg',
'breakfast.jpg',
'bubblegum.jpg',
'chair.jpg',
'cthulhu.jpg',
'dog-duck.jpg',
'dragon.jpg',
'pen.jpg',
'scissors.jpg',
'shark.jpg',
'sweep.png',
'tauntaun.jpg',
'unicorn.jpg',
'usb.gif',
'water-can.jpg',
'wine-glass.jpg'];

objectBus=[];


function Bus(urlImage){
this.name=urlImage.split('.')[0];
this.urlImage=`images/${urlImage}`;
objectBus.push(this);

}


for(var i=0; i< busArrray.length;i++){


    new Bus(busArrray[i]);
}


function renderss(){

var selectOp =document.getElementById('selectOp');
var optionEl =document.createElement('option');
selectOp.appendChild(optionEl);
optionEl.textContent=`...`;
for(var i=0; i< busArrray.length;i++){

var optionEl =document.createElement('option');
selectOp.appendChild(optionEl);
optionEl.textContent=`${objectBus[i].name}`;

}
}
renderss();