const Content = require("../../models/Content");
const userDao = require("../userDao/userDao");
const utils = require('../../utils/utils');
const ContentType = require('../../contants/ContentType');

findAllContents = (res) => {
    return new Promise((resolve, reject) => {
        Content.find({
            contentDeleted: false
        }).then(contents => {
            resolve(contents)
        }).catch(err => utils.defaultError(res, err))
    })
}

getAllContentByPageLimit = (res, page, limit) => {
    return new Promise((resolve, reject) => {
        Content.find({
            contentDeleted: false
        }).sort('dateOfCreation')
            .skip(Number(page * limit))
            .limit(Number(limit))
            .populate('user')
            .populate({
                path: 'parentContent',
                match: { contentDeleted: false }
            })
            .exec()
            .then(async contents => {
                // for(var i=0; i < contents.length; i++) {
                //     const user = await userDao.getUserById(content.userId);
                //     contents[i].user = user;
                // }

                let allContents = await findAllContents(res);

                resolve({
                    per_page: parseInt(limit),
                    total: allContents.length,
                    total_pages: Math.floor(allContents.length / limit),
                    data: contents,
                })
            }).catch(err => utils.defaultError(res, err))
    })
}

findAllContentsWithContribution = (res, userId) => {
    return new Promise((resolve, reject) => {
        Content.find({
            contentDeleted: false,
            user: userId
        }).then(contents => {
            resolve(contents)
        }).catch(err => utils.defaultError(res, err))
    })
}

getAllContentsWithContributionByPageLimit = (res, page, limit, userId) => {
    return new Promise((resolve, reject) => {
        Content.find({
            contentDeleted: false,
            user: userId,
        }).sort('dateOfCreation')
            .skip(Number(page * limit))
            .limit(Number(limit))
            .exec()
            .then(async contents => {
                let allContents = await findAllContentsWithContribution(res, userId);

                resolve({
                    per_page: parseInt(limit),
                    total: allContents.length,
                    total_pages: Math.floor(allContents.length / limit),
                    data: contents,
                })
            }).catch(err => utils.defaultError(res, err))
    })
}

findAllContentsWithWork = (res, userId) => {
    return new Promise((resolve, reject) => {
        Content.find({
            contentDeleted: false,
            user: userId
        }).then(contents => {
            resolve(contents)
        }).catch(err => utils.defaultError(res, err))
    })
}

getAllContentsWithWorkByPageLimit = (res, page, limit, userId) => {
    return new Promise((resolve, reject) => {
        Content.find({
            contentDeleted: false,
            user: userId,
        }).sort('dateOfCreation')
            .skip(Number(page * limit))
            .limit(Number(limit))
            .exec()
            .then(async contents => {
                let allContents = await findAllContentsWithWork(res, userId);

                resolve({
                    per_page: parseInt(limit),
                    total: allContents.length,
                    total_pages: Math.floor(allContents.length / limit),
                    data: contents,
                })
            }).catch(err => utils.defaultError(res, err))
    })
}

const getAllReactionContentByUserId = (userId) => {
    return Content.find({ contentDeleted: false, user: userId, contentType: ContentType.Reaction }, {
        user: 1,
        parentContent: 1,
        contentDescription: 1,
        contentTag: 1,
        contentImage: 1,
        contentType: 1,
        typeOfReaction: 1,
    });
}

const getAllReactionContentByContentId = (contenId) => {
    return Content.find({ contentDeleted: false, parentContent: contenId, contentType: ContentType.Reaction }, {
        user: 1,
        parentContent: 1,
        contentDescription: 1,
        contentTag: 1,
        contentImage: 1,
        contentType: 1,
        typeOfReaction: 1,
    });
}

const getAllPromotionContentByContentId = (contenId) => {
    return Content.find({ contentDeleted: false, parentContent: contenId, contentType: ContentType.Promotion }, {
        user: 1,
        parentContent: 1,
        contentDescription: 1,
        contentType: 1,
    });
}


const getAllPromotionContentByUserId = (userId) => {
    return Content.find({ contentDeleted: false, user: userId, contentType: ContentType.Promotion }, {
        user: 1,
        parentContent: 1,
        contentDescription: 1,
        contentType: 1,
    });
}

module.exports = {
    findAllContents,
    getAllContentByPageLimit,
    findAllContentsWithContribution,
    getAllContentsWithContributionByPageLimit,
    findAllContentsWithWork,
    getAllContentsWithWorkByPageLimit,
    getAllReactionContentByUserId,
    getAllReactionContentByContentId,
    getAllPromotionContentByContentId,
    getAllPromotionContentByUserId

}