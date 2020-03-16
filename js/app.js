`use strict `;



function render(){
var msgEl= document.getElementById('message');
var pEl =document.createElement('p');
pEl.textContent='your order is finsh';
msgEl.appendChild(pEl);


}


var ssform =document.querySelector('.ssform');

// ssform.addEventListener('submit',function(e){
//     e.preventDefault();

// document.getElementById('message').style.display='flex';
// render();

// });

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
optionEl.setAttribute('value' ,objectBus[i].name);

}
}
renderss();




function myFunction(e){

    e.preventDefault();
    var shoeOrder =document.getElementById('shoeOrder');
    var sulEl =document.createElement('ul');
    shoeOrder.appendChild(sulEl);
  
    for(var i=0; i< busArrray.length;i++){
        if(e.target.value === objectBus[i].name){
            sulEl.textContent='your order are:';
        var sliEl=document.createElement('li');
        sliEl.textContent =`${objectBus[i].name}`;
        sulEl.appendChild(sliEl);
        var imgEl=document.createElement('img');
        imgEl.setAttribute('src', objectBus[i].urlImage);
        sulEl.appendChild(imgEl);
        
        }
        set2();

        }


    
    }
    
    function set2(){
        var products =JSON.stringify(objectBus);
        localStorage.setItem('key1',products);
    }
    function get2(){
        var key1=localStorage.getItem('key');
        if(key1 != null){
            objectBus =JSON.parse(key);
           myFunction(e);
        }

    }    
    selectOp.addEventListener('click',myFunction);
    get2();