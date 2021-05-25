if (typeof Storage !== "undefined") {
  document.querySelector(".add__task__save").onclick = function () {
    var tasks = document.querySelector(".add__task__input").value;
    var descriptions = document.querySelector(".task__describe").value;
    var dates = document.querySelector(".task__date").value;
    var times = document.querySelector(".task__time").value;
    var radios = document.querySelector('input[name="task"]:checked').value;
    localStorage.setItem("task", tasks);
    localStorage.setItem("description", descriptions);
    localStorage.setItem("date", dates);
    localStorage.setItem("time", times);
    localStorage.setItem("radio", radios);
  };
} else {
  document.querySelector(".result").innerHTML = "Browser does not support";
}
