const Work = require('../models/work')

//for new todo
const addWork = async (req, res) => {
    const {todo,deadline}=req.body;
    try {
        const savedWork= await Work.create({
            todo : todo,
            deadline : deadline
        });
        res.status(200).json(savedWork);
        console.log('todo created')
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {addWork}