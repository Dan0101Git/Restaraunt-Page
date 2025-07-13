import "./styles.css";
import pageLoad from "./page-Load.js";
import clickMenu from "./menu.js";
import clickContact from "./contact.js";
import phuktar from "./phuktar.JPG"

// logo.js
const contentHead = document.createElement("h1");
contentHead.textContent = "ALDAKHI";
contentHead.classList.add("logo", "logo-home");
export default contentHead;

const bgImage=document.createElement("img");
bgImage.setAttribute("src",phuktar);
window.document.body.appendChild(bgImage);
document.querySelector("nav").addEventListener("click",(e)=>{
    if(e.target.className==="menu")
        clickMenu();
    else if(e.target.className==="about")
        clickAbout();
    else if(e.target.className==="home")
        pageLoad();
    else if(e.target.className==="contact")
        clickContact();
})
pageLoad(1);

