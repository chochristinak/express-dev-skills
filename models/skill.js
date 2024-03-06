// Skills "database"
const Skills = [
    {id: 111, skill: 'HTML', done: true},
    {id: 222, skill: 'CSS', done: true},
    {id: 333, skill: 'JavaScript', done: false},
    {id: 444, skill: 'Express', done: false}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return Skills;
}

function getOne(id) {
   id = parseInt(id)
   const skill = Skills.find(skill => skill.id === id)
   return skill
}