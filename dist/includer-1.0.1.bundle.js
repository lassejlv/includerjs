/* 
    includerjs v1.0.1 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license 
*/
const INC_LIST=document.querySelectorAll("include"),END_PREFIX=".html";INC_LIST.forEach(t=>{t.setAttribute("id","includer-"+Math.floor(Math.random()*1e11));let e=t.getAttribute("path");const r=t.getAttribute("id");function i(){if(e)if(r){if(!e.includes(END_PREFIX))return console.error(`The path to ${e}, must end with ${END_PREFIX}`)}else return console.error("The <include> tag is must have the 'id' attribute.");else return console.error("The <include> tag is required to have an 'path' attribute.");let n=new XMLHttpRequest;n.open("GET",`${e}`),n.onload=function(){this.status==200&&(document.getElementById(r).innerHTML=this.responseText)},n.send()}i()});
