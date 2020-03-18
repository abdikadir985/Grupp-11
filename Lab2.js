//Lab2.js
let option = document.getElementById("cbofabrikat");
let textRuta = document.querySelectorAll("[type=\"text\"");
function validateForm() {
    console.log("validera");
    try{
        if(option.value=="saknas"){
            throw "välj en annan rad i select-listan";
        }
    }catch(error){
        alert(error);
        return false;
    }
    return true;
}
function resetForm() {
    console.log("reset");
    return false;
}