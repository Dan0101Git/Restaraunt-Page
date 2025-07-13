//appenfding div#content
import domElements from "./dom.js";

import contentHead from "./index.js";
export default function pageLoad(c){
const contentDiv=domElements(c).contentDiv;
contentDiv.setAttribute("class","page-load");
const contentDescrip=document.createElement("p");

logo(contentHead).switchText().text;
contentDescrip.textContent="Protein. Purpose. Peace";
contentDiv.appendChild(contentHead);
contentHead.classList.remove("logo-top-right");
contentHead.classList.add("logo-home");

contentDiv.appendChild(contentDescrip);
}
function logo(contentHead){
    let text="ALDAKHI";

let text1="ALDAKHI";
let text2="ཨལ་དཱ་ཁ།";
function switchText(){
setTimeout(()=>{
if(text) text=text===text1?text2:text1;
else text=text1;

contentHead.textContent=text;
switchText();
},3000);
return {text};
}
return {switchText}
}