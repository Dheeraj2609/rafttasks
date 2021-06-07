if (typeof Storage !== "undefined") { //Checking browser support
  var get_info = JSON.parse(localStorage.getItem("userval"));
 
    if(localStorage.getItem("temp") == undefined){
        var Thelist = [];
        localStorage.setItem("temp", JSON.stringify(Thelist));
      }
      var Thelist_parse = localStorage.getItem("temp");
      var Thelist = JSON.parse(Thelist_parse);
      Thelist.push(get_info);
      localStorage.setItem("temp",JSON.stringify(Thelist));
      console.log(Thelist);
  console.log(get_info);
  var user_date = new Date(get_info[2]);
  var today_date = new Date(); //Setting today's date to the variable
  var times = get_info[3].split(":"); //Splitting time with :
  var user_full_date = new Date( // setting variable with the date format local storage data
    user_date.getFullYear(),
    user_date.getMonth(),
    user_date.getDate(),
    times[0],
    times[1]
  );
  var ms = user_full_date - today_date; //Getting difference between current and given date and set it to variable


  /*
  var i;
  var listinfo = [0];
  for(i in listinfo){
    for(i in get_info){
      listinfo.push(get_info[i]);
    }
    
  }
  console.log(listinfo);*/


  window.addEventListener("load", onLoad); //onload event
  document.querySelector(".taskCntr__drop").addEventListener("change", onChange); //onchange event
  document.querySelector(".detlInfo__head").innerHTML = get_info[0]; //Setting task head and description
  document.querySelector(".detlInfo__info").innerHTML = get_info[1]; //from local storage

  days = Math.floor(ms / (24 * 60 * 60 * 1000)); //calculating diffenrce in days hours and minutes
  daysms = ms % (24 * 60 * 60 * 1000);
  hours = Math.floor(daysms / (60 * 60 * 1000));
  hoursms = ms % (60 * 60 * 1000);
  minutes = Math.floor(hoursms / (60 * 1000));
  if (days > 0 || hours > 0 || minutes > 0) {
    // checking and Displaying the differnce in dates
    document.querySelector(".taskTime__text").innerHTML = days + " days " + hours + " hrs " + minutes + " mins to go";
  } else if (days <= 0 || hours <= 0 || minutes <= 0) {
    //checking whether date is less than current date
    document.querySelector(".taskTime__text").innerHTML = "OVERDUE!!!"; //If true displaying OVERDUE!!!
  }

  function onLoad() {
    // onload function
    document.querySelector(".taskCntr__drop").value = get_info[4];
    if (get_info[4] != document.querySelector(".taskCntr__drop").value) {
      document.querySelector(".detailCntr__info").style.display = "none";
    } else document.querySelector(".detailCntr__info").style.display = "block";
  }
  function onChange() {
    //onchange function
    if (get_info[4] != document.querySelector(".taskCntr__drop").value) {
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
