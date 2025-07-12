//appenfding div#content
import phuktar from "./phuktar.JPG";
let text="ALDAKHI";
let counter=0;
const contentHead=document.createElement("h1");

export default function pageLoad(){

const contentDiv=document.querySelector("#content");
contentDiv.classList.add("page-load");
const contentDescrip=document.createElement("p");
const bgImage=document.createElement("img");
bgImage.setAttribute("src",phuktar);
let text1="ALDAKHI";
let text2="ཨལ་དཱ་ཁ།";
contentHead.textContent=text;
contentDescrip.textContent="Protein. Purpose. Peace";
contentDiv.appendChild(contentHead);
contentDiv.appendChild(contentDescrip);
contentDiv.appendChild(bgImage);
swtichText(text1,text2);
}

function swtichText(text1,text2){
setTimeout(()=>{
if(text){
    console.log(text);
   text=text===text1?text2:text1;
}
else{
    text=text1;
    console.log("hey");

}

contentHead.textContent=text;
swtichText(text1,text2);
counter++;
},3000);




return text;
}