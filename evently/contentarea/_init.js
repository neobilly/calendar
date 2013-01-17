function(e, params) {
  var elem = $(this)
    , state = $$(this);
  
  $.pathbinder.onChange(function(path) {
    _gauges.push(['track']);
  });

  state.userCtx = null;
  $.couch.session({
    success : function(r) {
      var userCtx = r.userCtx;
      if (userCtx.name) {
        elem.trigger("loggedIn", [r]);
      } else {
        elem.trigger("loggedOut");
      };
    }
  });
  
}