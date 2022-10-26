/* 
    includerjs v1.0.3 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license 
*/
const INC_LIST=document.querySelectorAll("include"),INC_BODY=document.querySelector("body"),INC_LOGGER=INC_BODY.getAttribute("includer-log"),END_PREFIX=".html",time=Date.now();INC_LIST.forEach(e=>{const r="includer-"+Math.floor(Math.random()*1e11);e.setAttribute("id",r);let t=e.getAttribute("path");const o=e.getAttribute("id");function i(){if(t)if(o){if(!t.includes(END_PREFIX))return console.error(`\u26D4 [INCLUDER] The path to ${t}, must end with ${END_PREFIX}`)}else return console.error("\u26D4 [INCLUDER] The <include> tag is must have the 'id' attribute.");else return console.error("\u26D4 [INCLUDER] The <include> tag is required to have an 'path' attribute.");let n=new XMLHttpRequest;n.open("GET",`${t}`),n.onload=function(){this.status==200&&(document.getElementById(o).innerHTML=this.responseText),INC_LOGGER==="true"&&console.log(`\u{1F680} [INCLUDER] component ${t} was fetched in ${Date.now()-time}ms`)},n.send()}i()});
