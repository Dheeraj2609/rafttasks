if (typeof Storage !== "undefined") { //Checking browser support
  var get_info = JSON.parse(localStorage.getItem("userval"));
  var selPurpose = document.querySelector(".taskCntr__drop").value;
  console.log(get_info);
  window.addEventListener("load", onLoad); //onload event
  document.querySelector(".taskCntr__drop").addEventListener("change", onChange); //onchange event
  if(!get_info) {
        document.querySelector(".taskCntr").style.display = "none"; //if task is not filled task will never displayed
      } 
  function onLoad() {
    document.querySelector(".taskCntr__drop").value = "personal";
    selPurpose = document.querySelector(".taskCntr__drop").value;
    var temp1  = get_info.filter(checkingload);
      function checkingload(loadcheck) {
      return loadcheck.taskpurpose == selPurpose;
    }
    console.log(selPurpose);
    console.log(temp1);
    for (i=0;i<temp1.length;i++){
        var user_date = new Date(temp1[i].taskdate);
        var today_date = new Date();  //Setting today's date to the variable
        var times = temp1[i].tasktime.split(":");  //Splitting time with :
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
        if (days > 0 || hours > 0 || minutes > 0) {// checking and Displaying the differnce in dates
          time_string = days + " days " + hours + " hrs " + minutes + " mins to go";
        } 
        else if (days <= 0 || hours <= 0 || minutes <= 0) { //checking whether date is less than current date
          time_string = "OVERDUE!!!"; //If true displaying OVERDUE!!!
        }
        console.log(time_string);
      
    var x = `<div class="infoDetail">
    <div class="infoStatus">
      <span class="infoStatus__marker"> T </span>
      <img src="../../assets/images/group.png" alt="status" />
    </div>
    <div class="taskInfo">
      <div class="detlInfo">
        <span class="detlInfo__head">` + temp1[i].taskName + `</span>
        <p class="detlInfo__info">` + temp1[i].taskdesc + `</p>
      </div>
      <div class="taskTime">
        <span class="taskTime__text">` + time_string + `</span>
      </div>
    </div>
  </div>`
      var y = document.querySelector(".detailCntr__info").innerHTML;
      document.querySelector(".detailCntr__info").innerHTML = x+y;
    
    }
  }
  function onChange () {
        selPurpose = document.querySelector(".taskCntr__drop").value;
        var temp = get_info.filter(onchanging);
          function onchanging(check) {
                return check.taskpurpose == selPurpose;
            }
     console.log(temp);
     document.querySelector(".detailCntr__info").innerHTML = "";
     for (i=0;i<temp.length;i++){
      var user_date = new Date(temp[i].taskdate);
      var today_date = new Date();  //Setting today's date to the variable
      var times = temp[i].tasktime.split(":");  //Splitting time with :
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
      if (days > 0 || hours > 0 || minutes > 0) {// checking and Displaying the differnce in dates
        time_string = days + " days " + hours + " hrs " + minutes + " mins to go";
      } 
      else if (days <= 0 || hours <= 0 || minutes <= 0) { //checking whether date is less than current date
        time_string = "OVERDUE!!!"; //If true displaying OVERDUE!!!
      }
      console.log(time_string);
   var x = `<div class="infoDetail">
  <div class="infoStatus">
    <span class="infoStatus__marker"> T </span>
    <img src="../../assets/images/group.png" alt="status" />
  </div>
  <div class="taskInfo">
    <div class="detlInfo">
      <span class="detlInfo__head">` + temp[i].taskName + `</span>
      <p class="detlInfo__info">` + temp[i].taskdesc + `</p>
    </div>
    <div class="taskTime">
      <span class="taskTime__text">` + time_string + `</span>
    </div>
  </div>
</div>`
    var y = document.querySelector(".detailCntr__info").innerHTML;
    document.querySelector(".detailCntr__info").innerHTML = x+y;
  
  }
  }  
} 
else {
  alert("Browser does not support"); //alert if the browser doesnot support
}

