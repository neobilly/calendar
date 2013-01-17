 function(doc) {
  if(doc.dtstart === "2013-01-14T11:00:13:00"||doc.dtstart === "2013-01-15T11:00:13:00"||doc.dtstart === "2013-01-16T10:30:13:00"||doc.dtstart === "2013-01-18T11:00:13:00"||doc.dtstart === "2013-01-13T09:30:13:00") {
    emit(doc.dtstart,doc);
  }
}
