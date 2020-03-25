//Lab3.js gruppmeddlemar: (Abdiakdir Omar, Blend Zebari, Albin Eriksson och Hoseop joun

//när prepareNestedUnorderedList laddas upp
window.addEventListener("load", prepareNestedUnorderedList);

function prepareNestedUnorderedList() {

let links = document.querySelectorAll('.glyphicon.glyphicon-minus');
    // Elementer som har className 'glyphicon.glyphicon-minus' tilldelas variabeln links.

  // console.log(links);

  for(let i = 0; i < links.length; i++) {
    links[i].className = "glyphicon glyphicon-plus";
    links[i].addEventListener("click", changeUnorderedListElement);
    links[i].querySelector("ul").className = "ulChildMin";
      // Loopen går igenom alla element i "links" och ändrar
      //className till "glyphicon glyphicon-plus" så att minustecknet blir ett plustecken,funktionen
      //anropar changeUnorderedListElement() och slutligen ändrar "ul" className till "ulChildMin" som gör att listan döljs.
  }
}

function changeUnorderedListElement( inEvent ) {

   // console.log(inEvent)
//om din target event är en nuvarande "target" så kan du gå vidare till nästa if-sats.
  if(inEvent.target == inEvent.currentTarget){
    if(inEvent.currentTarget.className == "glyphicon glyphicon-plus"){

      inEvent.currentTarget.className = "glyphicon glyphicon-minus";

      inEvent.currentTarget.querySelector("ul").className= "ulChildMax";
      //om denna nuvarande target klassnamn är ett plus så kan du gå vidare
      //där du ändrar den plus till ett minus och där innehållet ska dyka upp

     }
    else if(inEvent.currentTarget.className == "glyphicon glyphicon-minus"){

      inEvent.currentTarget.className = "glyphicon glyphicon-plus";

      inEvent.currentTarget.querySelector("ul").className= "ulChildMin";
      //som else: om denna nuvarande target klassnamn är ett minus så
      //kommer den ändras till ett plus och innehållet kommer döljas.

        // console.log(inEvent.currentTarget);
       }
    }
}
