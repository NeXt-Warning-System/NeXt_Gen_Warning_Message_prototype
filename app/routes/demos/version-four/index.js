
  // Set path
  var myPath = 'demos/version-four';
  module.exports.myPath = myPath;

  module.exports = function(router) {

  // Import routes
  require('./start')(router, myPath),
  require('./what-do-you-want-to-export')(router, myPath),
  require('./confirm-waste')(router, myPath),
  require('./select-metal-type')(router, myPath),
  require('./select-paper-type')(router, myPath),
  require('./where-are-you-exporting-to')(router, myPath)
}

