const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  res.send('User List')
})

router.get('/new', (req,res) =>{
  res.render("users/new")
})

router.post('/',(req,res) =>{
  const isValid = true 
  if(isValid)
  {
    users.push({name: req.body.name, email: req.body.email})
    //Her skulle der jeg sende navn og email til databasen
    res.redirect(`/users/${users.length - 1}`)
  }
  else {
    console.log("Error")
    res.render('users/new', {name: req.body.name, email: req.body.email})
  }
  res.send("Tak")
})


//Dynamiske routes skal ligge i bunden, statiske sider skal være øverest

router.route("/:id")
.get((req,res) =>{
  console.log(req.user)
  res.send(`Get User with ID ${req.params.id}`)
})
.put((req,res) =>{
  res.send(`Update User with ID ${req.params.id}`)
})
.delete((req,res) =>{
  res.send(`Delete User with ID ${req.params.id}`)
});

const users = [{ name: "Kyle"}, { name: "Sally" }]
router.param("id", (req,res,next, id) =>{
  req.user = users[id];
  next()
})

module.exports = router
