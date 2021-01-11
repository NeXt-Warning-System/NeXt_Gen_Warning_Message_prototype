// const helpers = require('../../../helpers')

module.exports = function (router, myPath) {


  router.get('/' + myPath + '/name', function (req, res) {
    res.render(myPath + '/where-are-you-exporting-to',{
    })
  })
  
  router.post('/' + myPath + '/where-are-you-exporting-to', function (req, res) {

    // Save values

    if(req.query.returnUrl) {
      return res.redirect('check-answers');
    } else {
        req.session.errors = null;
        return res.redirect('complete');
      } 

  })



}
