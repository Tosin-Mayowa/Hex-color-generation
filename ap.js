const left= document.querySelector('button.left');
const right= document.querySelector('button.right');
const h1= document.querySelector('h1');



const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
 
 

      
  left.addEventListener('click', function(n) {
     n=6;
     let colorCode= '#';
     const colorCodes=[];
    for(let i=0; i<n; i++){
        
        const rand= Math.floor(Math.random()*hex.length);
        colorCode +=hex[rand];
       
    }
    colorCodes.push(colorCode);
    h1.innerText=colorCodes[0];
    document.body.style.backgroundColor= colorCodes[0];
    }
     );
    
    right.addEventListener('click', function(n) {
     n=6;
     let colorCode= '#';
     const colorCodes=[];
    for(let i=0; i<n; i++){
        
        const rand= Math.floor(Math.random()*hex.length);
        colorCode +=hex[rand];
       
    }
    colorCodes.push(colorCode);
    h1.innerText=colorCodes[0];
    document.body.style.backgroundColor= colorCodes[0];
    }
     )  
    







