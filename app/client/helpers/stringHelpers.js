Template.registerHelper('formatdate',function(datetime){
  if(moment && datetime){
    return moment(datetime).format('MM/DD/YYYY');
  } else{
    return datetime;
  }
});
Template.registerHelper('formatdate', function(datetime){
  if (moment && datetime) {
    return moment(datetime).format("DD MMM YYYY");
    var nextWeek = moment().add(7,'days');
  }
  else {
    return datetime;
  }
});
Template.registerHelper('formatdatetime', function(datetime){
  if (moment && datetime) {
    if(datetime.getDate() === new Date().getDate()){
      return "Today " + moment(datetime).format("hh:mm");
    } else{
      return moment(datetime).format("MM/DD/YYYY hh:mm");
    }

  }
  else {
    return datetime;
  }
});
Template.registerHelper('duedate', function(datetime){
  if (moment && datetime) {
    return moment(datetime).add(10, 'd').format("DD MMM YYYY");
    // var nextWeek = moment().add(7,'days');
  }
  else {
    return datetime;
  }
});