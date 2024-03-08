// Skills "database"
const skills = [
    {id: 111, skill: 'HTML', done: true},
    {id: 222, skill: 'CSS', done: true},
    {id: 333, skill: 'JavaScript', done: false},
    {id: 444, skill: 'Express', done: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}



function updateOne(id, skillChange) {
    console.log(skillChange)
    targetSkill = skills.find(skill => skill.id == id)
    targetSkill.skill = skillChange
    console.log(targetSkill, skills)
}
//     const idx = skills.findIndex(skill => skill.id === id)
//     skills.toSpliced(idx, 1, updateSkill);
//     console.log(skills)

   
function deleteOne (id){
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1);
}

function create(skill){
    skill.id = Date.now() % 1000000
    skill.done = false
    console.log(skill)
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
   id = parseInt(id)
   const skill = skills.find(skill => skill.id === id)
   return skill
}