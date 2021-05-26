if (typeof Storage !== "undefined") {
  var radios = localStorage.getItem("radio");
  window.onload = function () {
    document.querySelector(".drop__down").value = radios;
    if (radios != document.querySelector(".drop__down").value) {
      document.querySelector(".task__detailInfo").style.display = "none";
    } else document.querySelector(".task__detailInfo").style.display = "block";
  };

  document.querySelector(".drop__down").onchange = function () {
    if (radios != document.querySelector(".drop__down").value) {
      document.querySelector(".task__detailInfo").style.display = "none";
    } else document.querySelector(".task__detailInfo").style.display = "block";
  };

  document.querySelector(".info__heading").innerHTML = localStorage.getItem("task");
  document.querySelector(".information").innerHTML = localStorage.getItem("description");
  
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
  days = Math.floor(ms / (24 * 60 * 60 * 1000));
  daysms = ms % (24 * 60 * 60 * 1000);
  hours = Math.floor(daysms / (60 * 60 * 1000));
  hoursms = ms % (60 * 60 * 1000);
  minutes = Math.floor(hoursms / (60 * 1000));
  if (days > 0 || hours > 0 || minutes > 0) {
    document.querySelector(".time__text").innerHTML = days + " days " + hours + " hrs " + minutes + " mins to go";
  } else if (days <= 0 || hours <= 0 || minutes <= 0) {
    document.querySelector(".time__text").innerHTML = "OVERDUE!!!";
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
  document.querySelector(".info__heading").innerHTML == "" ||
  document.querySelector(".information").innerHTML == "" ||
  document.querySelector(".time__text").innerHTML == ""
) {
  document.querySelector(".task__container").style.display = "none";
} else {
  document.querySelector(".task__container").style.display = "block";
}
