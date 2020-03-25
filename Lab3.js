//Lab3.js
window.addEventListener("load", prepareNestedUnorderedList);

function prepareNestedUnorderedList() {

let links = document.querySelectorAll('.glyphicon.glyphicon-minus');
    
  // console.log(links);
    
  for(let i = 0; i < links.length; i++) {
    links[i].className = "glyphicon glyphicon-plus";
    links[i].addEventListener("click", changeUnorderedListElement);
    links[i].querySelector("ul").className = "ulChildMin";

  }

}

function changeUnorderedListElement( inEvent ) {
    
   // console.log(inEvent)
    
    if(this.classList.contains("glyphicon-minus")){
        this.classList.remove("glyphicon-minus");
        this.classList.add("glyphicon-plus");
    }else{
        this.classList.remove("glyphicon-plus");
        this.classList.add("glyphicon-minus");
    }
}
