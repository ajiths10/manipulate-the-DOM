// let ele=document.querySelector('#my-form')
// console.log(ele.parentNode)
// ele.parentNode.style.backgroundColor='gray'
// console.log(ele.parentNode.parentNode)

//paraentelement
// let ele=document.querySelector('#my-form')
// console.log(ele.parentElement)
// ele.parentElement.style.backgroundColor='gray'
// console.log(ele.parentElement.parentElement)

//childnode
 //let ele=document.querySelector('#container')
// console.log(ele.childNodes)
 //let el=document.querySelector('#my-form')
// console.log(el.childNodes)
// let ms=document.querySelector('#itemss')
// console.log(ms.children)
// ms.children[2].style.backgroundColor='yellow';

//firstChild
// console.log(ms.firstChild)

//FirstElement
// console.log(ms.firstElementChild)
// ms.firstElementChild.textContent='your hacked';

//lastElement
// ms.lastElementChild.textContent='your hacked too';

//sibling
// console.log(ms.nextSibling)

//nextelementsibling
// console.log(ms.nextElementSibling)

//previoussibling
// console.log(ms.previousSibling)

//previouselementsibiling
// console.log(ms.previousElementSibling)
// ms.previousElementSibling.previousElementSibling.style.backgroundColor='green';


//create element
//create Div

let newD=document.createElement('div')
newD.className='new-Div';
newD.id='123';
//addattribute
newD.setAttribute('title','helloTitle')
console.log(newD);
//create text node
let newDText=document.createTextNode('Hello world')
//add to div
newD.appendChild(newDText);
console.log(newD)
//add element to the page
let CC=document.querySelector('header, container')
let h1=document.querySelector('header h1');
console.log(newD);
CC.insertBefore(newD,h1);
