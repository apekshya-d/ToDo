function buildHeader() {
  const header = document.querySelector("#header");
  const title = document.createElement("h1");
  title.setAttribute("id", "title");
  title.textContent = "ToDo";

  const hamburger = document.createElement("button");
  hamburger.setAttribute("id", "hamburger");

  header.append(hamburger, title);
}
export { buildHeader };
