'use script';

// afficher et cacher le menu déroulant 
 document.querySelector("#navbarDropdownMenuLink").onclick = function() {
    if (window.getComputedStyle(document.querySelector('#navbarDropdownMenu')).display=='none'){
    document.querySelector("#navbarDropdownMenu").style.display="block"; // affichage de navardrownmenu
    } else { 
    document.querySelector("#navbarDropdownMenu").style.display="none"; // cacherd navardrownmenu
    }
    };


// année du jour 
var today = new Date(); 
var annee = today.getFullYear(); //fonctin permettant de recuperer l'annee par rapport a la date du jour 
var footer = document.getElementById('js-current-year').innerHTML = annee; // ajout de l'annee dans l'id JS-current-year grace a innerHTML


// Premier bloc

function BMI() {
    var weight = document.getElementById('js-bmi-weight').value; 
    var height = document.getElementById('js-bmi-height').value;
    var result= (weight / ((height / 100) * ( height / 100)));
    
   if(result < 18.5){
   alert("Your Body Mass Index is " + BMI + ".It is considered underweight" );
   }
   else if(result >=18.5 && result <= 25 ){
   alert("Your Body Mass Index is " + BMI + ".It is a healthy weight" );
   }
   else if(result > 25){
   alert("Your Body Mass Index is " + IMC + ".It is considered overweight" );
   }
}
   
document.getElementById('js-bmi-form').addEventListener("submit", (event) => {
    event.preventdefault()
    BMI()
});   
    

// Deuxieme bloc
const bmiFacts = [
    {
      title: 'Future weight of children can be anticipated by BMI',
      description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
      img: 'http://lorempixel.com/200/200/cats'
    },
    {
      title: 'Losing BMI weight lowers the risk of diabetes',
      description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
      img: 'http://lorempixel.com/200/200/sports'
    },
    {
      title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
      description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
      img: 'http://lorempixel.com/200/200/fashion'
    },
    {
      title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
      description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
      img: 'http://lorempixel.com/200/200/food'
    },
  ];

// bmiFacts.forEach( => {}



// troisiemebloc
//  $('js-ad-close').click(() => {
//         window.open('https://cat-bounce.com')
//     });   
       
// document.querySelector("#js-ad-close").onclick = function() {
//     if (window.getComputedStyle(document.querySelector('#njs-ad-close')).display=='none'){
//     document.querySelector("#js-ad-close").window.open('https://cat-bounce.com');
//     } else { 
//     document.querySelector("#js-ad-close").style.display="none";
//     }
//     };