export default clickMenu 
import domElements from "./dom"
import  contentHead from "./index.js";
import balti from "./balti.JPG"
import thukpa from "./thukpa.JPG";
import momos from "./momos.JPG";
import chings from "./chings.jpg"
import chow from "./chow.jpg"

const imageArray=[[balti,"Khambir"],[thukpa,"Thukpa"],[momos,"Dumplings"],[chings,"Skuy"],[chow,"Thenthuk"]];
function clickMenu(){
    const contentDiv=domElements().contentDiv;
    contentDiv.setAttribute("class","menu-option");
  window.document.body.appendChild(contentHead);
        requestAnimationFrame(() => {               // 👈 Wait for DOM to settle
     contentHead.classList.remove("logo-home");
     contentHead.classList.add("logo-top-right");   // 👈 Then trigger animation
   });
    
   for(let i=0;i<5;i++)
   contentDiv.appendChild(createCard(i));
}
function createCard(i){
    const card=document.createElement("div");
    const cardImage=document.createElement("img");
    cardImage.setAttribute("src",imageArray[i][0]);
    const cardPara=document.createElement("p");
    cardPara.textContent=imageArray[i][1]
    card.classList.add("menu-card");
    card.appendChild(cardImage);
    card.appendChild(cardPara);
    return card;
}