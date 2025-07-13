
function domElements(c){
    const navBar=document.querySelector("nav");
     document.querySelector("#content").remove();
  const contentDiv=document.createElement("div");
  contentDiv.setAttribute("id","content");
window.document.body.appendChild(contentDiv);
    return {navBar,contentDiv};
}
function createInforRow(icon,descrip,label){
    const rowInfow=document.createElement("div");
    rowInfow.innerHTML=`
<span>${icon}</span>
 <span>${descrip}</span>   <div>${label}</div>
`
return rowInfow
}

export default domElements;
export {createInforRow}; 