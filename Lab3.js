//Lab3.js
window.addEventListener("load", prepareNestedUnorderedList);

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
