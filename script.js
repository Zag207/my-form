let checkbox1 = document.querySelector("#want_to_serve");
let checkbox2 = document.getElementById("group_checkbox_2");
let body = document.querySelector("body");
let select = document.querySelector("select");
let form = document.querySelector("form");
let header = document.querySelector("header");

let func = (clas, color_class, e) => {
  body.className = clas;
  header.className = color_class;
  e.preventDefault();
  form.reset();
};

form.addEventListener("submit", (e) => {
  if (select.value == "5") {
    let a = confirm("А может советские?)");
    select.value = "";
    if (a) {
      window.location.href = "https://vk.com/video482407910_456239029";
    }
    e.preventDefault();
    form.reset();
    header.className = "";
    return;
  }
  if (checkbox1.checked) {
    func("hehehe", "base_color", e);
    return;
  }

  if (checkbox2.checked) {
    func("Ouuuuu", "new_color_white", e);
    return;
  }
});
