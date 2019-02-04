var btnElement = document.querySelector('#botao');
var container = document.querySelector('#app');
var divElement = document.querySelector('#animation');
btnElement.style.cssFloat = 'left';
        
        
btnElement.onclick = function(){
           
    var boxElement = document.createElement('div');          
    boxElement.style.width = '50px';
    boxElement.style.height = '150px';
    boxElement.style.backgroundColor = 'white';  
    boxElement.style.cssFloat = 'left';     
    boxElement.style.marginTop = '100px';
    boxElement.style.borderRadius = '10px';
    boxElement.style.animation = 'anim 5s ease-in-out infinite';
    boxElement.style.marginLeft = '-10px';
    
    



    container.appendChild(boxElement); 
 
            
    boxElement.onmouseover = function (){
        var newColor = getRandomColor(); // #E943F0
        boxElement.style.backgroundColor = newColor;       
    }                     
}

        
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

