const express = require('express');

module.exports = function(messages){
const router = express.Router();

router.get('/new', (req,res)=>{
    res.render('form');
});

router.post('/new',(req,res)=>{
    // res.send("post request");

    const {user, message} = req.body;
    let added =new Date().toJSON().slice(0,10)
    console.log(message);
    console.log(user);
    // const newtext =  {
    //     user,
    //     text,
    //     added: new Date().toJSON().slice(0,10)
    // }
    messages.push({
        message,
        user,
        added:added
    })

    // req.messages.push(newMessage);
    
    res.redirect('/');

})


    return router;
}
//Error: calling res.send(), res.redirect(), or res.render() more than once in the same route — either directly or by mistake in a callback, loop, or after already responding.


// module.exports = router;