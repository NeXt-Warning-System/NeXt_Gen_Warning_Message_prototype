// const helpers = require('../../../helpers')
module.exports = function (router, myPath) {

  router.get('/' + myPath + '/confirm-waste', function (req, res) {
    res.render(myPath + '/confirm-waste',{
      'waste': req.session.waste, 
    })
  })
  
  router.post('/' + myPath + '/confirm-waste', function (req, res) {

   

    // Errors
    // req.checkBody("ageRange", "Select an option").notEmpty();
    if(req.query.returnUrl) {
      return res.redirect('check-answers');
    } else {
        return res.redirect('where-are-you-exporting-to');
      } 

  })

}
