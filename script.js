let checkbox1 = document.querySelector("#want_to_serve");
let checkbox2 = document.getElementById("group_checkbox_2");
let body = document.querySelector("body");
let select = document.querySelector("select");
let form = document.querySelector("form");
let header = document.querySelector("header");

let btn = document.querySelector("button");

function func(clas) {
  body.className = clas;
  header.classList.toggle("new_color");
}

form.addEventListener("submit", (event) => {});
btn.addEventListener("click", () => {
  if (checkbox1.checked) {
    func("hehehe");
    return;
  }

  if (checkbox2.checked) {
    func("Ouuuuu");
    return;
  }

  if (select.value == "5") {
    let a = confirm("А может советские?)");
    select.value = "";
    if (a) {
      window.location.href = "https://vk.com/video482407910_456239029";
    }
  }
});
