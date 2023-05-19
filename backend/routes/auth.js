const db = require('../models');
const bcrypt = require('bcrypt');
const generateSillyName = require('../functions/generateSillyName');
const router = require('express').Router()

router.post('/login', async (req, res) => {
  const email = req.body.email, password = req.body.password;

  if (!email || !password) {return res.json({ error: true, message: "Parameter missing or invalid" })}

  db.userAuth.findOne({ where: { email } }).then( (user) => {
    if(!user) return res.json({error: true});

    bcrypt.compare(password, user.password, async (err, result) => {
      if(result) {
        req.session.userId = user.userId;

        const retUser = await db.userPub.findByPk(req.session.userId)

        return res.json({user: retUser});
      } else {
        return res.json({error: true});
      }
    })
  })
})

router.post('/signup', async (req, res) => {
  const email = req.body.email, password = req.body.password;

  if (!email || !password || !(email.endsWith("@g.austincc.edu"))) {return res.json({ error: true, message: "Parameter missing or invalid" })}
  
  name = generateSillyName();

  db.userAuth.findOne({ where: { email } }).then( async (user) => {

    if(user) return res.json({error: true, message: "User with name exists" });

    bcrypt.hash(password, 10, (err, hash) => {
      db.userPub.create({ name, userAuth: { email, password: hash } }, { include: db.userAuth }).then( async (user) => {
        req.session.userId = user.id;

        const retUser = await db.userPub.findByPk(req.session.userId)

        return res.json({user: retUser});
      })
    })
  })
})

module.exports = router;