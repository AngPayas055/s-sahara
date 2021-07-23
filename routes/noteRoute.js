const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.route("/create").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const newNote = new Note({
        name,
        email,
        phone,
        message
    });

    newNote.save()
})

module.exports = router;