'use script';

// let 
// const user = {
//     name: 'Toto'
// }

// //user = {
// //   name: 'Tata'
// //}
// // user.name = 'Tata'
// //const EARTH_MASS

// let myString = "Hello World";
// let myNumber = 1.5;
// let myBoolean = true; //false
// let myNull = null;
// let myUndefined = undefined

// const myObject = {
//     name:'Toto',
//     car: {
//         color: 'red'
//     }
// }

// let MyArray = [1,2,3];
// let MyNesteArray = [1,2,3,[3],4,'Hello'];

// // if 20/2 >= 10;
// // 'yes'
// // else 'false'

// isPrivate = false 
// isPrivate = false

// if (isPrivate = false || (isPrivate = true && isMember = true)){ ; // if (!isPrivate || (isPrivate && isMember))
// 'ok'}

// const username =prompt ('What is your name?')
// console.log('username',username);
// alert('your value here');

// const today = new Date();
// const todayDay = today.getDate

// const clientId = 1;

// //(condition) ? ... = ...
// (typeof clientId === 'number') ? console.log('Saved') : console.log('Cancel')


// // fonction en java

// function myFunc() {
//     console.log('Hello World');
//     // return undifined
// }

// function returnFunc(text= ' ') {
//     HTMLFormControlsCollection.log('text',text)
//     return text.toUpperCase();
// }

// console.log(returnFunc('Hello World'))

// const sum = (param1, param2) => {
//     console.log('param1', param1);
//     console.log('param2',param2);
//     return param1 + param2;
// }

// console.log('sum', sum(2,4))

// const sum = (p1,p2) => p1, p2;
// console.log('sum', sum(2,4));


// const truncate = (str, length, trail= '...') => {
//  str.substring(0,length)
// }

// const res1 = truncate('I will be truncated',15,'->')
// console.log ('res1' , res1)
// const res2 = truncate('I will be truncated',5)
// console.log ('res2',res2)


// //tableau 

// const myArr = [1,'Hello', true];
// console.log(myArr[0]);
// console.log(myArr[myArr.lenght -1]);

// const myArr1 = myArr;
// myArr1[0] = 'World';

// console.log('myArr',myArr);
// console.log('myArr1',myArr1);

// myArr2 = [...myArr];
// myArr2[0] = 'test';

// const myArr3 = [1,2,3,4,5,6,7]
// myArr3.shift
// myArr3.unshift



// // Trouvez toutes les balises div du document. Loggez le deuxième élément s'il est présent.
// const myDivs = document.getElementsByTagName('div');
// console.log('myDivs',myDivs);
// const myDivs2 = document.querySelectorAll('div');
// console.log('myDivs2 > first', myDivs2[0]);

// // Trouvez toutes les balises p avec la classe 'my-paragraph' du document. Loggez le premier élément s'il est présent.
// const myParagrahs = document.getElementByClassName ('my-paragraph');
// const myParagraphs2 = document.querySelectorAll('.myParagraph');
// console.log('myParagrpah2',myparagrpahs2);

// // Trouvez la balise span avec l'id 'js-unique-el'. Loggez-là. Inspéctez les propriétés de cet objet Element
// const myUniqueEl = document.getElementById('js-unique-el');
// const myUniqueEl = document.querySelector('#js-unique-el');

// // Trouvez toutes les balises p qui se trouvent dans un div.
// const myParagrahsInDivs = document.querySelectorAll('div p');
// console.log('myParagraphsInDivs', myParagrahsInDivs);

// // Trouvez toutes les balises span qui sont précédées par un div.
// const spansPreceededByDivs = document.querySelectorAll('div~span');
// console.log('spansPreceededByDivs',spansPreceededByDivs);



// // Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
// const firstP = document.querySelector('p');
// firstP.innertext = 'I am the first paragraph';
// console.log('firstP > text', firstP.innertext);

// // Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
// const secondP = document.querySelectorAll('.second-p');
// secondP[0].innerHTML = '<span>Hello</span>';
// console.log('secondP > html', secondP[0].innerHTML);

// // Modifiez les attributs width à 50% et height à 'auto' de l'image.
// const myImg =document/querySelector('Img');
// myImg.setAttribute('width', '50%');

// // Ajoutez un attribut alt non vide à l'image.
// myImg;setAttribute('alt', 'Random image');

// // Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.
// firstP.style.color = 'blue';
// firstP.style.fontsize = '1.5rem';

// // Ajoutez la classe img à l'image.
// myImg.className = 'my-img'; //myImg.ClassName += 'another-class'
// myImg.classlist.add('my-img');
// //myImg.classlist.remove('my-img')

// // Supprimez le paragraphe qui se trouve dans un div. Supprimez le span.
// const parent = document.querySelector('div');
// const nodeToDelete = document.querySelector('div p');
// parent.removeChild(nodeToDelete);

// // Créer un element
// const myBody = document.querySelector('body');
// const newDiv = document.createElement('div');
// newDiv.innerText = 'Hello!';
// myBody.appendChild(newDiv); // append dernier, prepend premier


// EXO Window

// const paragraphe = document.getElementById('paragraphe');
// const ajout = document. createElement('p')
// ajout.innerText = 'Nom de navigateur: '+ window.navigator.userAgent;
// paragraphe.prepend(ajout) ;

// const paragraphe2 = document.getElementById('paragraphe2');
// const ajout2 = document. createElement('p');
// const ajout3 = document. createElement('p');
// const ajout4 = document. createElement('p');
// const ajout5 = document. createElement('p');
// ajout2.innerText = 'Largeur fenetre: ' + window.innerWidth;
// ajout3.innerText = 'Hauteur fenetre: ' + window.innerHeight;
// ajout4.innerText = 'Largeur navigateur: ' + window.outerWidth;
// ajout5.innerText = 'Hauteur navigateur: ' + window.outerHeight;
// paragraphe2.append(ajout2);
// paragraphe2.append(ajout3);
// paragraphe2.append(ajout4);
// paragraphe2.append(ajout5);

// Créez un bouton dans votre HTML. Ajoutez-lui un écouteur d'événements côté JavaScript. Si le bouton est cliqué, loggez 'Clicked!'. Loggez également l'événement passé et explorez ces propriétés.
// const btn = document.querySelector('#js-btn');
// btn.addEventListener('click', (event) => {
//     console.log('Cliked', event );
// });

// window.addEventListener('contextmenu', (event) =>{
//     event.preventDefault();
// });

// const grayBtn = document.querySelector('#js-gray-btn');
// grayBtn.addEventListener('click', () => {
//     isClikedTwice = !isClikedTwice;
//     if (isClikedTwice) {
//         grayBtn.style.backgroundColor = 'green';
//     } else {
//         grayBtn.style.backgroundColor = 'gray';
//     }
// });


// const hoveredBtn = document.querySelector('#hovered-btn');
// hoveredBtn.addEventListener('mouseenter', () => {
//     hoveredBtn.style.backgroudColor = 'red';
// })
// hoveredBtn.addEventListener('mouseleave', () => {
//     hoveredBtn.style.backgroudColor = 'inherit'; // revient a la couleur initiale
// })

// // créez un cookie lang égal a 'fr'
// document.cookie = 'lang=fr';

// // Créez un cookie previewSeen égal a true qui va expirer le lendemain
// document.cookie = `lang=fr;expires=${new Date('2019-02-12')}`;

// // Créez un cookie test égal a 'test' qui va expirer le 31 décembre 
// docCookies.setItem('test', 'test', new Date('2019-12-31'));

// // Créez un cookie userId égal à 123
// docCookies.setItem('userId', 123, new Date('2019-12-31'));
// console.log(typeof docCookies.getItem('userId'));

// // Modifiez la valeur du cookie userId à 321.
// docCookies.setItem('userId', 321);

// // Récupérez et loggez les valeurs des cookies lang, previewSeen et userId
// console.log(docCookies.getItem('lang'));
// console.log(docCookies.getItem('previewSeen'));
// console.log(docCookies.getItem('userId'));

// // store an object
// docCookies.setItem('testObject', JSON.stringify({id: 1}));

// //get an object
// const myObj = docCookies.getItem('testObject');
// console.log('myObj, myObj');
// console.log('myObj parsed', JSON.parse(myObj));

// // Supprimez le cookie test.
// docCookies.removeItem('test');
// docCookies.setItem('test', '', new Date('2000-01-01'));

// // Vérifiez si l'objet LocalStorage est supporté par le navigateur.
// if (localStorage) {
//     // Créez une entrée greeting égale à 'Hello World'. 
//     localStorage.setItem('greeting', 'Hello World');
// // Créez une entrée adIds égale à l'objet {top: 1, bottom: 2}. 
//     localStorage.setItem('adIds', JSON?stringify({top: 1, bottom: 2}));
// // Récupérez greeting.
//     console.log(localStorage.getItem('greeting'));
// // Modifiez cette entrée à 'Welcome'. 
//     localStorage.setItem('greeting', 'Welcome');
// // Supprimez greeting du LocalStorage.
//     localStorage.removeItem('greeting');
// // tout suprimez
//     localStrorage.clear();
// }

// geolocalisation
// if (navigator.geolocation) {
//     const succesCallback = (position) => {
//         console.log('position', position);
//         const link = document.createElement('a');
//         link.href = `https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`;
//         link.innerText = 'Click here'
//         document.querySelector('body').appendChild(link);
//     }
//     const errorCallback = (error) => {
//         console.log('error', error);
//     }
//     navigator.geolocation.getCurrentPosition(succesCallback, errorCallback);
// }

// const dropTo = document.querySelector('#js-drop-to');
// const myDraggable = dpcument.querySelector('#js-draggable');

// myDraggable.addEventListener('dragstart', event => {
//     console.log('e', event);
//     event.dataTransfert.setDate('text', event.target.id);
// })

// dropTo.addEventListener('dragover', event => {
//     event.preventDefault();
// })

// dropTo.addEventListener('drop', event => {
//     event.preventDefault();
//     event.dataTransfert.getData('text');
//     const el = document.getElementById(data);
//     event.target.appendChild(el);
// })

// const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg'];
// const MAX_IMG_SIZE = 300 * 1024; // 30 Kb
// const dropZone = document.querySelector('#js-drop-to');
// const filesList = document.querySelector('#js-file-list');

// dropZone.addEventListener('dragover', (e) => onDragOver(e));
// dropZone.addEventListener('drop', (e) => onDrop(e));
// dropZone.addEventListener('dragenter', () => changeDropZoneState(true));
// dropZone.addEventListener('dragleave', () => changeDropZoneState(false));

// // enleve les parametres par defaut et la propagation de l'event lorsque l'on "survole" la zone de drop
// function onDragOver(event) {
//   event.stopPropagation();
//   event.preventDefault();
// }
// // upload l'image lorsqu'elle est drop
// function onDrop(e) {
//   e.stopPropagation();
//   e.preventDefault();
//   filesList.innerHTML = '';
//   const filesUploaded = Array.from(e.dataTransfer.files);
//   filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
//   changeDropZoneState(false);
// }
// // fonctionne comme un "if" pour changer l'état de la zone de drop lorqu'on la "survole" avec un fichier
// function changeDropZoneState(isDragging) {
//   isDragging ? 
//     dropZone.classList.add('js-is-dragged-over') :
//     dropZone.classList.remove('js-is-dragged-over');
// }

// function handleUploadedFile(file, index) {
//   const error = getUploadError(file);
//   error ?
//     console.warn(`"${file.name}" Upload Error: ${error}`) :
//     filesList.appendChild(createListEl(file, index));
// }
// // creation de la liste si plusieurs images droppées
// function createListEl(file, index) {
//   const el = document.createElement('li');
//   el.setAttribute('id', 'file-list-item-'+index);
//   el.className = 'list-group-item file-list-item';

//   // add image
//   const elPreview = document.createElement('img');
//   elPreview.classList.add('file-list-item-preview');
//   el.appendChild(elPreview);
//   renderImage(file, 'file-list-item-'+index);

//   // add name
//   const elName = document.createElement('p');
//   elName.classList.add('file-list-item-name');
//   elName.innerText = file.name;
//   el.appendChild(elName);

//   return el;
// }

// function renderImage(file, elId) {
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     const img = document.querySelector(`#${elId} img`);
//     img.setAttribute('src', e.target.result);
//   }
//   reader.readAsDataURL(file);
// }

// function getUploadError(file) {
//   if (file.size > MAX_IMG_SIZE) {
//     return 'Your image is too big';
//   } else if (!ACCEPTED_FORMATS.includes(file.type)) {
//     return 'Image of this format is not accepted';
//   } else {
//     return;
//   }
// }

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = '#fff';
ctx.fillStyle = '#fff';

// HEAD
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// BODY
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// HAT
ctx.strokeStyle = '#000';
ctx.fillStyle = '#000';

ctx.fillRect(123, 130, 150, 30); // bas 
ctx.fillRect(152, 47, 90, 100); // haut

// LEFT ARM
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(132, 301);
ctx.lineTo(30, 254);
ctx.stroke();

// LEFT ARM
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(256, 305);
ctx.lineTo(330, 267);
ctx.lineTo(370, 210);
ctx.stroke();

// EYES
ctx.beginPath();
ctx.arc(177, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(220, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// NOSE
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.moveTo(200, 186);
ctx.lineTo(124, 210);
ctx.lineTo(199, 210);
ctx.quadraticCurveTo(203, 195, 199, 186)
ctx.stroke();
ctx.fill();

// SCARF
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';

ctx.fillRect(157, 230, 90, 20); // bas 
ctx.fillRect(216, 243, 20, 150); // haut