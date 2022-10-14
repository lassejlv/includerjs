const INC = document.getElementById("inc");

const ATTR = INC.getAttribute("file");
const END_PREFIX = ".html";

ATTR.map((a) => {
  console.log(a);
});

// Fetcher
function getFile() {
  if (!ATTR.includes(END_PREFIX)) {
    throw new Error(`The path to ${ATTR}, must end with ${END_PREFIX}`);
  }

  // Get the HTML file
  let xhr = new XMLHttpRequest();

  xhr.open("GET", `${window.location.href}${ATTR}`);

  xhr.onload = function () {
    if (this.status == 200) {
    }
  };

  xhr.send();
}

// getFile();
