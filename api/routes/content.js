var express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const multer = require('../middleware/FileUpload');
const authCheck = require('../middleware/check-auth');
//=> End of declared dependencies

// @desc    Create new content
// @route   POST /api/v1/content/new
// @access  private
router.post('/new', authCheck, multer.upload.any(), contentController.createNewContent)

// @desc    Fetch all content by pagination
// @route   POST /api/v1/content/all/limit/:limit/page/:page
// @access  private
router.get('/all/limit/:limit/page/:page', contentController.getAllContents)

// @desc    Create new content contribution
// @route   POST /api/v1/content/contribution/new
// @access  private
router.post('/contribution/new', authCheck, multer.upload.any(), contentController.createNewContentWithContribution)

// @desc    Fetch all content by pagination
// @route   POST /api/v1/content/all/limit/:limit/page/:page
// @access  private
router.get('/contribution/all/limit/:limit/page/:page/user/:userId', contentController.getAllContentsWithContribution)

// @desc    Create new content contribution
// @route   POST /api/v1/contentcontribution/new
// @access  private
router.post('/work/new', authCheck, multer.upload.any(), contentController.createNewContentWithWork)

// @desc    Fetch all content by pagination
// @route   POST /api/v1/content/all/limit/:limit/page/:page
// @access  private
router.get('/work/all/limit/:limit/page/:page/user/:userId', contentController.getAllContentsWithWork)

// @desc    Create new content reaction
// @route   POST /api/v1/content/reaction/new
// @access  private
router.post('/reaction/new', contentController.createNewContentWithReaction);

router.get('/reaction/list/contentId/:contentId', contentController.getAllReactionContentByContentId);

router.get('/reaction/list/userId/:userId', contentController.getAllReactionContentByUserId);

// @desc    Create new content promotion
// @route   POST /api/v1/content/promotion/new
// @access  private
router.post('/promotion/new', contentController.createNewContentWithPromotion);

router.get('/promotion/list/userId/:userId', contentController.getAllPromotionContentByUserId);


module.exports = router;