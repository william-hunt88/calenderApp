document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YYYY");

// loads tasks from local storage
for(var i = 9; i < 18; i++){
  $(`#hour-${i} .description`).val(localStorage.getItem(i));

};


// audit task due dates every minute
setInterval(function() {
    for(var i=9; i < 18; i++){
      if(moment().format("H") == i){
        $("#hour-"+ i).addClass("present");
      }else if(moment().format("H") > i){
        $("#hour-" + i).addClass("past");
      }else{
        $("#hour-" + i).addClass("future");
      };
    }
  }, 1000);

 
 
  //Click event target for submit button and saves description to local storage 
$(".saveBtn").on("click", function(){
  var key = $(this).parent().attr("data-hour");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(key, value);
})


