if (typeof Storage !== "undefined") { // checking browser support
  document.querySelector(".saveBtn").addEventListener("click", setFunction); //saving data by clicking save button
  function setFunction() {
    var input_info = {
      taskName: document.querySelector(".taskInfo__input").value , //Setting values to variables from all input fields
      taskdesc: document.querySelector(".taskInfo__des").value ,
      taskdate: document.querySelector(".taskDate").value ,
      tasktime: document.querySelector(".taskTime").value ,
      taskpurpose: document.querySelector('input[name="task"]:checked').value
    };
    var objectval = JSON.parse(localStorage.getItem("userval"));  //getting local storage value
    if (!objectval){
      objectval = [];    //creating array if local storage value is null
    }
    objectval.push(input_info);  //push the latest input 
    console.log(input_info);
    localStorage.setItem("userval", JSON.stringify(objectval)); //Storing values in the browser local storage
  }
} else {
  alert("Browser does not support"); // display when browser doesnot support local storage
}
