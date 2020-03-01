const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');


//Get gig list from model
router.get('/', (req, res) => 
    Gig.findAll()
        .then(gigs => {console.log(gigs)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

//Add a gig
router.get('/add', (req, res) => {
    const data = {
        title: 'Looking for a React developer',
        technologies: 'react, javascript, html, css',
        budget: '$3000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        contact_email: 'user1@gmail.com'
    }

    let = {title, technologies, budget, description, contact_email } = data;

    //Insert into table
    Gig.create({
        title: data.title,
        technologies: data.technologies,
        description: data.description,
        budget: data.budget,
        contact_email: data.contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});

module.exports = router;