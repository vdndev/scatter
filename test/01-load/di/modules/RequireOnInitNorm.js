
module.exports = function() {
  this.prop = "requireConstr";
};

module.exports.prototype = {
  init: function() {
    this.dep = 'done!';
  }
};

module.exports.__scattered = {
  initialize: 'init'
};


