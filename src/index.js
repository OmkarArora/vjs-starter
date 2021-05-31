import Logo from "./logo.svg";

let root;

function init() {
  root = document.getElementById("root");
  root.innerHTML = `<img src="${Logo}" alt="builder logo"/          ><h1>learning web tooling today!</h1> 
      <button id="about">About</button>
      <button id="contact">Contact</button>
      <div id="route"></div>
      `;
}

init();

const button = document.querySelector("#about");
button.addEventListener("click", loadAbout);

function loadAbout() {
  import("./App").then(({ default: App }) => {
    const about = App({ name: "Omkar" });
    document.querySelector("#route").innerHTML = about;
  });
}


const buttonContact = document.querySelector("#contact");
buttonContact.addEventListener("click", loadContact);

function loadContact() {
  import("./App").then(({ default: App }) => {
    const contact = App({ name: "Contact Page" });
    document.querySelector("#route").innerHTML = contact;
  });
}
