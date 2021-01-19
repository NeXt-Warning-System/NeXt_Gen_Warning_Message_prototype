const express = require('express')
const router = express.Router()

var folder = "v1"
var servicename = "NeXt Generation Warning System"
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
      console.log(res.locals.permit)
  // var words = res.locals.permit.targetareaautocomplete.split(' ')
  // res.locals.taCode = words[words.length - 1]
 //  res.locals.taName = words.slice(0, words.length - 2)
    next()
  });
  
       // set up redirect for target area
  
       router.get('/autocomplete-devoncornwall', function (req, res) {
        req.session.data = { area: 'devoncornwall' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

       // set up redirect for target area
       router.get('/autocomplete-solentsouthdowns', function (req, res) {
        req.session.data = { area: 'solentsouthdowns' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

       // set up redirect for target area
       router.get('/autocomplete-devoncornwallios', function (req, res) {
        req.session.data = { area: 'devoncornwallios' }
        res.redirect(`/v1/target-area/autocomplete`)
      })
      
       // set up redirect for target area
       router.get('/autocomplete-cumbrialancashirelanc', function (req, res) {
        req.session.data = { area: 'cumbrialancashirelanc' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

       // set up redirect for target area
       router.get('/autocomplete-cumbrialancashirecumb', function (req, res) {
        req.session.data = { area: 'cumbrialancashirecumb' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

        // set up redirect for target area
       router.get('/autocomplete-yorkshiresouthwest', function (req, res) {
        req.session.data = { area: 'yorkshiresouthwest' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

        // set up redirect for target area
       router.get('/autocomplete-yorkshirenortheast', function (req, res) {
        req.session.data = { area: 'yorkshirenortheast' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

       // set up redirect for target area
       router.get('/autocomplete-eastangliacb', function (req, res) {
        req.session.data = { area: 'eastangliacb' }
        res.redirect(`/v1/target-area/autocomplete`)
      })

        // set up redirect for target area
        router.get('/autocomplete-eastangliaens', function (req, res) {
        req.session.data = { area: 'eastangliaens' }
        res.redirect(`/v1/target-area/autocomplete`)
       })

        // set up redirect for target area
        router.get('/autocomplete-eastmidlands', function (req, res) {
          req.session.data = { area: 'eastmidlands' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         
         // set up redirect for target area
         router.get('/autocomplete-gtrmancsmerseyches', function (req, res) {
         req.session.data = { area: 'gtrmancsmerseyches' }
         res.redirect(`/v1/target-area/autocomplete`)
        })
            
         // set up redirect for target area
         router.get('/autocomplete-hertsnorthlondon', function (req, res) {
          req.session.data = { area: 'hertsnorthlondon' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
             
         // set up redirect for target area
         router.get('/autocomplete-kentslondonesussex', function (req, res) {
          req.session.data = { area: 'kentslondonesussex' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         

         // set up redirect for target area
         router.get('/autocomplete-lincsnorthland', function (req, res) {
          req.session.data = { area: 'lincsnorthland' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         

         // set up redirect for target area
         router.get('/autocomplete-northeast', function (req, res) {
          req.session.data = { area: 'northeast' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         


         // set up redirect for target area
         router.get('/autocomplete-thames', function (req, res) {
          req.session.data = { area: 'thames' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         


         // set up redirect for target area
         router.get('/autocomplete-wessexnorth', function (req, res) {
          req.session.data = { area: 'wessexnorth' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         

         // set up redirect for target area
         router.get('/autocomplete-wessexsouth', function (req, res) {
          req.session.data = { area: 'wessexsouth' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         


         // set up redirect for target area
         router.get('/autocomplete-westmidlandseast', function (req, res) {
          req.session.data = { area: 'westmidlandseast' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         

         // set up redirect for target area
         router.get('/autocomplete-westmidlandswest', function (req, res) {
          req.session.data = { area: 'westmidlandswest' }
          res.redirect(`/v1/target-area/autocomplete`)
         })
         


// select target area ========================================================

router.get('/target-area/autocomplete', function (req, res) {
  res.render(folder + '/target-area/autocomplete',{
      "formAction":"/"+ folder + "/target-area/review"
  })
})
router.get('/target-area/review', function (req, res) {
  const words = res.locals.data.targetareaautocomplete.split(' ')
  const code = words.slice(-1)[0]
  const name = words.slice(0, -1).join(' ')
  const targetArea = { code, name }

  // assign targetArea to locals if subsequent pages need the target area
  // res.locals.targetArea = targetArea
  // res.render(folder + '/target-area/review')

  // pass targetArea to view if only needed for this view
  res.render(folder + '/target-area/review', { targetArea })
})







         module.exports = router
