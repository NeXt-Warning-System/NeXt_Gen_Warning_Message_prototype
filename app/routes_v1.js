const express = require('express')
const router = express.Router()

var folder = "v1"
var servicename = "Register as a waste carrier"
var paymentMethod = "govpay"  // or "govpay"


// HTML for standard buttons
var backlink = '<a href="javascript:history.back()" class="govuk-back-link">Back</a>'
var submitButton = '<button type="submit" id="continueButton" class="govuk-button" name="Continue">Continue</button>'
//var completeLink = '<a id="completeLink" href="/'+folder+'/save-and-return/check">Continue later</a>'
var completeLink = ''

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

router.use(function (req, res, next) {
    // set a folder and store in locals
    // this can then be used in pages as {{folder}}
    res.locals.folder=folder
    res.locals.backlink=backlink
    res.locals.submitButton=submitButton
    res.locals.completeLink=completeLink
    res.locals.paymentMethod=paymentMethod
    res.locals.serviceName=servicename
    // permit and autostore data set in all statement at bottom
    res.locals.permit=res.locals.data
  
    next()
  });
  
       // set up redirect for letter testing
       router.get('/autocomplete-devoncornwall', function (req, res) {
        req.session.data = { area: 'devoncornwall' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

       // set up redirect for letter testing
       router.get('/autocomplete-solentsouthdowns', function (req, res) {
        req.session.data = { area: 'solentsouthdowns' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

module.exports = router
