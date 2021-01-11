// const helpers = require('../../../helpers')
module.exports = function (router, myPath) {

  router.get('/' + myPath + '/select-metal-type', function (req, res) {
    res.render(myPath + '/select-metal-type',{
      'waste': req.session.waste, 
    })
  })
  
  router.post('/' + myPath + '/select-metal-type', function (req, res) {

   

    // Errors
    // req.checkBody("ageRange", "Select an option").notEmpty();
    if(req.query.returnUrl) {
      return res.redirect('check-answers');
    } else {
        return res.redirect('select-waste-type');
      } 

  })

}
