const INC_LIST = document.querySelectorAll("include");

const END_PREFIX = ".html";

INC_LIST.forEach((I) => {
  // Set the attribute
  I.setAttribute("id", Math.floor(Math.random() * 100000000000));

  let ATTR = I.getAttribute("path");
  const ATTR_ID = I.getAttribute("id");

  function getFile() {
    // Validate ATTR
    if (!ATTR) {
      return console.error(
        "The <include> tag is required to have an 'path' attribute."
      );
    } else if (!ATTR_ID) {
      return console.error(
        "The <include> tag is must have the 'id' attribute."
      );
    } else if (!ATTR.includes(END_PREFIX)) {
      return console.error(`The path to ${ATTR}, must end with ${END_PREFIX}`);
    }

    // Get the HTML file
    let xhr = new XMLHttpRequest();

    xhr.open("GET", `${ATTR}`);

    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(ATTR_ID).innerHTML = this.responseText;
      }
    };

    xhr.send();
  }

  getFile();
});
