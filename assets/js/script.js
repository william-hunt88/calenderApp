document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YYYY");


var auditTime = function(timeEl) {
    var eventTime = moment(timeEl);

    var currentTime = moment().format("h:mm a");

    if (moment().isAfter(eventTime)) {
        console.log("its after 9 baby")

    };
};

// audit task due dates every 30 minutes
setInterval(function() {
    $(".timeDiv .timeDisplay").each(function() {
      auditTime($(this));
    });
  }, 10000);
  


