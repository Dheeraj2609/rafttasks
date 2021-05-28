if (typeof Storage !== "undefined") {     // checking browser support
  document.querySelector(".saveBtn").addEventListener("click", setFunction); //saving data by clicking save button
 
  function setFunction() {
    var tasks = document.querySelector(".taskInfo__input").value; //Setting values to variables from all input fields
    var descriptions = document.querySelector(".taskInfo__des").value;
    var dates = document.querySelector(".taskDate").value;      
    var times = document.querySelector(".taskTime").value;
    var set_plateform = document.querySelector('input[name="task"]:checked').value;
    localStorage.setItem("task", tasks);        //Storing values in the browser local storage
    localStorage.setItem("description", descriptions);
    localStorage.setItem("date", dates);
    localStorage.setItem("time", times);
    localStorage.setItem("radio", set_plateform);
  }
} else {
  alert("Browser does not support");  // display when browser doesnot support local storage
}
