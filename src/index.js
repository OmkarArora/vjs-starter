import Logo from "./logo.svg";
import "./index.css";

let root;

function init() {
  root = document.getElementById("root");
  root.innerHTML = `<img src="${Logo}" alt="Logo" class="logo"/><h1>vjs-starter</h1> 
      <button id="about">Load App.js</button>
      <div id="route"></div>
      `;
}

init();

const button = document.querySelector("#about");
button.addEventListener("click", loadAbout);

function loadAbout() {
  import("./App").then(({ default: App }) => {
    const about = App({ name: "User" });
    document.querySelector("#route").innerHTML = about;
  });
}