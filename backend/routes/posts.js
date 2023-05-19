const db = require('../models');
const router = require('express').Router()

// check if logged in
router.use(require('../functions/isLoggedIn'))

router.post('/create', (req, res) => {
  const title = req.body.title, body = req.body.body, mood = req.body.mood, userId = req.session.userId;

  if (!title || !body || !mood) {return res.json({ error: true, message: "Parameter missing or invalid" })}

  db.posts.create({ title: title, body: body, mood: mood, userId: userId }).then((post) => {return res.json({ post: post })});
});

router.get('/posts', async (req, res) => {
  const limit = req.query.limit < 50 ? parseInt(req.query.limit) : 50, offset = req.query.offset ? parseInt(req.query.offset) : 0;

  db.posts.findAll({ order: [ ['createdAt', 'DESC' ], ['id', 'DESC'] ], limit: limit, offset: offset }).then( (posts) => {
    return res.json({ posts })
  })
})

module.exports = router;