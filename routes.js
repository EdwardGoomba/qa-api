'use strict';

const express = require('express');
const router = express.Router();

// GET /questions
// Route for questions collection
router.get('/', function(req, res) {
  res.json({
    response: 'You sent me a GET request'
  });
});

// POST /questions
// Route for creating questions
router.post('/', function(req, res) {
  res.json({
    response: 'You sent me a POST request',
    body: req.body
  });
});

// GET /questions/:qID
// Route for specific questions
router.get('/:qID', function(req, res) {
  res.json({
    response: 'You sent me a GET request for ID f that' + req.params.qID
  });
});

// POST /questions/:qID/answers
// Route for creating an answer
router.post('/:qID/answers', function(req, res) {
  res.json({
    response: 'You sent me a POST request to /answers',
    questionId: req.params.id,
    body: req.body
  });
});

// PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put('/:qID/answers/:aID', function(req, res) {
  res.json({
    response: 'You sent me a PUT request to /answers',
    questionId: req.params.qID,
    answerId: req.params.aID,
    body: req.body
  });
});

// DELETE /questions/:qID/answers/:aID
// Delete a specific answer
router.delete('/:qID/answers/:aID', function(req, res) {
  res.json({
    response: 'You sent me a DELETE request to /answers',
    questionId: req.params.qID,
    answerId: req.params.aID,
  });
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Vote on a specific answer
router.post('/:qID/answers/:aID/vote-:dir', function(req, res) {
  res.json({
    response: 'You sent me a POST request to /vote-' + req.params.dir,
    questionId: req.params.qID,
    answerId: req.params.aID,
    vote: req.params.dir
  });
});

module.exports = router;
