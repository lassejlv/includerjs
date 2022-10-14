const INC_LIST = document.querySelectorAll("#inc");

const END_PREFIX = ".html";

INC_LIST.forEach((I) => {
  let ATTR = I.getAttribute("file");

  function getFile() {
    if (!ATTR.includes(END_PREFIX)) {
      throw new Error(`The path to ${ATTR}, must end with ${END_PREFIX}`);
    }

    // Get the HTML file
    let xhr = new XMLHttpRequest();

    xhr.open("GET", `${window.location.href}${ATTR}`);

    xhr.onload = function () {
      if (this.status == 200) {
        console.log(this.responseText);
      }
    };

    xhr.send();
  }

  getFile();
});
