const INC_LIST = document.querySelectorAll("include");

const END_PREFIX = ".html";

INC_LIST.forEach((I) => {
  let ATTR = I.getAttribute("path");
  let ATTR_ID = I.getAttribute("id");

  function getFile() {
    // Validate ATTR
    if (!ATTR) {
      throw new Error(
        "You must use the 'path' attribute to use the 'include' tag"
      );
    }

    if (!ATTR.includes(END_PREFIX)) {
      throw new Error(`The path to ${ATTR}, must end with ${END_PREFIX}`);
    }

    // Get the HTML file
    let xhr = new XMLHttpRequest();

    xhr.open("GET", `${window.location.href}${ATTR}`);

    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById(ATTR_ID).innerHTML = this.responseText;
      }
    };

    xhr.send();
  }

  getFile();
});
