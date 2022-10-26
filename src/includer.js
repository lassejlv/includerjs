// VAR to get the <include> tag
const INC_LIST = document.querySelectorAll("include");

// VAR to get the logger to work
const INC_BODY = document.querySelector("body");
const INC_LOGGER = INC_BODY.getAttribute("includer-log");

const END_PREFIX = ".html";

// Set time for how long it takes to fetch
const time = Date.now();

// All the include tags forEach
INC_LIST.forEach((I) => {
  // Set the attribute "includer-RANDOM_STRING"
  const ID = "includer-" + Math.floor(Math.random() * 100000000000);

  I.setAttribute("id", ID);

  let ATTR = I.getAttribute("path");
  const ATTR_ID = I.getAttribute("id");

  // Get the HTML file
  function getFile() {
    // Validate ATTR
    if (!ATTR) {
      return console.error(
        "⛔ [INCLUDER] The <include> tag is required to have an 'path' attribute."
      );
    } else if (!ATTR_ID) {
      return console.error(
        "⛔ [INCLUDER] The <include> tag is must have the 'id' attribute."
      );
    } else if (!ATTR.includes(END_PREFIX)) {
      return console.error(
        `⛔ [INCLUDER] The path to ${ATTR}, must end with ${END_PREFIX}`
      );
    }

    // Get the HTML file
    let xhr = new XMLHttpRequest();

    // OPEN HTML file with an XMLHttpRequest request
    xhr.open("GET", `${ATTR}`);

    xhr.onload = function () {
      // If the request was successful, we will innerHTML the include tag
      if (this.status == 200) {
        document.getElementById(ATTR_ID).innerHTML = this.responseText;
      }

      // Enable Logger
      if (INC_LOGGER === "true") {
        console.log(
          `🚀 [INCLUDER] component ${ATTR} was fetched in ${
            Date.now() - time
          }ms`
        );
      }
    };

    // SEND the request
    xhr.send();
  }

  // CALL the function
  getFile();
});
