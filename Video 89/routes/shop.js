const express = require('express');
const router = express.Router();

//define the home route
router.get('/',(req, res)=>{
    res.send('Shop home page')
})

//define the about router
router.get('/about', (req,res) =>{
    res.send('About shop')
})

// definethe about route
router.get('/blogpost/:slug', (req,res)=>{
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router