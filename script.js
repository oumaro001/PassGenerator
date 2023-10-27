let block_question = document.getElementById('block_question');
let btn_reload = document.getElementById('btn_reload').addEventListener('click',()=> location.reload(

))
// Liste des lettres de l'alphabet
const alphabet = [];
for (var i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}
// Liste des caractères spéciaux
const caracteresSpeciaux = ['!', '@', '#', '$', '%', '&', '*', '_', '-', '+', '=', '<', '>', '?'];

console.log('Alphabet :', alphabet);
console.log('Caractères spéciaux :', caracteresSpeciaux);

// constante de la limitation des chiffres 
const limitNumber = 99;

// constante de la limitation du mots de passe
const limitPassword = 17;

const checkboxes = document.querySelectorAll(".form-check-input");

// boutton creer 
let btnCreerPassword = document.getElementById('btnCreerPassword');

// Sélectionnez l'élément checkbox par son ID
var checkbox_15 = document.getElementById("check_15");
var checkbox_23 = document.getElementById("check_23");
var checkbox_36 = document.getElementById("check_36");



checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", function() {
    // Désélectionnez les autres cases à cocher
    checkboxes.forEach(otherCheckbox => {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.checked = false;
      }
    });
  });
});

let motdePasse_array = [];

/********************************************* */
/********************************************* */
/********************************************* */
/********************************************* */


function randomNbr(){

return Math.floor(Math.random() * limitNumber);
  
}
function randomCrtr(){  //Caractere special

  let indexCaractere = Math.floor(Math.random() * caracteresSpeciaux.length);

  return caracteresSpeciaux[indexCaractere];
    
  }

  function randomLettre(){  //lettre de l'alphabet

    let min_maj = Math.floor(Math.random() * 2);

    let indexLettre = Math.floor(Math.random() * alphabet.length);
   
    if(min_maj == 1){
      return alphabet[indexLettre].toLowerCase();
    }else{

      return alphabet[indexLettre];
    }
      
    }
  

 
function motdePasse(nbr){

  let caractere;
  console.log(nbr);
  
  for(let i = 0; i< nbr; i++){
  let nbr_choise = Math.floor(Math.random() * 4);// permet de selectionner une fonction

    switch(nbr_choise){

      case 0:
      caractere = randomNbr();
      motdePasse_array.push(caractere);
      break;
      case 1:
        caractere = randomLettre();
        motdePasse_array.push(caractere);
        break;
        case 2:
            caractere = randomCrtr();
            motdePasse_array.push(caractere);
            break;
          case 3:
            caractere = randomLettre();
            motdePasse_array.push(caractere);
            break;
            case 4:
              caractere = randomNbr();
              motdePasse_array.push(caractere);
              break;
    }

  }


   
}


//Lors du clique sur boutton

btnCreerPassword.addEventListener('click', ()=>{



if(!checkbox_15.checked && !checkbox_23.checked && !checkbox_36.checked) motdePasse(15);

if(checkbox_15.checked){
  motdePasse(15)

}else if(checkbox_23.checked){
  motdePasse(23)
}else if(checkbox_36.checked){

  motdePasse(36)
}

console.log(motdePasse_array);

const chaineConcatenee = motdePasse_array.join("");

let block_rep = document.createElement('p');
block_rep.classList.add('text-center','d-flex','flex-wrap');

block_rep.innerHTML = `${chaineConcatenee}`;

block_question.append(block_rep);

})