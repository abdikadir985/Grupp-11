//Lab3.js
let parent  = document.querySelectorAll('[title="parent"]');
for(let i=0;i<parent.length;i++){
    parent[i].addEventListener("click",changeUnorderedListElement);
}

function prepareNestedUnorderedList() {}
function changeUnorderedListElement( inEvent ) {
    if(this.classList.contains("glyphicon-minus")){
        this.classList.remove("glyphicon-minus");
        this.classList.add("glyphicon-plus");
    }else{
        this.classList.remove("glyphicon-plus");
        this.classList.add("glyphicon-minus");
    }
}
