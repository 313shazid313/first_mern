const express = require('express');
const userData = require('../models/userDataModel')
const router = express.Router()

router.post('/', async (req, res) => { //post mathod used for adding new data
  console.log(req.body);
  const { name, email, age } = req.body
  try {
    const userAdded = await userData.create({
      name: name,
      email: email,
      age: age
    })
    res.status(201).json(userAdded)
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error)
  }
})





router.get('/', async (req, res) => {  // get method used for getting all data 
  //find() function mongoose theke nawa
  try {
    const showAll = await userData.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})





router.get('/:id', async (req, res) => {  // "get('/:id')" used for getting specific data 
  const { id } = req.params;
  try {
    const singleUser = await userData.findById({ _id: id })
    //findById function mongoose theke nawa
    res.status(200).json(singleUser)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})





router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleteUser = await userData.findByIdAndDelete({ _id: id })
    res.status(200).json(deleteUser)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})





router.patch('/edit/:id', async (req, res) => {
  //"Patch method used for updating new data"
  const { id } = req.params
  try {
    const updateUser = await userData.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})


module.exports = router;