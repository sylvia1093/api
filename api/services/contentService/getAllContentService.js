const ContentDao = require('../../daos/contentDao/contentDao');

async function getAllContents(res, page, limit) {
    let contents = await ContentDao.getAllContentByPageLimit(res, page, limit);
    res.status(200).json({
        success: true,
        code: 200,
        data: contents
    })
}

async function getAllContentsWithContribution(res, page, limit, userId) {
    let contents = await ContentDao.getAllContentsWithContributionByPageLimit(res, page, limit, userId);
    res.status(200).json({
        success: true,
        code: 200,
        data: contents
    })
}

async function getAllContentsWithWork(res, page, limit, userId) {
    let contents = await ContentDao.getAllContentsWithWorkByPageLimit(res, page, limit, userId);
    res.status(200).json({
        success: true,
        code: 200,
        data: contents
    })
}

const getAllReactionContentByUserId = async (req, userId, res) => {
    const contents = await ContentDao.getAllReactionContentByUserId(userId);
    res.status(200).json({
        success: true,
        code: 200,
        data: contents
    })
}

const getAllReactionContentByContentId = async (req, contentId, res) => {
    const contents = await ContentDao.getAllReactionContentByContentId(contentId);
    res.status(200).json({
        success: true,
        code: 200,
        data: contents
    })
}

const getAllPromotionContentByUserId = async (req, userId, res) => {
    const contents = await ContentDao.getAllPromotionContentByUserId(userId);
    res.status(200).json({
        success: true,
        code: 200,
        data: contents
    })
}

module.exports = {
    getAllContents,
    getAllContentsWithContribution,
    getAllContentsWithWork,
    getAllReactionContentByUserId,
    getAllReactionContentByContentId,
    getAllPromotionContentByUserId,
}