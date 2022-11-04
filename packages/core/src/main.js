// VAR to get the <include> tag
const INC_LIST = document.querySelectorAll("include");

// VAR to get the logger to work
const INC_BODY = document.querySelector("body");
const INC_LOGGER = INC_BODY.getAttribute("includer-log");

// VAR for the console.log time
const LOG_TIME = `[${new Date().toLocaleTimeString()}]`;

// VAR for the .html endPrefix
const END_PREFIX = ".html";

// VAR for the messages
const MESSAGE = {
  LOADED: "✅ Document loaded with success",
  ERROR: {
    SRC: " The <include> tag is required to have the 'src' attribute.",
    END_WITH: " The <include> tag is required to have the 'id' attribute.",
  },
};

// Set time for how long it takes to fetch
const time = Date.now();

// SECTION for logging
if (INC_LOGGER === "true") {
  console.log(
    LOG_TIME +
      ` 🔎 Found ${INC_LIST.length} include tags in ${Date.now() - time}ms`
  );
}

// Loading THE DOCUMENT
window.addEventListener("load", () => {
  console.log(
    LOG_TIME + `%c ${MESSAGE.LOADED}`,
    "background: #222; color: #b00fe6"
  );
});

// All the include tags forEach
INC_LIST.forEach((I) => {
  // Set the attribute "includer-RANDOM_STRING"
  const ID = "includer-" + Math.floor(Math.random() * 100000000000);

  I.setAttribute("id", ID);

  let ATTR = I.getAttribute("src");
  const ATTR_ID = I.getAttribute("id");

  // Get the HTML file
  function getFile() {
    // Validate ATTR
    if (!ATTR) {
      return console.error(LOG_TIME + MESSAGE.ERROR.SRC);
    } else if (!ATTR_ID) {
      return console.error(LOG_TIME + MESSAGE.ERROR.END_WITH);
    } else if (!ATTR.includes(END_PREFIX)) {
      return console.error(
        LOG_TIME + ` The source to ${ATTR}, must end with ${END_PREFIX}`
      );
    }

    // Get the HTML file
    let xhr = new XMLHttpRequest();

    // OPEN HTML file with an XMLHttpRequest request
    xhr.open("GET", `${ATTR}`);

    xhr.onload = function () {
      // If the request was successful, we will innerHTML the include tag

      const element = document.getElementById(ATTR_ID);

      if (this.status == 200) {
        // Set the HTML
        element.innerHTML = this.responseText;
        element.setAttribute("loaded", Date.now() - time + "ms");
      } else if (this.status === 404) {
        element.innerHTML = `<h1 style="color: red">Response came with 404 code.</h1>`;
      }

      // Enable Logger
      if (INC_LOGGER === "true") {
        console.log(LOG_TIME + ` 🚀 fetched ${ATTR} in ${Date.now() - time}ms`);
      }
    };

    // SEND the request
    xhr.send();
  }

  // CALL the function
  getFile();
});
