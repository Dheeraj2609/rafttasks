if (typeof Storage !== "undefined") {
  //Checking browser support
  var get_plateform = localStorage.getItem("radio"); //Setting values to variables from thee local storage
  var get_date = localStorage.getItem("date");
  var get_time = localStorage.getItem("time");
  var user_date = new Date(get_date);
  var today_date = new Date(); //Setting today's date to the variable
  var times = get_time.split(":"); //Splitting time with :
  var user_full_date = new Date( // setting variable with the date format local storage data
    user_date.getFullYear(),
    user_date.getMonth(),
    user_date.getDate(),
    times[0],
    times[1]
  );
  var ms = user_full_date - today_date; //Getting difference between current and given date and set it to variable

  window.addEventListener("load", onLoad); //onload event
  document
    .querySelector(".taskCntr__drop")
    .addEventListener("change", onChange); //onchange event
  document.querySelector(".detlInfo__head").innerHTML =
    localStorage.getItem("task"); //Setting task head and description
  document.querySelector(".detlInfo__info").innerHTML =
    localStorage.getItem("description"); //from local storage

  days = Math.floor(ms / (24 * 60 * 60 * 1000)); //calculating diffenrce in days hours and minutes
  daysms = ms % (24 * 60 * 60 * 1000);
  hours = Math.floor(daysms / (60 * 60 * 1000));
  hoursms = ms % (60 * 60 * 1000);
  minutes = Math.floor(hoursms / (60 * 1000));
  if (days > 0 || hours > 0 || minutes > 0) {
    // checking and Displaying the differnce in dates
    document.querySelector(".taskTime__text").innerHTML =
      days + " days " + hours + " hrs " + minutes + " mins to go";
  } else if (days <= 0 || hours <= 0 || minutes <= 0) {
    //checking whether date is less than current date
    document.querySelector(".taskTime__text").innerHTML = "OVERDUE!!!"; //If true displaying OVERDUE!!!
  }

  function onLoad() {
    // onload function
    document.querySelector(".taskCntr__drop").value = get_plateform;
    if (get_plateform != document.querySelector(".taskCntr__drop").value) {
      document.querySelector(".detailCntr__info").style.display = "none";
    } else document.querySelector(".detailCntr__info").style.display = "block";
  }
  function onChange() {
    //onchange function
    if (get_plateform != document.querySelector(".taskCntr__drop").value) {
      document.querySelector(".detailCntr__info").style.display = "none";
    } else document.querySelector(".detailCntr__info").style.display = "block";
  }
} else {
  alert("Browser does not support"); //alert if the browser doesnot support
}

if (
  document.querySelector(".detlInfo__head").innerHTML == "" || //checking whether all the field is filled
  document.querySelector(".detlInfo__info").innerHTML == "" ||
  document.querySelector(".taskTime__text").innerHTML == ""
) {
  document.querySelector(".taskCntr").style.display = "none"; //if it is not filled task will never displayed
} else {
  document.querySelector(".taskCntr").style.display = "block"; //if it is filled task will displayed
}
