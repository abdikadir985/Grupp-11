//Lab3.js
window.addEventListener("load", prepareNestedUnorderedList);

function prepareNestedUnorderedList() {

let links = document.querySelectorAll('.glyphicon.glyphicon-minus');
    // Elementer som har className 'glyphicon.glyphicon-minus' tilldelas variabeln links.
    
  // console.log(links);
    
  for(let i = 0; i < links.length; i++) {
    links[i].className = "glyphicon glyphicon-plus";
    links[i].addEventListener("click", changeUnorderedListElement);
    links[i].querySelector("ul").className = "ulChildMin";
      
  }

}

function changeUnorderedListElement( inEvent ) {
    
   // console.log(inEvent)
    
  if(inEvent.target == inEvent.currentTarget){

    if(inEvent.currentTarget.className == "glyphicon glyphicon-plus"){

      inEvent.currentTarget.className = "glyphicon glyphicon-minus";

      inEvent.currentTarget.querySelector("ul").className= "ulChildMax";
        
     }
      
      
    else if(inEvent.currentTarget.className == "glyphicon glyphicon-minus"){

      inEvent.currentTarget.className = "glyphicon glyphicon-plus";

      inEvent.currentTarget.querySelector("ul").className= "ulChildMin";   
        
        
        
        
        
        // console.log(inEvent.currentTarget);
       }
    }
}
