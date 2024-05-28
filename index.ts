const includeTagsList = document.querySelectorAll("include");

const LOG_TIME = `[${new Date().toLocaleTimeString()}] [INCLUDER]`;
const START = Date.now();

console.log(`${LOG_TIME} found ${includeTagsList.length} include tags in ${Date.now() - START}ms`);

includeTagsList.forEach(async (tag) => {
  const uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const id = `includer-${uuid}`;

  tag.setAttribute("id", id);

  const path = tag.getAttribute("src");
  if (!path) throw new Error("src attribute is required");
  if (!path.endsWith(".html")) throw new Error("src attribute must end with .html");

  const response = await fetch(path);
  if (!response.ok) throw new Error(`failed to fetch ${path}`);

  const text = await response.text();

  const element = document.getElementById(id);
  if (!element) throw new Error(`element with id ${id} not found`);
  element.innerHTML = text;

  console.log(`${LOG_TIME} fetched ${path} in ${Date.now() - START}ms`);
});
