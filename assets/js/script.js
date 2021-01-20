var timeDisplay = document.querySelector(".timeDisplay").innerHTML;
document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YYYY");
 


var auditTime = function(timeEl) {
    var eventTime = moment(timeDisplay, "h:mm a")._i;
    var currentTime = moment().format("h:mm a");

    console.log(currentTime);
    console.log(eventTime);

    if (moment(currentTime).isAfter(eventTime)) {
      console.log("its after 9 baby")

  };

}

// audit task due dates every 30 minutes
setInterval(function() {
    $(".timeDiv .timeDisplay").each(function() {
      auditTime($(this));
    });
  }, 10000);


