module.exports = function(Model) {
  var filteredAttrs = [];

  Model.once('initialize', function() {
    for(var attr in Model.attrs) {
      if(Model.attrs[attr].filtered)
        filteredAttrs.push(attr);
    }
  });

  Model.prototype.filter = function(filterList) {
    if(typeof filterList == 'string') {
      filterList = [filterList];
    }

    if(!filterList) {
      filterList = [];
    }

    filterList = filterList.concat(filteredAttrs);

    var attrs = this.toJSON();

    for(var i = 0; i < filterList.length; ++i) {
      delete attrs[filterList[i]];
    }

    return attrs;
  };
};
