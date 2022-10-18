/* 
    includerjs v0.0.6 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license 
*/
const INC_LIST=document.querySelectorAll("include"),END_PREFIX=".html";INC_LIST.forEach(n=>{let e=n.getAttribute("path"),r=n.getAttribute("id");function i(){if(e)if(r){if(!e.includes(END_PREFIX))return console.error(`The path to ${e}, must end with ${END_PREFIX}`)}else return console.error("The <include> tag is must have the 'id' attribute.");else return console.error("The <include> tag is required to have an 'path' attribute.");let t=new XMLHttpRequest;t.open("GET",`${e}`),t.onload=function(){this.status==200&&(document.getElementById(r).innerHTML=this.responseText)},t.send()}i()});
