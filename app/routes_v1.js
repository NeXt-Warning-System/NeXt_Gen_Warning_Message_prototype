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

       // set up redirect for letter testing
       router.get('/autocomplete-devoncornwallios', function (req, res) {
        req.session.data = { area: 'devoncornwallios' }
        res.redirect(`/v1/target-area/autocomplete`)
      })
      
       // set up redirect for letter testing
       router.get('/autocomplete-cumbrialancashirelanc', function (req, res) {
        req.session.data = { area: 'cumbrialancashirelanc' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

       // set up redirect for letter testing
       router.get('/autocomplete-cumbrialancashirecumb', function (req, res) {
        req.session.data = { area: 'cumbrialancashirecumb' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

        // set up redirect for letter testing
       router.get('/autocomplete-yorkshiresouthwest', function (req, res) {
        req.session.data = { area: 'yorkshiresouthwest' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

        // set up redirect for letter testing
       router.get('/autocomplete-yorkshirenortheast', function (req, res) {
        req.session.data = { area: 'yorkshirenortheast' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

       // set up redirect for letter testing
       router.get('/autocomplete-eastangliacb', function (req, res) {
        req.session.data = { area: 'eastangliacb' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

        // set up redirect for letter testing
        router.get('/autocomplete-eastangliaens', function (req, res) {
        req.session.data = { area: 'eastangliaens' }
        res.redirect(`/v1/target-area/autocomplete`)
       })

        // set up redirect for letter testing
        router.get('/autocomplete-eastmidlands', function (req, res) {
          req.session.data = { area: 'eastmidlands' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         
         // set up redirect for letter testing
         router.get('/autocomplete-gtrmancsmerseyches', function (req, res) {
         req.session.data = { area: 'gtrmancsmerseyches' }
         res.redirect(`/v1/target-area/autocomplete`)
        })
            
         // set up redirect for letter testing
         router.get('/autocomplete-hertsnorthlondon', function (req, res) {
          req.session.data = { area: 'hertsnorthlondon' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
             
         // set up redirect for letter testing
         router.get('/autocomplete-kentslondonesussex', function (req, res) {
          req.session.data = { area: 'kentslondonesussex' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         

         // set up redirect for letter testing
         router.get('/autocomplete-lincsnorthland', function (req, res) {
          req.session.data = { area: 'lincsnorthland' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         

         // set up redirect for letter testing
         router.get('/autocomplete-northeast', function (req, res) {
          req.session.data = { area: 'northeast' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         


         // set up redirect for letter testing
         router.get('/autocomplete-thames', function (req, res) {
          req.session.data = { area: 'thames' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         


         // set up redirect for letter testing
         router.get('/autocomplete-wessexnorth', function (req, res) {
          req.session.data = { area: 'wessexnorth' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         

         // set up redirect for letter testing
         router.get('/autocomplete-wessexsouth', function (req, res) {
          req.session.data = { area: 'wessexsouth' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         


         // set up redirect for letter testing
         router.get('/autocomplete-westmidlandseast', function (req, res) {
          req.session.data = { area: 'westmidlandseast' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         

         // set up redirect for letter testing
         router.get('/autocomplete-westmidlandswest', function (req, res) {
          req.session.data = { area: 'westmidlandswest' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         







         module.exports = router
