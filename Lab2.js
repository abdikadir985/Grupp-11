//Lab2.js
//html elementer
let option = document.getElementById("cbofabrikat");
let textRuta = document.querySelectorAll("[type=\"text\"]");
let currentText = null;
let checkBox = document.getElementById("cbokommentar");
let textArea = document.getElementById("txtkommentar");
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
                throw new Error ("Fyll gärna textrutan " + i+1);
            }
        }
        if(checkBox.checked){
            if(textArea.value.length<5){
                throw new Error("kommentarlängden måste vara minst 5 tecken");
            }
        }
       //om finns error 
    }catch(error){
        alert(error);
        return false;
    }
    return true;
}
//reset formuläret
function resetForm() {
    return false;
}
