// const helpers = require('../../../helpers')

module.exports = function (router, myPath) {


  router.get('/' + myPath + '/name', function (req, res) {
    res.render(myPath + '/what-do-you-want-to-export',{
    })
  })
  
  router.post('/' + myPath + '/what-do-you-want-to-export', function (req, res) {

   // Save values
   req.session.waste = req.body.waste;

    if(req.query.returnUrl) {
      return res.redirect('check-answers');
    } else {
        req.session.errors = null;
        return res.redirect('confirm-waste');
      } 

  })



}
