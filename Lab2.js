//Lab2.js
//html elementer
let option = document.getElementById("cbofabrikat");
let textRuta = document.querySelectorAll("[type=\"text\"]");
let currentText = null;
let checkBox = document.getElementById("cbokommentar");
let textArea = document.getElementById("txtkommentar");
let numbers = document.getElementById("txtmatarstallning");
let form =  document.getElementsByTagName("form")[0];
//validera formuläret
function validateForm() {
    try{
        //om man har inte valt någonting i listan
        if(option.value=="saknas"){
            throw new Error ("välj en annan rad i select-listan");
        }
        //loopa alla textrutor
        for(let i=0;i<textRuta.length;i++){
            currentText = textRuta.item(i);
            //om någon textrutan är tom skicka error
            if(currentText.value.length==""){
                throw new Error ("Någon av din textrutan är tom, gärna fyll i den");
            }
        }
        if(isNaN(numbers.value)) {
          throw "Du kan endast ange siffror";
        }
        if(checkBox.checked){
            if(textArea.innerHTML.value<5){
                throw new Error ("Kommentar måste vara längre än 5 tecken");
            }
        }
       //om finns error 
    }
    catch(error){
      document.getElementById("errorMsg").innerHTML = error;

      // källa till att sätta klasser på ett element https://www.w3schools.com/jsref/met_element_setattribute.asp
      document.getElementsByTagName("div")[2].setAttribute("class","alert-danger alert");

      return false;
    }
    return true;
}
//reset formuläret
function resetForm() {
    document.getElementById("errorMsg").innerHTML = "";

    document.getElementsByTagName("div")[2].removeAttribute("class");
    return false;
}
