// const helpers = require('../../../helpers')
module.exports = function (router, myPath) {

  router.get('/' + myPath + '/select-waste-type', function (req, res) {
    res.render(myPath + '/select-waste-type',{
      'waste': req.session.waste, 
    })
  })
  
  router.post('/' + myPath + '/select-waste-type', function (req, res) {

    // Save values
    req.session.ageRange = req.body.ageRange;

    // Errors
    // req.checkBody("ageRange", "Select an option").notEmpty();
    if(req.query.returnUrl) {
      return res.redirect('check-answers');
    } else {
        return res.redirect('where-are-you-exporting-to');
      } 

  })

}
