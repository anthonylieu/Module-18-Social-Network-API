const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  addReaction,
  removeReaction,
  deleteThought,
} = require('../../controllers/thought-controller');

// Route for retrieving all Thought documents: GET /api/thoughts
router.route('/').get(getAllThoughts);

// Route for creating a new Thought document and associating it with a User: POST /api/thoughts/:userId
router.route('/:userId').post(createThought);

// Routes for retrieving and updating a Thought document by its ID: GET and PUT /api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought);

// Route for deleting a Thought document by its ID and updating the associated User: DELETE /api/thoughts/:userId/:thoughtId
router.route('/:userId/:thoughtId').delete(deleteThought);

// Route for adding a reaction to an existing Thought document: POST /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// Route for removing a reaction from an existing Thought document: DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
