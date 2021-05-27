if (typeof Storage !== "undefined") {
  var get_plateform = localStorage.getItem("radio");
  var get_date = localStorage.getItem("date");
  var get_time = localStorage.getItem("time");
  var user_date = new Date(get_date);
  var today_date = new Date();
  var times = get_time.split(":");
  var user_full_date = new Date(
    user_date.getFullYear(),
    user_date.getMonth(),
    user_date.getDate(),
    times[0],
    times[1]
  );
  var ms = user_full_date - today_date;

  window.addEventListener("load", onLoad);
  document.querySelector(".taskCntr__drop").addEventListener("change", onChange);
  document.querySelector(".detlInfo__head").innerHTML = localStorage.getItem("task");
  document.querySelector(".detlInfo__info").innerHTML = localStorage.getItem("description");

  days = Math.floor(ms / (24 * 60 * 60 * 1000));
  daysms = ms % (24 * 60 * 60 * 1000);
  hours = Math.floor(daysms / (60 * 60 * 1000));
  hoursms = ms % (60 * 60 * 1000);
  minutes = Math.floor(hoursms / (60 * 1000));
  if (days > 0 || hours > 0 || minutes > 0) {
    document.querySelector(".taskTime__text").innerHTML = days + " days " + hours + " hrs " + minutes + " mins to go";
  } else if (days <= 0 || hours <= 0 || minutes <= 0) {
    document.querySelector(".taskTime__text").innerHTML = "OVERDUE!!!";
  }

  function onLoad() {
    document.querySelector(".taskCntr__drop").value = get_plateform;
    if (get_plateform != document.querySelector(".taskCntr__drop").value) {
      document.querySelector(".detailCntr__info").style.display = "none";
    } else document.querySelector(".detailCntr__info").style.display = "block";
  }
  function onChange() {
    if (get_plateform != document.querySelector(".taskCntr__drop").value) {
      document.querySelector(".detailCntr__info").style.display = "none";
    } else document.querySelector(".detailCntr__info").style.display = "block";
  }
  /*
    var user_day = user_date.getDate();
    var user_month = (user_date.getMonth() + 1);
    var user_year = user_date.getFullYear();
    var today_day = today_date.getDate();
    var today_month = (today_date.getMonth() + 1);
    var today_year = today_date.getYear();
    */
} else {
  document.querySelector(".result").innerHTML = "Browser does not support";
}

if (
  document.querySelector(".detlInfo__head").innerHTML == "" ||
  document.querySelector(".detlInfo__info").innerHTML == "" ||
  document.querySelector(".taskTime__text").innerHTML == ""
) {
  document.querySelector(".taskCntr").style.display = "none";
} else {
  document.querySelector(".taskCntr").style.display = "block";
}
