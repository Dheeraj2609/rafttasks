/*if (typeof(Storage) !== "undefined") {
    localStorage.setItem("Type", "Received Storage");
    if (document.querySelector(".local__button").clicked == true) {
        document.querySelector(".local__text").innerHTML = localStorage.getItem("Type");
    }
} */ //Above is not worked

if (typeof Storage !== "undefined") {
  localStorage.setItem("Type", "Received Storage");
  document.querySelector(".local__button").onclick = function() {
    document.querySelector(".result").innerHTML = localStorage.getItem("Type");
  };
}
else {
    document.querySelector(".result").innerHTML = "Browser does not support";
  }
