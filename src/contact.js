export default clickContact;
import domElements from "./dom"
import { createInforRow } from "./dom";
import contentHead  from "./index";
function clickContact(){
    const contentDiv=domElements().contentDiv;
    contentDiv.setAttribute("class","contact-option"); 
       window.document.body.appendChild(contentHead);
     requestAnimationFrame(() => {               // 👈 Wait for DOM to settle
  contentHead.classList.remove("logo-home");
  contentHead.classList.add("logo-top-right");   // 👈 Then trigger animation
});
 
    const contactDetails=document.createElement("div");
    const bookTable= document.createElement("button");
    bookTable.textContent="Book a Table";

    fillContact(contentDiv,contactDetails);
    contentDiv.appendChild(contactDetails);
    contentDiv.appendChild(bookTable);
}

function fillContact(contentDiv,contactDetails){
    contentDiv.appendChild(createInforRow(`We’d love to hear from you.
    Whether you're planning a quiet dinner, a family gathering, or have questions about our menu — reach out. We’re here to bring you the warmth of Ladakhi hospitality.`,"",""));
    contactDetails.appendChild(createInforRow("📍","Address","Changspa Road, Leh, Ladakh – 194101, India"));
    contactDetails.appendChild(createInforRow("📞","Phone","+91 62641899549"));
    contactDetails.appendChild(createInforRow("📧","Email","hello@aldakhi.in"));
}
