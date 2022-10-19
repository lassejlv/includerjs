/* 
    includerjs v0.0.7 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license 
*/
const INC_LIST=document.querySelectorAll("include"),END_PREFIX=".html";INC_LIST.forEach(e=>{e.setAttribute("id",Math.floor(Math.random()*1e11));let t=e.getAttribute("path");const r=e.getAttribute("id");function o(){if(t)if(r){if(!t.includes(END_PREFIX))return console.error(`The path to ${t}, must end with ${END_PREFIX}`)}else return console.error("The <include> tag is must have the 'id' attribute.");else return console.error("The <include> tag is required to have an 'path' attribute.");let n=new XMLHttpRequest;n.open("GET",`${t}`),n.onload=function(){this.status==200&&(document.getElementById(r).innerHTML=this.responseText)},n.send()}o()});
