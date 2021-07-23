


var odd = document.querySelectorAll('a','li:nth-child(odd)');
for(var i = 0; i < odd.length; i++){
    odd[i].style.fontSize='30px'
    odd[i].style.margin='10px';
    
}

var blocks = document.querySelectorAll('.blocks');

for(var i=0; i<blocks.length; i++){
    blocks[i].style.color='green';
    blocks[i].style.fontSize='20px'
}

function show(){
    alert('Hi')
}