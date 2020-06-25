const express = require('express');

// Path to your JSON file, although it can be hardcoded in this file.
let content = require('../../../data/team/week10/data.json');

exports.get = (req, res, next) => {
    res.render('pages/team/week10/ta10', {
        title: 'Team Activity 10',
        path: '/ta10',
        content: content,
    });
};

exports.getFetchAll = (req, res, next) => {
    res.json(dummyData);
};

exports.postInsert = (req, res, next) => {
    newPost = req.body;
    content.avengers.push(newPost);
    console.log(content);
};