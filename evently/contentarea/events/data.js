function (data) {
  var viewdata = {}
    , rows = data.rows;

  if(rows && rows.length > 0) {
    viewdata.rows = [];
    for (var i = 0; i < rows.length; i++) {
      viewdata.rows.push( rows[i].value );
    }
  } else {
    viewdata.error = function() { return true; };
    viewdata.usermsg = "actually the list contains no data"
  }
  return viewdata;

}