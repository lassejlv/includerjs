/* 
    includerjs v0.0.1 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license 
*/
const INC_LIST=document.querySelectorAll("include"),END_PREFIX=".html";INC_LIST.forEach(n=>{let t=n.getAttribute("path"),o=n.getAttribute("id");function i(){if(!t)throw new Error("You must use the 'path' attribute to use the 'include' tag");if(!t.includes(END_PREFIX))throw new Error(`The path to ${t}, must end with ${END_PREFIX}`);let e=new XMLHttpRequest;e.open("GET",`${window.location.href}${t}`),e.onload=function(){this.status==200&&(document.getElementById(o).innerHTML=this.responseText)},e.send()}i()});
