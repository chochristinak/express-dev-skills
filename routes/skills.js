var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new)

router.get('/:id', skillsCtrl.show)

router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.delete)

// for edit skill link
router.get('/edit/:id', skillsCtrl.edit)

router.put('/edit/:id', skillsCtrl.update)



module.exports = router;
