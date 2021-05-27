if (typeof Storage !== "undefined") {
  document.querySelector(".saveBtn").addEventListener("click", setFunction);
 
  function setFunction() {
    var tasks = document.querySelector(".taskInfo__input").value;
    var descriptions = document.querySelector(".taskInfo__des").value;
    var dates = document.querySelector(".taskDate").value;
    var times = document.querySelector(".taskTime").value;
    var set_plateform = document.querySelector('input[name="task"]:checked').value;
    localStorage.setItem("task", tasks);
    localStorage.setItem("description", descriptions);
    localStorage.setItem("date", dates);
    localStorage.setItem("time", times);
    localStorage.setItem("radio", set_plateform);
  }
} else {
  document.querySelector(".result").innerHTML = "Browser does not support";
}
