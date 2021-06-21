if (typeof Storage !== "undefined") { //Checking browser support
  var get_info = JSON.parse(localStorage.getItem("userval"));
  var selPurpose = document.querySelector(".taskCntr__drop").value;
  var items = 0;
  for (i=0;i<get_info.length;i++){
    var time_string = finddate(get_info[i].taskdate,get_info[i].tasktime);
    if(time_string != "OVERDUE!!!"){
      items++;
    }
  }
  document.querySelector(".taskLeft").innerHTML = items + " items left";
  window.addEventListener("load", onLoad); //onload event
  document.querySelector(".taskCntr__drop").addEventListener("change", onChange); //onchange event
  var btns = document.getElementsByClassName("status__nav__link");
  if(get_info == "") {
    document.querySelector(".taskCntr").style.display = "none"; //if task is not filled task will never displayed
  }
  function onLoad(){
    statusTask("All");
  }
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", onClick);  
  }
  /*var buttons = document.querySelectorAll('.status__nav__link')
  buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    alert(event.target.innerHTML);
  });
  });*/
  function onClick(event){
    statusTask(event.target.innerHTML);
    event.preventDefault();
  }
  function onChange () {
    statusTask(localStorage.getItem("type"));
  }
  function statusTask(status){
    switch(status){
      case  "All":  
        localStorage.setItem("type","All");
        selPurpose = document.querySelector(".taskCntr__drop").value;
        var temp = get_info.filter(onchanging);
        function onchanging(check) {
          return check.taskpurpose == selPurpose;
        }
        console.log(temp);
        document.querySelector(".detailCntr__info").innerHTML = "";
        for (i=0;i<temp.length;i++){
          var time_string = finddate(temp[i].taskdate,temp[i].tasktime);
          console.log(time_string);
          container_values(temp[i].taskName,temp[i].taskdesc,time_string);
        }
      break;
      case "Active":
        localStorage.setItem("type","Active");
        selPurpose = document.querySelector(".taskCntr__drop").value;
        var temp = get_info.filter(onchanging);
        function onchanging(check) {
          return check.taskpurpose == selPurpose;
        }
        console.log(temp);
        document.querySelector(".detailCntr__info").innerHTML = "";
        for (i=0;i<temp.length;i++){
          var time_string = finddate(temp[i].taskdate,temp[i].tasktime);
          if(time_string != "OVERDUE!!!"){
            container_values(temp[i].taskName,temp[i].taskdesc,time_string);
          }
        }
      break;
      case "Completed":
        localStorage.setItem("type","Completed");
        selPurpose = document.querySelector(".taskCntr__drop").value;
        var temp = get_info.filter(onchanging);
        function onchanging(check) {
          return check.taskpurpose == selPurpose;
        }
        console.log(temp);
        document.querySelector(".detailCntr__info").innerHTML = "";
        for (i=0;i<temp.length;i++){
          var time_string = finddate(temp[i].taskdate,temp[i].tasktime);
          if(time_string == "OVERDUE!!!"){
            container_values(temp[i].taskName,temp[i].taskdesc,time_string);
          }
        }
      break;
      case "Clear Completed":
        var temp = JSON.parse(localStorage.getItem("userval"));
        selPurpose = document.querySelector(".taskCntr__drop").value;
        console.log(temp);
        for (i=0;i<temp.length;i++){
          var time_string = finddate(temp[i].taskdate,temp[i].tasktime);
          if(time_string == "OVERDUE!!!"){
           temp.splice(i,1);
           i--;
          }
        }
        localStorage.setItem("userval", JSON.stringify(temp));
        location.reload();
      break;
    }
  }
  function finddate(taskdate,tasktime){  //to find the remaining date to do task
    var user_date = new Date(taskdate);
    var today_date = new Date();  //Setting today's date to the variable
    var times = tasktime.split(":");  //Splitting time with :
    var user_full_date = new Date(  // setting variable with the date format local storage data
      user_date.getFullYear(),
      user_date.getMonth(),
      user_date.getDate(),
      times[0],
      times[1]
    );
    var time_string;
    var ms = user_full_date - today_date; //Getting difference between current and given date and set it to variable
    days = Math.floor(ms / (24 * 60 * 60 * 1000)); //calculating diffenrce in days hours and minutes
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor(daysms / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor(hoursms / (60 * 1000));
    if (days > 0 || hours > 0 || minutes > 0)
    time_string = days + " days " + hours + " hrs " + minutes + " mins to go";
    else if (days <= 0 || hours <= 0 || minutes <= 0)
    time_string = "OVERDUE!!!";
    return time_string;
  }
  function container_values(task,description,time_string){  //setting the task in the loop
    var x = `<div class="infoDetail">
    <div class="infoStatus">
    <span class="infoStatus__marker"> T </span>
    <img src="../../assets/images/group.png" alt="status" />
    </div>
    <div class="taskInfo">
    <div class="detlInfo">
      <span class="detlInfo__head">  ${task} </span>
      <p class="detlInfo__info">  ${description} </p>
    </div>
    <div class="taskTime">
      <span class="taskTime__text"> ${time_string} </span>
    </div> </div> </div>`
    var y = document.querySelector(".detailCntr__info").innerHTML;
    document.querySelector(".detailCntr__info").innerHTML = x+y;
  }
} 
else {
  alert("Browser does not support"); //alert if the browser doesnot support
}