const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update

}

function update(req,res) {
    console.log(req.body)
    Skill.updateOne((req.params.id),(req.body.name))
    res.redirect('/skills')
    
}

function edit(req, res){
  res.render('skills/edit', {
  skill: Skill.getOne(req.params.id),
  title: 'Making Progress?'
  })
}


function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
 }
 
 function create(req, res ){
   console.log(req.body)
   Skill.create(req.body)
   res.redirect('/skills')
 }
 
 function newSkill(req, res) {
   res.render('skills/new', {
      title: 'New Skill'
   })
 }

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: "All Skills"
    });
  }


  function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skills Details'
    })
  }